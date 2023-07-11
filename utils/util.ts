import Image from './models/Image';
import { TFilterKeys, TServices, TSortKey } from './types';

/**
 * @description Shuffles input array inplace
 */
export const shuffleArray = <T>(array: Array<T>) => {
  var range = array.length;

  while (range > 1) {
    var randIndex = Math.floor(Math.random() * range);
    var temp = array[range - 1];
    array[range - 1] = array[randIndex];
    array[randIndex] = temp;

    range -= 1;
  }
};

/**
 * @description Parses `value` if it has non-bull value using provided `parserFn`,
 * otherwise return `defaultValue`
 */
export const getParsedValue = <TInput, TDefaultValue>(
  value: TInput,
  parserFn: (input: NonNullable<TInput>) => TDefaultValue,
  defaultValue: TDefaultValue
) => {
  if (value) {
    return parserFn(value);
  }

  return defaultValue;
};

/**
 * To perform all filtering and sorting oprations on image array
 * @param {Image[]} images
 * @param {TFilterKeys} filterKeys
 * @param {TSortKey} sortKey
 * @returns {Image[]} Image array after applying filtering and sorting
 */
export const dataParser = (
  images: Image[],
  filterKeys: TFilterKeys,
  sortKey: TSortKey
) => {
  let parsedImages = images;

  if (sortKey !== 'Default') {
    parsedImages = sortData(parsedImages, sortKey);
  }

  if (filterKeys) {
    if (Object.keys(filterKeys).length > 0)
      parsedImages = filterData(parsedImages, filterKeys);
  }

  return parsedImages;
};

/**
 * Sort data based on sortKey
 */
export const sortData = (images: Image[], sortKey: TSortKey) => {
  return images.sort((img1, img2) => {
    switch (sortKey) {
      case 'Popularity':
        return img2.likes - img1.likes;

      default:
        return -1;
    }
  });
};

export const filterData = (images: Image[], filterKeys: TFilterKeys) => {
  let filteredImages = images;

  let filterKey: keyof TFilterKeys;
  for (filterKey in filterKeys) {
    switch (filterKey) {
      case 'Owner':
        filteredImages = applyOwnerFilter(
          filteredImages,
          filterKeys[filterKey]
        );
        break;
      case 'Orientation':
        filteredImages = applyOrientationFilter(
          filteredImages,
          filterKeys[filterKey]
        );
        break;
      default:
    }
  }

  return filteredImages;
};

/**
 * To filter images array accrording to given image owner
 */
export const applyOwnerFilter = (images: Image[], owner: TServices) => {
  return images.filter((image) => {
    return image.service === owner;
  });
};

/**
 * To filter images based on image orientation
 */
export const applyOrientationFilter = (
  images: Image[],
  orientation: TFilterKeys['Orientation']
) => {
  return images.filter((image) => {
    if (orientation === 'Landscape') return image.width > image.height;
    return image.width <= image.height;
  });
};

/**
 * To convert the first character of string to uppercase
 * @returns {String} Capitalized string
 */
export const capitalize = (str: string) => {
  str = str.trim();
  return str[0].toUpperCase() + str.substr(1);
};
