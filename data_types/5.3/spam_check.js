function checkSpam(str) {
   return str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxxxx')
}

checkSpam('buy ViAgRA now')
checkSpam('free xxxxx')
checkSpam("innocent rabbit")