document.addEventListener("DOMContentLoaded", () => {
  const vvvv = "weather";
  const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${vvvv}&units=metric&lang=ja`;

  fetch(APIurl).then((res) => {
    if (res !== "200") {
      window.alert("正しい地名を入力してください");
    } else {
      res
        .json()
        .then((data) => {
          const usercity = document.getElementById("usercity").value;
        })
        .catch((error) => console.error("残念！エラーでした！", error));
    }
  });
});
