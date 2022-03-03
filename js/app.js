const searchWeather = () => {
  const API_key = "7d67c5a18c4e498bc4648e5b110b5577";
  const cityName = document.getElementById("inputValue").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayWeather(data));
  //   console.log(url);
};

const setInnerTxt = (id, text) => {
  document.getElementById(id).innerText = text;
};

const displayWeather = (tempareture) => {
  setInnerTxt("city", tempareture.name);
  setInnerTxt("temperature", tempareture.main.temp);
  setInnerTxt("weather", tempareture.weather[0].main);

  //   weather icon
  const url = `http://openweathermap.org/img/wn/${tempareture.weather[0].icon}@2x.png`;
  const wethImg = document.getElementById("w-img");
  wethImg.setAttribute("src", url);
  console.log(tempareture);
};
