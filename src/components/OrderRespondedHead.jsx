import React, { Component } from 'react'
// import '../css/styles.css'

class OrderRespondedHead extends Component {
    constructor() {
        super()
        this.state={
            numberOrder: "123456",
        }

    }
    render() {
        return (
            <div>
                <div className="logo-center">
                    <div className="textUndrerJT bottom-line"><span><strong>ЗАКАЗ {this.state.numberOrder}</strong></span></div>
                </div>
            </div>
        )
    }
}

export default OrderRespondedHead