import smoothScrollTo from "./scroll.js"


// -- Scroll do Site


const menuItems = document.querySelectorAll("nav#menu a")

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
})

function getScrollTopByHref(element) {
    const id = element.getAttribute('href')
    return document.querySelector(id).offsetTop
}

function scrollToIdOnClick(event) {
    event.preventDefault()
    const to = getScrollTopByHref(event.target)
    scrollToPosition(to)
}

function scrollToPosition(to) {
    smoothScrollTo(0, to)
}




if (window.innerWidth <= 700) {
    const arrows = document.querySelectorAll(".main-arrows i")

    arrows.forEach( (element) => {
        element.classList.remove("fa-angle-right")
        element.classList.add("fa-chevron-down")
    })

    document.querySelectorAll(".off").forEach( (element) => {
        element.style.display = "none"
    })
}