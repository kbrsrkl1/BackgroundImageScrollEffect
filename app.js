const bgImageEl = document.getElementById("bg-image")

window.addEventListener("scroll", () => {
    upgradeImage()
})

function upgradeImage() {
    bgImageEl.style.opacity = 1 - window.pageYOffset / 700
    bgImageEl.style.backgroundSize = 160 - window.pageYOffset / 12 + "%"
}