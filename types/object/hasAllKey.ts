import { isEmpty } from '@/utils/survey/object/isEmpty';

export function hasAllKey(
  target: Record<string, string>,
  compare: Record<string, string>,
): boolean {
  if (isEmpty(target)) {
    return true;
  }
  const targetKeys = Object.keys(target);

  for (const key of targetKeys) {
    if (target[key] !== compare[key]) {
      return false;
    }
  }
  return true;
}
