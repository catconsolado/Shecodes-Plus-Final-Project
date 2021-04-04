// Current Date //

function currentDate(timestamp) {
    let date = new Date(timestamp);
    let currentHour = date.getHours();
    let currentMinutes = date.getMinutes();
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let currentDay = days[date.getDay()];
  
    return ` ${currentDay}, ${currentHour}:${currentMinutes} `;
  }
  
  let now = new Date();
  let h1 = document.querySelector("h1");
  h1.innerHTML = currentDate(now);
  
  // Submit city //
  
  let form = document.querySelector(".d-flex");
  
  function submitCity(event) {
    event.preventDefault();
  
    let city = document.querySelector(".me-2").value;
    let apiKey = "659c08afcc015e0a0d8df5ed5acc6b52";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  
  form.addEventListener("submit", submitCity);
  
  // Display Weather //
  
  function displayWeather(response) {
    let h3 = document.querySelector("h3");
    h3.innerHTML = response.data.name;
    document.querySelector(".live-temperature").innerHTML = Math.round(
      response.data.main.temp
    );
  }
  