import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import '../css/styles.css'

class OrderRespondedBottom extends Component {
    constructor() {
        super()

    }
    //TODO публичного договора переход и разделение на физ и юр
    render() {
        return (
            <div>
                <div className="textUndrerJT marginTopZero" ><span className="colorOrange"> * </span><span>Нажимая "Далее", Вы принимаете условия</span><span className="textUndrerJT bottom-line cross"> <Link to={{ pathname: '/privacyPolicy' }}>публичного договора</Link></span></div> 
                <div className="btn-row">

                    <button type="button" className="button button-small button-red"><Link to={{ pathname: '/selectAddress' }} className="colorWhite" > Назад </Link></button>
                    <button type="button" className="button button-small button-red"><Link to={{ pathname: '/paymentChoiceIndividual' }} className="colorWhite" > *Далее </Link></button>
                </div>
            </div>
        )
    }
}

export default OrderRespondedBottom