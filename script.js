"use strict";

// QUERIES
const modal = document.querySelector(".modal");
const modalPwd = document.querySelector(".modal-pwd");
const overlay = document.querySelector(".overlay");
const btnCloseBtn = document.querySelector(".close-btn");
const btnOpenModal = document.querySelectorAll(".show-modal");
const btnOpenModalPwd = document.querySelectorAll(".show-modal-pwd");
const loginForm = document.querySelector(".login");

/* FIXME - CLEAN REPEATED CODE */
//SINGUP MODAL
//Function to open SINGUP overlay
const openModal = function () {
  console.log("Button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  loginForm.classList.add("hidden");
};

// Function to hide SINGUP overlay
const closeBtn = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  loginForm.classList.remove("hidden");
};

// Open SINGUP modal on "button" click
for (let x = 0; x < btnOpenModal.length; x++) {
  btnOpenModal[x].addEventListener("click", openModal);
}

// Close SINGUP modal on "Login" click
btnCloseBtn.addEventListener("click", closeBtn);

// Close SINGUP modal on overlay click
overlay.addEventListener("click", closeBtn);

// Close SINGUP on "Esc" key press
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeBtn();
  }
});

/* FIXME - CLEAN REPEATED CODE */
// RESET PASSWORD MODAL
//Function to open overlay of pwd reset
const openModalPwd = function () {
  console.log("Button clicked");
  modalPwd.classList.remove("hidden");
  overlay.classList.remove("hidden");
  loginForm.classList.add("hidden");
};

// Open RESET PASSWORD modal on button click
for (let x = 0; x < btnOpenModalPwd.length; x++) {
  btnOpenModalPwd[x].addEventListener("click", openModalPwd);
}

// Function to hide RESET PWD overlay
const closeBtnPwd = function () {
  modalPwd.classList.add("hidden");
  overlay.classList.add("hidden");
  loginForm.classList.remove("hidden");
};

// Close RESET PASSWORD modal on overlay click
overlay.addEventListener("click", closeBtnPwd);

// Close RESET PASSWORD modal on "Esc" key press
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modalPwd.classList.contains("hidden")) {
    closeBtnPwd();
  }
});
