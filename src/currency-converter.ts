// NOTE: code left in here for compoarison "before/after"
/*
export function convert(chf: number, toCurrency: string): number {
  switch (toCurrency) {
    case "EUR":
      return 0.94 * chf;
    case "USD":
      return 0.84 * chf;
    case "GBP":
      return 1.11 * chf;
    default:
      throw new Error(`unsupported currency ${toCurrency}`);
  }
}
*/

const conversionRates: Map<string, number> = new Map([
  ["EUR", 0.94],
  ["USD", 0.84],
  ["GBP", 1.11],
]);

export function convertNew(chf: number, toCurrency: string): number {
  if (conversionRates.has(toCurrency)) {
    return chf * conversionRates.get(toCurrency);
  }
  throw new Error(`unsupported currency ${toCurrency}`);
}
