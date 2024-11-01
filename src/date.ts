function formatDateAO(
  date: Date,
  format = 'DD/MM/YYYY',
  includeTime = false,
  use12HourFormat = false,
  includeSeconds = false
): string {
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }

  let formattedDate = new Intl.DateTimeFormat('pt-AO', options).format(date)

  // Adicionando a hora se includeTime for true
  if (includeTime) {
    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: use12HourFormat,
    }

    if (includeSeconds) {
      timeOptions.second = '2-digit' // Inclui segundos
    }

    const formattedTime = new Intl.DateTimeFormat('pt-AO', timeOptions).format(
      date
    )
    formattedDate += ` ${formattedTime}`
  }

  // Formatação baseada na opção de formato
  switch (format) {
    case 'MM/DD/YYYY':
      return formattedDate.split('/').reverse().join('/')
    case 'YYYY-MM-DD':
      return formattedDate.split('/').reverse().join('-')
    case 'extenso':
      const days = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
      ]

      const months = [
        'janeiro',
        'fevereiro',
        'março',
        'abril',
        'maio',
        'junho',
        'julho',
        'agosto',
        'setembro',
        'outubro',
        'novembro',
        'dezembro',
      ]

      const day = days[date.getDate() - 1]
      const month = months[date.getMonth()]
      const year = date.getFullYear()

      return `${day} de ${month} de ${year}`
    default:
      return formattedDate
  }
}

export { formatDateAO }
