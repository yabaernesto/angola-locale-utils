interface formatNumberProps {
  value: number
  decimalPlaces: number
}

export function formatNumber({
  value, decimalPlaces = 2
}: formatNumberProps): string {
  const roundedValue = value.toFixed(decimalPlaces)
  const [integerPart, decimalPart] = roundedValue.split('.')

  const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.')

  return decimalPart
    ? `${formattedIntegerPart},${decimalPart}`
    : formattedIntegerPart
}
