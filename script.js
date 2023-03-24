
document.getElementById("next").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").appendChild(lists[0]);
};
document.getElementById("prev").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").prepend(lists[lists.length - 1]);
};
// coundown
let endDate = new Date("06/26/2023 00:00:00").getTime();
let check = setInterval(function () {
  let now = new Date().getTime();
  let distance = endDate - now;
  let hour = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  let minute = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
  let seconds = Math.floor((distance % (60 * 1000)) / 1000);
  document.getElementById("hours").innerText = hour;
  document.getElementById("minutes").innerText = minute;
  document.getElementById("seconds").innerText = seconds;
  if (distance <= 0) {
    clearInterval(check);
  }
}, 1000);
// add cart
const btn = docment.querySelectorAll('.add-to-cart');
console.log(000000);
alert('ok');


