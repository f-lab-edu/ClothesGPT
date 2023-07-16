export function haveAllKey(
  target: Record<string, string>,
  compare: Record<string, string>,
): boolean {
  if (!target) {
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
