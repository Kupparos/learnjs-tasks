alert( alert(1) || 2 || alert(3) );

// Выведет 1 с первого alert, однако alert(1) возвращает underfined, поэтому выподнится следующий операнд. Итого выведет 1, потом 2