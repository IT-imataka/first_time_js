// require("dotenv").config();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const submit = document.getElementById("submit");
  const description = document.getElementById("description");
  // ↓　読み込み時には初期値を取得するため、ユーザーの値は取れない。
  // getweather関数内に書くか、改めてgetweatherに変数を宣言する。
  // const city = document.getElementById("usercity").value;

  const getweather = (event) => {
    event.preventDefault();
    // const usercity = city.value;
    const usercity = document.getElementById("usercity").value;
    const vvvv = "cbbec0c2762c46c170be28e8812cea56";
    const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${usercity}&appid=${vvvv}&units=metric&lang=ja`;

    fetch(APIurl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const location = data.name;
        const temperature = data.main.temp;
        const weather = data.weather[0].main;
        const situation = data.weather[0].description;
        const icondata = data.weather[0].icon;

        if (usercity === location) {
          document.getElementById("location").innerHTML = `場所:${location}`;
          document.getElementById(
            "temperature"
          ).innerHTML = `気温:${temperature}℃`;
          document.getElementById("weather").innerHTML = `天候:${weather}`;
          document.getElementById(
            "situation"
          ).innerHTML = `天候状況:${situation}`;
          const icon = document.getElementById("icon");
          const displayicon = icon.innerText = `${icondata}`;
        } else {
          window.alert("そんな地域は存在しないよ！");
        }
      })
      .catch((error) => console.error("Error", error));
    displayweather();
  };

  const displayweather = () => {
    usercity.value = "";
    if (displayicon === "04n") {
      icon.innerHTML = `<img src="../icon/天気記号7.svg" alt="曇り">`;
    }
    else if(displayicon === ""){

    }
  };

  form.addEventListener("submit", getweather);
});

// const CitynameMaps = {
//   "Hokkaido":"北海道",
//   "Aomori-ken":"青森県",
//   "Iwate":"岩手県",
//   "Miyagi-ken":"宮城県",
//   "Akita":"秋田県",
//   "Yamagata-ken":"山形県",
//   "Fukushima-ken":"福島県",
//   "Ibaraki":"茨城県",
//   "Tochigi":"栃木県",
//   "Gunma-ken":"群馬県",
//   "Saitama-ken":"埼玉県",
//   "Chiba-ken":"千葉県",
//   "Tokyo":"東京都",
//   "Kanagawa":"神奈川県",
//   "Yamanashi":"山梨県",
//   "Nagano-ken":"長野県",
//   "Niigata-ken":"新潟県",
//   "Toyama-ken":"富山県",
//   "Ishikawa-ken":"石川県",
//   "Fukui":"福井県",
//   "Gifu":"岐阜県",
//   "Shizuoka":"静岡県",
//   "Aichi-ken":"愛知県",
//   "Mie-ken":"三重県",
//   "滋賀県":"滋賀県",
//   "Mie-ken":"京都府 ",
//   "愛知県":"Hokkaido",
//   "愛知県":"Hokkaido",
//   "愛知県":"Hokkaido",
//   "愛知県":"Hokkaido",
// }

// const Japanese = CitynameMaps[location];
// console.log(Japanese);

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
