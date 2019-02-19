function centerPopup(popupClass) {
    let popupElem = document.querySelector(popupClass)
    popupElem.style.left = (document.documentElement.clientWidth / 2 - popupElem.offsetWidth / 2) + 'px'    //центрируем попап по ширине
}

export default centerPopup