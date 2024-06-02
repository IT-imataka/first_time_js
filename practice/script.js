document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const submit = document.getElementById("submit");
  const description = document.getElementById("description");
  const city = document.getElementById("usercity");

  // const city = "osaka";

  const getweather = (event) => {
    event.preventDefault();
    const usercity = city.value;
    const APIkey = "9dd08f431a1b5225b4a55db0337c4610";
    const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${usercity}&appid=${APIkey}&units=metric&lang=ja`;

    // const suburl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric&lang=ja`;

    fetch(APIurl)
      .then((res) => res.json())
      .then((user) => {
        console.log(user);
        const location = user.name;
        if (location === usercity) {
          const temperature = user.main.temp;
          const weather = user.weather[0].main;
          const icon = user.weather[0].icon;

          document.getElementById("location").innerHTML = `場所:${location}`;
          document.getElementById(
            "temperature"
          ).innerHTML = `気温:${temperature}`;
          document.getElementById("weather").innerHTML = `天候:${weather}`;
          document.getElementById("icon").innerHTML = `${icon}`;
        } else {
          window.alert("そんな地域は存在しないよ！");
        }
      })
      .catch((error) => console.error("Error", error));
    displayweather();
  };

  const displayweather = () => {
    usercity = "";
  };

  form.addEventListener("submit", getweather);
});

// fetch(APIurl)
// .then(function(res){
//   return res.json();
// })
// .then(function(user){
//   console.log(user);
// })
// .catch(function(error){
//   console.error("Error",error);
// })

// .then(function (res) {
//   return res.json();
// })
// .then(function (user) {
//   console.log(user);
// })
// .catch((error) => console.error("Error", error));
