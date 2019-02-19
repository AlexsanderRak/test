import React, { Component } from 'react'
import Logo from './logo/Logo'
import '../css/PhoneNumber.css'

class PhoneNumber extends Component {
    nextPage(e) {
        e.preventDefault();
        var that = this
        that.props.props.history.push('/phoneNumberSMS') // Переход на страницы  phoneNumberSMS
    }
    render() {
        return (
            <div className='wrapper'>
                <Logo />
                <span className="title"><strong>Восстановление пароля</strong></span>
                <form onSubmit={this.nextPage.bind(this)} id="phoneNumber" >
                    <input name="" type="tel" title="375 29 123 45 67"
                        pattern="^([\+]?375|(8[\s|\-]?0))[\s|\-]?(29|33|25|44|33|17)[\s|\-]?([0-9]{3}[\s|\-]?[0-9]{2}[\s|\-]?[0-9]{2}[\s|\-]?)$" className="phoneNumber globalInput"
                        placeholder="+375 __ ___ __ __" required />
                </form>
                <button type="submit" className="phoneNumber globalButton" form="phoneNumber">Далее </button>
            </div>
        )
    }
}
export default PhoneNumber