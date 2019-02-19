import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from './logo/Logo'
import '../css/passwordrecovery.css'

class PasswordRecovery extends Component {
    render() {
        return (
            <div className="wrapper">
                <Logo />
                <span className="title"><strong>Выберите способ восстановления пароля</strong></span>
                <Link to={{ pathname: '/phoneNumber' }} className="globalButton passwordRecovery">*Отправить по SMS</Link>
                <div className="passwordRecovery"><span className="colorOrange title">*</span><span>На указанный номер мобильного при регистрации</span></div>
                <Link to={{ pathname: '/email' }} className="globalLink passwordRecovery">**На E-mail</Link>
                <div className="passwordRecovery"><span className="colorOrange title">**</span><span>Восстановление через указанный при регистрации E-mail</span></div>
            </div>
        )
    }
}
export default PasswordRecovery