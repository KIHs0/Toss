const resetbtn = document.querySelector("#resetbtn");
const flipbtn = document.querySelector("#flipbtn");
let headcount = document.querySelector(".headcount");
let tailcount = document.querySelector(".tailcount");
let counth = 0;
let countt = 0;
let coinanime = document.querySelector(".coin");
let img = document.querySelector("img");
let img2 = document.querySelector("#tail");
flipbtn.addEventListener("click", () => {
  let x = Math.floor(Math.random() * 2);
  console.log(x);
  if (x) {
    counth++;
    console.log("head");
    coinanime.style.animation = "spin-heads 2s forwards";
    img2.classList.add("frtail");
    setTimeout(() => {
      headcount.innerHTML = `<h4>Heads:${counth}<h4>`;
    }, 2200);
  } else {
    countt++;
    console.log("bal");
    coinanime.style.animation = "spin-tails 2s forwards";
    console.log("tail");
    img2.classList.remove("frtail");
    setTimeout(() => {
      tailcount.innerHTML = `<h4>Tails:${countt}<h4>`;
    }, 2200);
  }
  disable(x);
});

function disable(x) {
  flipbtn.disabled = true;
  setTimeout(() => {
    flipbtn.disabled = false;
    coinanime.style.animation = "";
  }, 2000);
}

resetbtn.addEventListener("click", () => {
  counth = 0;
  countt = 0;
  headcount.innerHTML = `<h4>Heads:0</h4>`;
  tailcount.innerHTML = `<h4>Tails:0</h4>`;
});
