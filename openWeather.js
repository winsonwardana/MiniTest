const apiKey = "c544373ad18fefbac875e91add271eae";
const cityId = "1642907";

async function fetchData() {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}`
  );
  const result = await data.json();
  const predict = result.list;
  let previousDate = null;
  console.log("Weather Forecast:");
  for (let i = 0; i < predict.length; i++) {
    const forecast = predict[i];
    // console.log(forecast, "<<data forecast");
    const date = new Date(forecast.dt_txt);
    // console.log(date);
    const currentDate = date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    // console.log(currentDate, "per tanggal openweather");
    const nowDate = new Date();
    const now = nowDate.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // console.log(now, "tgl hari ni");
    if (now !== currentDate) {
      if (currentDate !== previousDate) {
        const day = date.toLocaleDateString("id-ID", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        const temperature = Math.round(forecast.main.temp - 273);

        console.log(`${day}: ${temperature}°C`);
      }
    }

    previousDate = currentDate;
  }
}

fetchData();
