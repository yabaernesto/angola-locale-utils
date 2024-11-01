function formatNumberAO(value: number, decimalPlaces = 2): string {
  const roundedValue = value.toFixed(decimalPlaces)
  const [integerPart, decimalPart] = roundedValue.split('.')

  const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.')

  return decimalPart
    ? `${formattedIntegerPart},${decimalPart}`
    : formattedIntegerPart
}

export { formatNumberAO }
