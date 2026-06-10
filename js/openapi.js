fetch("https://api.open-meteo.com/v1/forecast?latitude=33.75&longitude=-84.39&current=temperature_2m,weather_code")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("temperature").innerText =
      data.current.temperature_2m + " °C";

    document.getElementById("weather").innerText =
      data.current.weather_code;
  })
  .catch((error) => {
    console.error(error);
  });