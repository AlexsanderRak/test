import React, { Component } from 'react'
import Logo from './logo/Logo';
import { Link } from 'react-router-dom'
import '../css/phoneNumberSMS.css'

class PhoneNumberSMS extends Component {
    nextPage(e) {
        e.preventDefault();
        var that = this
        that.props.props.history.push('/phoneNumberNewPassword') // Переход на страницы  phoneNumberNewPassword
    }
    render() {
        return (
            <div className="wrapper">
                <Logo />
                <form onSubmit={this.nextPage.bind(this)} id="phoneNumberSMS">
                    <input className="globalInput" type="text" required placeholder="Введите код из SMS"
                        title="код состоит из 4-х символов" pattern="^[0-9]{4}" />
                </form>
                <button type="submit" className="phoneNumberSMS globalButton" form="phoneNumberSMS">Далее</button>
            </div>
        )
    }
}

export default PhoneNumberSMS