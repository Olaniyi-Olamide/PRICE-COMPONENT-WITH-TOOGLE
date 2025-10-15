"use strict";
const span = document.querySelectorAll("span");
const toogleBtn = document.querySelector(".toogle-btn");
const basicPriceAnnually = document.querySelector(".basic-price-annually");
const basicPriceMonthly = document.querySelector(".basic-price-monthly");
const professionalPriceAnnually = document.querySelector(
  ".professional-price-annually"
);
const professionalPriceMonthly = document.querySelector(
  ".professional-price-monthly"
);
const masterPriceAnnually = document.querySelector(".master-price-annually");
const masterPriceMonthly = document.querySelector(".master-price-monthly");

const tooglePriceAnnually = function (basic, professional, master) {
  span.forEach((span) => {
    span.classList.add("text-annimation");
  });
  setTimeout(() => {
    span.forEach((span) => {
      span.classList.remove("text-annimation");
    });
    basic.classList.toggle("hidden");
    professional.classList.toggle("hidden");
    master.classList.toggle("hidden");
  }, 1500);
};

const tooglePriceMonthly = function (basic, professional, master) {
  span.forEach((span) => {
    span.classList.add("text-annimation");
  });
  setTimeout(() => {
    span.forEach((span) => {
      span.classList.remove("text-annimation");
    });
    basic.classList.toggle("hidden");
    professional.classList.toggle("hidden");
    master.classList.toggle("hidden");
  }, 1500);
};

toogleBtn.addEventListener("click", function () {
  toogleBtn.classList.toggle("toogle");

  tooglePriceAnnually(
    basicPriceAnnually,
    professionalPriceAnnually,
    masterPriceAnnually
  );

  tooglePriceMonthly(
    basicPriceMonthly,
    professionalPriceMonthly,
    masterPriceMonthly
  );
});
