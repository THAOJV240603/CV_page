// Chế độ strict
"use strict";

let title = document.querySelector("h3");

if (document.location.href.includes("project-cv")) {
  let all = document.querySelectorAll(".cv");

  title.innerHTML = "CV CÁ NHÂN";
  all.forEach((item) => {
    item.style.display = "flex";
  });
} else if (document.location.href.includes("project-pets")) {
  let all = document.querySelectorAll(".pets");

  title.innerHTML = "TRANG WEB QUẢN LÝ THÚ CƯNG";
  all.forEach((item) => {
    item.style.display = "flex";
  });
} else if (document.location.href.includes("project-news")) {
  let all = document.querySelectorAll(".news");

  title.innerHTML = "TRANG WEB XEM TIN TỨC";
  all.forEach((item) => {
    item.style.display = "flex";
  });
}
