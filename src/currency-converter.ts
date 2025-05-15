// NOTE: code left in here for compoarison "before/after"
/*
export function convert(chf: number, toCorrency: string): number {
  switch (toCorrency) {
    case "EUR":
      return 1.06 * chf;
    case "USD":
      return 1.19 * chf;
    case "GBP":
      return 0.9 * chf;
    default:
      throw new Error(`unsupported currency ${toCorrency}`);
  }
}
*/

const conversionRates: Map<string, number> = new Map([
  ["EUR", 1.06],
  ["USD", 1.19],
  ["GBP", 0.9],
]);

export function convert(chf: number, toCorrency: string): number {
  if (conversionRates.has(toCorrency)) {
    return chf * conversionRates.get(toCorrency);
  }
  throw new Error(`unsupported currency ${toCorrency}`);
}
