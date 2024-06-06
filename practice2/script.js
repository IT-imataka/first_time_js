// const { response } = require("express");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const submit = document.getElementById("submit");
  const vvvv = "WEATHER";

  const getweather = (event) => {
    event.preventDefault();
    const usercity = document.getElementById("usercity").value;
    const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${usercity}&appid=${vvvv}&units=metric&lang=ja`;
    fetch(APIurl)
      .then((res) => {
        if (!res.ok) {
          // console.error("正しい地域を入力してください。", (res) => {
            window.alert("正しい地域を入力してください。",res);
          // });
        } else {
          res.json().then((data) => {
            console.log(data);
            const location = data.name;
            const temperature = data.main.temp;
            const situation = data.weather[0].description;
            const weather = data.weather[0].main;

            if (usercity === location) {
              document.getElementById(
                "location"
              ).innerHTML = `場所：${location}`;
              document.getElementById(
                "temperature"
              ).innerHTML = `気温：${temperature}`;
              document.getElementById(
                "situation"
              ).innerHTML = `天候状況：${situation}`;
              document.getElementById("weather").innerHTML = `天候：${weather}`;
            } else {
              window.alert("都道府県名は日本語で入力してください");
            }
          });
        }
      })
      .catch(function (error) {
        console.error("Error", error);
      });
    displayweather();
  };
  const displayweather = () => {
    usercity.value = "";
  };
  form.addEventListener("submit", getweather);
});
