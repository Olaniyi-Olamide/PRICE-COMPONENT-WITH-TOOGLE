"use strict";
const span = document.querySelectorAll("span");
const toogleBtn = document.querySelector(".toogle-btn");
const basicPrice = document.querySelector(".basic-price");
const professionalPrice = document.querySelector(".professional-price");
const masterPrice = document.querySelector(".master-price");

const tooglePrice = function (basic, professional, master) {
  span.forEach((span) => {
    span.classList.add("text-annimation");
  });
  setTimeout(() => {
    span.forEach((span) => {
      span.classList.remove("text-annimation");
    });
    if (toogleBtn.classList.contains("toogle")) {
      basic.innerHTML = "$19.99";
      professional.innerHTML = "$24.99";
      master.innerHTML = "$39.99";
    }
    if (!toogleBtn.classList.contains("toogle")) {
      basic.innerHTML = "$199.99";
      professional.innerHTML = "$249.99";
      master.innerHTML = "$399.99";
    }
  }, 1500);
};

toogleBtn.addEventListener("click", function () {
  toogleBtn.classList.toggle("toogle");

  tooglePrice(basicPrice, professionalPrice, masterPrice);
});
