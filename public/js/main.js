// const { json } = require("express/lib/response");

$(".carousel").carousel({
  interval: 1000,
});

const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");

const city_name = document.getElementById("city_name");

const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");

const datahide = document.querySelector(".middle_layer");

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;

  if (cityVal === "") {
    city_name.innerText = `Plz write the name before search`;
    datahide.classList.add("data_hide");
  } else {
    try {
      let url = `http://api.weatherapi.com/v1/current.json?key=fb1605cc3ff14ea9bb191758222403&q=${cityVal}&aqi=no`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      const icon = arrData[0].current.condition.icon;

      city_name.innerText = `${arrData[0].location.name}, ${arrData[0].location.country}  `;
      temp_real_val.innerText = arrData[0].current.temp_c;
      temp_status.innerHTML = `<img src="http://${icon}"/>`;

      datahide.classList.remove("data_hide");
    } catch {
      city_name.innerText = `Plz enter the city name properly`;
      datahide.classList.add("data_hide");
    }
  }
};

submitBtn.addEventListener("click", getInfo);
