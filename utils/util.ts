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
