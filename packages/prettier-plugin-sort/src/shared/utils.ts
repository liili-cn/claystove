export function alphabetSort(a: number, b: number): number;
export function alphabetSort(a: string, b: string): number;
export function alphabetSort(a: number | string, b: number | string): number {
  if (a > b) {
    return 1;
  }

  if (a < b) {
    return -1;
  }

  return 0;
}
