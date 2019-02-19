import React, { Component } from 'react'

export default class PaymentChoiceLegalEntity extends Component {
    render() {
        return (

            <div className="wrapper" >
                <div className="popup">
                    <div className="logo-center">
                        <div className="textUndrerJT"><span><strong>Выберете способ оплаты</strong></span></div>
                    </div>
                    <div className="wrapper">
                        <div>
                            <button className="button button-big button-red">Оплата банковской карточкой</button>
                        </div>
                        <div>
                            <button className="button button-big button-red">Оплата через ЕРИП</button>
                        </div>
                        <div>
                            <button className="button button-small button-red">Назад</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}