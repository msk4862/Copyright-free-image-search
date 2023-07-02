import { ImageList } from '@/components/ImageList';

type Props = {
  params: { search: string };
};

export default function Page({ params }: Props) {
  return (
    <div className="w-full flex flex-col min-[100]:">
      <ImageList searchTerm={params.search} />
    </div>
  );
}
