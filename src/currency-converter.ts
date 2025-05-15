// NOTE: code left in here for compoarison "before/after"
/*
export function convert(chf: number, toCorrency: string): number {
  switch (toCorrency) {
    case "EUR":
      return 0.94 * chf;
    case "USD":
      return 0.84 * chf;
    case "GBP":
      return 1.11 * chf;
    default:
      throw new Error(`unsupported currency ${toCorrency}`);
  }
}
*/

const conversionRates: Map<string, number> = new Map([
  ["EUR", 0.94],
  ["USD", 0.84],
  ["GBP", 1.11],
]);

export function convert(chf: number, toCorrency: string): number {
  if (conversionRates.has(toCorrency)) {
    return chf * conversionRates.get(toCorrency);
  }
  throw new Error(`unsupported currency ${toCorrency}`);
}
