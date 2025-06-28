const bgImageEl = document.getElementById("bg-image")

window.addEventListener("scroll", () => {
    upgradeImage()
})

function upgradeImage() {
    bgImageEl.style.opacity = 1 - window.pageYOffset / 800
    bgImageEl.style.backgroundSize = 170 - window.pageYOffset / 12 + "%"
}