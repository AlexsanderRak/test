import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import '../css/email.css'

class PhoneSuccessfulExecutionMid extends Component {

    render() {
        return (
            <div className="forform">
                <div className="centr-page">
                    <div className="textUndrerJT"><span>На указанный при регистрации E-mail отправленна ссылка для восстановления пароля</span></div>

                    <div >
                        <div>
                            <Link to={{ pathname: '/' }} className="colorWhite"><button type="button" className="button-my button-big-my button-red">закрыть</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PhoneSuccessfulExecutionMid