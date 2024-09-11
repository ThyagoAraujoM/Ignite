export function dateToString(date: Date) {
  let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

  let month = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  let year = date.getFullYear();

  let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

  return `${day}/${month}/${year} ${hour}:${minutes}`;
}

export function stringToDate(date: string) {
  const formatoAmericano = date.replace(/(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2})/, "$3-$2-$1T$4:$5");
  const dataConvertida = new Date(formatoAmericano);
  return dataConvertida;
}
