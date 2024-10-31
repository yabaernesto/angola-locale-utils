type CurrencyPosition = 'before' | 'after'

function formatCurrencyAOA(
  amount: number,
  position: CurrencyPosition = 'before'
): string {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  const formattedAmount = formatter.format(amount).replace('R$', 'Kz')

  return position === 'before'
    ? `Kz ${formattedAmount.replace('Kz', '').trim()}`
    : `${formattedAmount.replace('Kz', '').trim()} Kz`
}

export { formatCurrencyAOA }
