const navbtn = document.querySelector(".navbtn");
const gnav = document.getElementById("gnav");
const sns = document.querySelector(".sns");
// const fbox = document.getElementById("fbox");
const children = gnav.children[0];
const btnspanlist = document.getElementsByTagName("span");
const spantop = btnspanlist[0];
const spanunder = btnspanlist[2];
const spancenter = btnspanlist[1];

navbtn.addEventListener("click", function click() {
  // ヘッダーの表示非表示
  if (gnav.classList.contains("disappear")) {
    gnav.classList.remove("disappear");
  } else {
    gnav.classList.add("disappear");
    spantop.classList.remove("disappear");
  }
  // ハンバーガーメニューの変形
  if (spantop.classList.contains("disappear")) {
    spantop.classList.remove("disappear");
  } else {
    spantop.classList.add("disappear");
  }
  if (spancenter.classList.contains("disappear")) {
    spancenter.classList.remove("disappear");
  } else {
    spancenter.classList.add("disappear");
  }
  if (spanunder.classList.contains("disappear")) {
    spanunder.classList.remove("disappear");
  } else {
    spanunder.classList.add("disappear");
  }
});

// const footer = document.getElementById("footer");
// const fh = footer.getBoundingClientRect().top;
// const fuh = ftag.getBoundingClientRect().height;
const htop = document.getElementById("top");
const hh = htop.getBoundingClientRect().height;
const natural = document.getElementById("natural");
const nh = natural.getBoundingClientRect().top;
console.log(nh);

window.addEventListener("scroll", userscroll);
window.addEventListener("scroll", nf);

// function nf() {
//   if ((Yscroll > nh - window, innerHeight)) {
//     gnav.classList.add("nscroll");
//     children.classList.add("nscroll");
//     sns.classList.add("nscroll");
//   } else {
//     gnav.classList.remove("nscroll");
//     children.classList.remove("nscroll");
//     sns.classList.remove("nscroll");
//   }
// }

function userscroll() {
  const Yscroll = document.documentElement.scrollTop;
  console.log(Yscroll);
  const uscroll = window.innerHeight + Yscroll;
  // const Yscrolluh = document.documentElement.scrollHeight - window.innerHeight - window.pageYOffset;
  if (uscroll > hh) {
    gnav.classList.add("scroll");
    children.classList.add("scroll");
    if (uscroll > nh) {
      sns.classList.add("scroll");
    } else if (uscroll < nh) {
      sns.classList.remove("scroll");
    }
  } else if (uscroll < hh) {
    gnav.classList.remove("scroll");
    children.classList.remove("scroll");
  }
}
// 一番下までスクロールした時のuserscrollの処理
// if (Yscroll > fh - window.innerHeight) {
//   gnav.classList.add("scroll");
//   children.classList.add("scroll");
//   fbox.classList.add("scroll");
// }
// else {
//   gnav.classList.remove("scroll");
//   children.classList.remove("scroll");
//   fbox.classList.remove("scroll");
// }
// else if (Yscroll > naturalh - window.innerHeight) {
//   gnav.classList.add("nscroll");
//   children.classList.add("nscroll");
//   sns.classList.add("nscroll");
// }
// else if (Yscroll < naturalh - window.innerHeight) {
//   gnav.classList.remove("nscroll");
//   children.classList.remove("nscroll");
//   sns.classList.remove("nscroll");

// }
