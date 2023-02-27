let date = new Date(2015, 0, 2);

function getDateAgo(date) {
   let d = new Date(date);

  d.setDate(date.getDate() - days);
  return d.getDate();
}

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) );