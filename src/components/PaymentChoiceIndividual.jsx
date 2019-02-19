import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ConfOfSendInvoice from './ConfOfSendInvoice'
// import '../css/paymentChoiceIndividual.css';


export default class PaymentChoiceIndividual extends Component {

    openPopup() {
        const popup = document.getElementsByClassName('containerP')[0];
        popup.setAttribute('class', 'containerP open');

    }

    render() {
        return (
//TODO Добавить переходы
            <div className="wr" >
                <ConfOfSendInvoice mail='ivanov_95@gmail.com' date='ДД.MM.ГГГГ' />
                <div className="payment-choice-individual">
                    <p> Выберите способ оплаты </p>
                    <Link to={{ pathname: 'activeOrderDetail' }} className="colorWhite" ><button className="btn"> Оплата банковской карточкой </button></Link> 
                    <Link to={{ pathname: '/paymentByERIP' }} className="colorWhite" ><button className="btn">Оплата через ЕРИП </button></Link>
                    <Link to={{ pathname: '' }} className="colorWhite" ><button className="btn" onClick = {() => {this.props.openPopup('conf-of-send-invoice'); this.openPopup()}}> Безналичный расчёт </button></Link> 
                    <Link to={{ pathname: '/orderResponded' }} className="colorWhite back" ><button className="btn"> Назад </button></Link>    
                </div>
            </div>
        )
    }
}