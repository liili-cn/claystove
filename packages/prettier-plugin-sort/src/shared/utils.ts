export function alphabeticSort(a: number, b: number): number;
export function alphabeticSort(a: string, b: string): number;
export function alphabeticSort(a: number | string, b: number | string): number {
  if (a > b) {
    return 1;
  }

  if (a < b) {
    return -1;
  }

  return 0;
}
