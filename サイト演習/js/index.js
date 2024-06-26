// ↓ イベントターゲットのデバック用
//   console.log(event.target);
// ↓ クラスリスト確認用
//   console.log(button.classList);

// ↓　グリーンシーズン切り替え用のトグルボタン(できたら多分むり)
const toggle = document.querySelectorAll(".toggle");

toggle.forEach((event) =>
  event.addEventListener("click", () => {
    console.log(event.classList);
    if (event.classList.contains("active")) {
      event.classList.remove("active");
    } else {
      event.classList.add("active");
    }
  })
);
// ↓ ハンバーガー
const spbtn = document.getElementById("spbtn");

spbtn.addEventListener("click", () => {
  const component = document.querySelectorAll(".component");
  component.forEach((event) => {
    if (event.classList.contains("active")) {
      event.classList.remove("active");
    } else {
      event.classList.add("active");
    }
  });
});

// ↓　絞り込み
const filterbtn = document.querySelectorAll(".filterbtn");
// console.log(filterbtn);
const contents = document.querySelectorAll(".contents");
const topics = document.querySelectorAll(".topic");
// console.log(topics);

const filter = (event) => {
  // ↓　ボタンのDOM操作
  document.querySelector(".active").classList.remove("active");
  event.target.classList.add("active");
  // ↓　クラスが付いた時の対象要素の確認用
  // console.log(event.target);
  // ↓　クラスが付いた時の対象要素のデータの名前の確認用
  // console.log(event.target.dataset.name);

  contents.forEach((display) => {
    // ↓　現れるコンテンツデータの名前確認用
    // console.log(display.dataset.name);
    if (display.dataset.name === event.target.dataset.name) {
      document.querySelector(".display").classList.remove("display");
      display.classList.add("display");
    }
  });

  topics.forEach((display) => {
    // console.log(display.dataset.name);
    if (display.dataset.name === event.target.dataset.name) {
      display.classList.add("appear");
      display.classList.remove("hide");
    } else if (event.target.dataset.name === "all") {
      display.classList.add("all");
    } else {
      display.classList.remove("appear", "all");
      display.classList.add("hide");
    }
  });
};

filterbtn.forEach((data) => {
  data.addEventListener("click", filter);
});
