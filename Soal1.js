let log = "";
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    log += "ApaBole";
  } else if (i % 3 === 0) {
    log += "Apa";
  } else if (i % 5 === 0) {
    log += "Bole";
  } else {
    log += i;
  }

  if (i !== 100) {
    log += ", ";
  }
}

console.log(log);
