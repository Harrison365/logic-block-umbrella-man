const minUmbrellas = (weatherArr) => {
  let count = 0;
  let homeUmbrellas = 0;
  let workUmbrellas = 0;
  for (let i = 0; i < weatherArr.length; i++) {
    if (i % 2 === 0) {
      if (weatherArr[i] === "rainy" || weatherArr[i] === "thunderstorms") {
        if (homeUmbrellas) {
          homeUmbrellas--;
          workUmbrellas++;
        } else if (!homeUmbrellas) {
          count++;
          workUmbrellas++;
        }
      }
    }
    if (i % 2 === 1) {
      if (weatherArr[i] === "rainy" || weatherArr[i] === "thunderstorms") {
        if (workUmbrellas) {
          workUmbrellas--;
          homeUmbrellas++;
        } else if (!workUmbrellas) {
          count++;
          homeUmbrellas++;
        }
      }
    }
  }
  return count;
};
module.exports = minUmbrellas;
