function getSecondsToTomorrow() {
   let d = new Date();
   const secondsInADay = 86400;
   return secondsInADay - d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
 }
 
 alert(getSecondsToTomorrow());