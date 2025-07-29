"use strict";

const inforEl = document.querySelector(".infor-content");
const btnSubmit = document.querySelector(".btn--Submit");
const errorEmail = document.getElementById("error-email");
const formEmail = document.querySelector(".submit-email");
let skillContentEl, btnsViewMore;

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

inforEl.classList.add("hidden");

// ======================================================================================
btnSubmit.addEventListener("click", function () {
  const emailValue = document.getElementById("email");
  if (!regex.test(emailValue.value)) {
    errorEmail.textContent = "Email không hợp lệ!";
  } else {
    inforEl.classList.remove("hidden");
    formEmail.classList.add("hidden");
  }
});

// ======================================================================================
function handleOnMouseOver(element) {
  btnsViewMore = element.querySelector(".view--more");
  btnsViewMore.style.display = "block";
}

function handleOnMouseOut(element) {
  btnsViewMore = element.querySelector(".view--more");
  btnsViewMore.style.display = "none";
}

function handleViewMore(element) {
  skillContentEl = element.querySelector(".exp-content");
  btnsViewMore = element.querySelector(".view--more");
  if (
    skillContentEl.style.display === "none" ||
    skillContentEl.style.display === ""
  ) {
    skillContentEl.style.display = "block";
    btnsViewMore.textContent = "▲ VIEW LESS";
  } else {
    skillContentEl.style.display = "none";
    btnsViewMore.textContent = "▼ VIEW MORE";
  }
}
