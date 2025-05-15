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
