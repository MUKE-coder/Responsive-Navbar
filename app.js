console.log("Working");
const humbergBtn = document.querySelector("#humberg");
const nav = document.querySelector("nav");

console.log(humbergBtn);

humbergBtn.addEventListener("click", function () {
  nav.classList.toggle("active");
});
