type FormatCurrencyProps = {
  currency: string;
  style: string;
};

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, <
  FormatCurrencyProps
>{
  currency: "USD",
  style: "currency",
});
export const FormatCurrency = (number: number | bigint) => {
  return CURRENCY_FORMATTER.format(number);
};

export default FormatCurrency;
