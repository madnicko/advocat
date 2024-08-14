const header = document.querySelector(".header");
const button = header.querySelector("#headerButton");

button.onclick = function(e) {
  e.preventDefault();
  header.classList.toggle("active");
}
