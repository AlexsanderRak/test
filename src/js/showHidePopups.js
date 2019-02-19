import choicePopup from './choicePopup'
import centerPopup from './centerPopup'

function showHidePopups(popupId) {
    let popupClass = choicePopup(popupId)
    let popupElem = document.querySelector(popupClass)
    let blockerElem = document.querySelector('.content-blocker')

    popupElem.classList.toggle('disablePopup')

    centerPopup(popupClass)

    blockerElem.classList.toggle('content-blocker_active')
}

export default showHidePopups