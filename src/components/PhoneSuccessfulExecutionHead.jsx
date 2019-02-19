import React, { Component } from 'react'
import Logo from './logo/Logo'
// import '../css/styles.css'

class PhoneSuccessfulExecutionHead extends Component {

    render() {
        return (
            <div>
                <Logo />
                <div className="textUndrerJT"><span><strong>Сообщение отправленно</strong></span></div>
            </div>
        )
    }
}

export default PhoneSuccessfulExecutionHead