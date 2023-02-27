function name(str, num) {
  if (str.length > num) return str.slice(0, num) + "...";
  return str;
}

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);

truncate("Всем привет!", 20);
