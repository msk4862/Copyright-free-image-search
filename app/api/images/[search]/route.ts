import { NextRequest, NextResponse } from 'next/server';
import ServicesList from '@/utils/servicesList';
import Image from '@/utils/models/Image';
import { getParsedValue, shuffleArray } from '@/utils/util';
import { GetImageRouteResponse, TServices } from '@/utils/types';
import { MAX_IMAGES_PER_PAGE, PAGE_NO } from '@/utils/constants';

export const GET = async (
  req: NextRequest,
  { params }: { params: { search: string } }
): Promise<NextResponse<GetImageRouteResponse>> => {
  const { searchParams } = req.nextUrl;

  const imagesPerPage = getParsedValue(
    searchParams.get('images_per_page'),
    parseInt,
    MAX_IMAGES_PER_PAGE
  );
  const page = getParsedValue(searchParams.get('page'), parseInt, PAGE_NO);
  const searchTerm = params.search;

  // fetching all enabled services
  const enabledServices = ServicesList.getEnabledServicesList();
  const per_service_images = Math.ceil(imagesPerPage / enabledServices.length);

  const promises: Array<Promise<Image[]>> = [];
  // calling all enabled service's apis
  for (const service of enabledServices) {
    promises.push(new service().request(searchTerm, per_service_images, page));
  }

  let images: Image[] = [];
  const successfulServices: TServices[] = [];
  const unsuccessfulServices: TServices[] = [];

  try {
    const responses = await Promise.allSettled<Image[]>(
      promises.map((p) => p.catch((e) => e))
    );

    for (let i = 0; i < responses.length; i++) {
      const serviceResult = responses[i];
      const serviceName = ServicesList.getEnabledServicesList()[i].SERVICE_NAME;

      if (serviceResult.status === 'rejected') {
        console.log(`Service failed - ${serviceName}: `, serviceResult.reason);
        unsuccessfulServices.push(serviceName);
      }
      // some other error occured during API call
      else if (serviceResult.value instanceof Error) {
        console.log(`Service failed - ${serviceName}: `, serviceResult.value);
        unsuccessfulServices.push(serviceName);
      } else {
        images = images.concat(serviceResult.value);
        successfulServices.push(serviceName);
      }
    }

    if (successfulServices.length > 0) {
      // shuffle images
      shuffleArray(images);
      return NextResponse.json({
        status: true,
        successfulServices: successfulServices,
        unsuccessfulServices: unsuccessfulServices,
        result: images,
      });
    } else {
      console.log('All services failed!');
      return NextResponse.json({ status: false, error: 'All services failed' });
    }
  } catch (e) {
    console.log('Main services fetching function failed - ', e);
    return NextResponse.json({
      status: false,
      error:
        'Something went wrong while fetching data from external APIs: ' + e,
    });
  }
};
