function formatDateAO(date: Date, includeTime: boolean = false): string {
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }

  const formattedDate = new Intl.DateTimeFormat('pt-AO', options).format(date)

  if (includeTime) {
    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }

    const formattedTime = new Intl.DateTimeFormat('pt-AO', timeOptions).format(
      date
    )

    return `${formattedDate} ${formattedTime}`
  }

  return formattedDate
}

export { formatDateAO }
