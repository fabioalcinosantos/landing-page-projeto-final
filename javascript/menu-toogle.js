// MENU RESPONSIVO

let show = true

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {
  document.body.style.scrollBehavior = show ? "hidden" : "initial"

  menuSection.classList.toggle("on", show)
  show = !show;//analisando o status do menu

})
