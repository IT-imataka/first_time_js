require("dotenv").config();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const submit = document.getElementById("submit");
  const description = document.getElementById("description");
  // 読み込み時には初期値を取得するため、ユーザーの値は取れない。
  // getweather関数内に書くか、改めてgetweatherに変数を宣言する。
  // const city = document.getElementById("usercity").value;
  
  // const city = "osaka";
  
  const getweather = (event) => {
    event.preventDefault();
    // const usercity = city.value;
    const usercity = document.getElementById("usercity").value;
    const APIkey = "process.env.WEATHER_API_KEY";
    const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${usercity}&appid=${APIkey}&units=metric&lang=ja`;

    fetch(APIurl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const location = data.name;
        const temperature = data.main.temp;
        const weather = data.weather[0].main;
        const icon = data.weather[0].icon;
        const CitynameMaps = {
          "北海道":"Hokkaido",
          "青森県":"Aomori-ken",
          "岩手県":"Iwate",
          "宮城県":"Miyagi-ken",
          "秋田県":"Akita",
          "山形県":"Yamagata-ken",
          "福島県":"Fukushima-ken",
          "茨城県":"Ibaraki",
          "栃木県":"Tochigi",
          "群馬県":"Gunma-ken",
          "埼玉県":"Saitama-ken",
          "千葉県":"Chiba-ken",
          "Tokyo":"東京都",
          "神奈川県":"Kanagawa",
          "山梨県":"Yamanashi",
          "長野県":"Nagano-ken",
          "新潟県":"Hokkaido",
          "富山県":"Hokkaido",
          "石川県":"Hokkaido",
          "福井県":"Hokkaido",
          "岐阜県":"Hokkaido",
          "静岡県":"Hokkaido",
          "愛知県":"Hokkaido",
          "三重県":"Hokkaido",
          "愛知県":"Hokkaido",
          "愛知県":"Hokkaido",
          "愛知県":"Hokkaido",
          "愛知県":"Hokkaido",
          "愛知県":"Hokkaido",
          "愛知県":"Hokkaido",
        }
        if (location === CitynameMaps[usercity]) {
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
// .then(function(data){
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
