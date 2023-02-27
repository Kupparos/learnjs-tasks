function formatDate(date) {
  let day = date.getDate();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let difMs = new Date() - date;
  let difSec = Math.round(difMs / 1000);
  let difMin = difSec / 60;
  let difHour = difMin / 60;

  year = year.toString().slice(-2);
  month = month < 10 ? "0" + month : month;
  dayOfMonth = day < 10 ? "0" + day : day;
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  if (difSec < 1) {
    return "прямо сейчас";
  } else if (difMin < 1) {
    return `${difSec} сек. назад`;
  } else if (difHour < 1) {
    return `${difMin} мин. назад`;
  } else {
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
  }
}

alert(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

alert(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

alert(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert(formatDate(new Date(new Date() - 86400 * 1000)));
