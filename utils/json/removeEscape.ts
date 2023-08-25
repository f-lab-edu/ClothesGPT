export function removeEscape(str: string): string {
  return str.replace(/\n/g, '').replace(/\r/g, '').replace(/\t/g, '');
}
