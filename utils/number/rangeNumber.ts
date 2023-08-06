export type RangeMinMax = {
  max: number;
  min: number;
};

export const rangeNumber = (
  value: string | number,
  options: RangeMinMax,
): string => {
  const { min, max } = options;
  const numberValue = Number(value);

  if (min != undefined && numberValue < min) {
    return String(min);
  }
  if (max != undefined && numberValue > max) {
    return String(max);
  }
  return String(numberValue).replace(/(?!^-)[^0-9.]/g, '');
};
