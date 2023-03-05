function debounce(f, ms) {
  let cd = false;

  return function () {
    if (cd) return;

    f.apply(this, arguments);

    cd = true;

    setTimeout(() => (cd = false), ms);
  };
}

let f = debounce(alert, 1000);

f(1);
f(2);

setTimeout(() => f(3), 100);
setTimeout(() => f(4), 1100);
setTimeout(() => f(5), 1500);
