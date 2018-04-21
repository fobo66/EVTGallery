export function compare(expected: string, given: string): boolean {
  return expected.toLocaleLowerCase().localeCompare(given.toLocaleLowerCase()) === 0;
}
