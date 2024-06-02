const COUNT = 10;
const dots = Array.from({ length: COUNT });

function animation() {
  dots.map(function (dot, index) {
    const angel = (360 / COUNT) * index;
    return dot.animate(
      [
        {
          transform: `rotate(${angle}deg) translateX(0px)`,
          opacity: 1,
        },
        {
          transform: `rotate(${angle}deg) translateX(100px)`,
          opacity: 1,
          offset: 0.8, // キーフレームの位置を80%の位置に設定
        },
        {
          transform: `rotate(${angle}deg) translateX(100px)`,
          opacity: 0,
        },
      ],
      {
        duration: 500,
      }
    );
  });
}


const cart_btns = document.querySelectorAll(".cart_btn");
const cart_cnt_icon = document.querySelector(".cart_cnt");
let cart_cnt = 0;
const clicked = [];
let save_items = JSON.parse(localStorage.getItem("items")) || [];

function updateCart() {
  if (cart_cnt === 0) {
    cart_cnt_icon.classList.add("hidden");
  } else {
    cart_cnt_icon.classList.remove("hidden");
  }
  cart_cnt_icon.innerHTML = cart_cnt;
}

function updateLocalStorage() {
  localStorage.setItem("items", JSON.stringify(save_items));
}

cart_btns.forEach(function (cart_btn, index) {
  cart_btn.addEventListener("click", function () {
    const itemIndex = clicked.indexOf(index);
    if (itemIndex >= 0) {
      cart_cnt--;
      clicked.splice(itemIndex, 1);
      save_items = save_items.filter((item) => item.id !== index);
      cart_btn.classList.remove("active");
      cart_btn.innerHTML = "カートへ";
    } else {
      cart_cnt++;
      clicked.push(index);
      cart_btn.classList.add("active");
      cart_btn.innerHTML = "カートに追加されました!";
      let name = cart_btn.dataset.name;
      let price = cart_btn.dataset.price;
      save_items.push({
        id: index,
        name: name,
        price: price,
      });
    }
    // animation();
    updateCart();
    updateLocalStorage();
  });
});

updateCart(); // カートの初期状態を反映

