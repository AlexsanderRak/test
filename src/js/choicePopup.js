function choicePopup(popupId) {
    switch (popupId) {
        case 100:
            return '.tech-not-found';
        case 200:
            return '.tech-move-out';
        case 300:
            return '.extend-the-lease';
        case 400:
            return '.transport-left';
        case 500:
            return '.payment-not-received';
        case 600:
            return '.cancel';
        case 700:
            return '.payment-warning';
        case 800:
            return '.set-order-rating';
        case 900:
            return '.equip-catalog-wrapper';
        case 1000:
            return '.equipQuestionsFormContainer';
        case 1100:
            return '.feedback-form-container';
    }
}

export default choicePopup