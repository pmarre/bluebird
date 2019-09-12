let hiddenClass = document.querySelectorAll(".js--intro");
let introContainer = document.querySelector(".intro__container");
// let headerImage = document.querySelector('.')

function removeIntroHidden() {
  for (let i = 0; i < hiddenClass.length; i++) {
    hiddenClass[i].classList.remove("intro--hidden");
  }
  introContainer.style.display = "none";
}

function showSection() {
  document.querySelector(".work").classList.add("animate");
}

window.addEventListener("load", function() {
  setTimeout(removeIntroHidden, 7000);
  setTimeout(showSection, 2000);
});
