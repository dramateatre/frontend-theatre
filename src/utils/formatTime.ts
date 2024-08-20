export function formatTime(dateString: Date) {
    const date = new Date(dateString)
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')

    return ` ${hours}:${minutes}`
}
