export const converDate = (dateStamp: string) => {
    const date = new Date(dateStamp)
    const day = date.getDate() < 9 ? "0" + date.getDate() : date.getDate()
    const month = date.getMonth() < 9 ? "0" + date.getMonth() : date.getMonth()
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
}