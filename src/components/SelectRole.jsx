import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from './logo/Logo'
import '../css/selectRole.css'

class SelectRole extends Component {


    render() {

        return (
            <div className="wrapper">
                <Logo />
                <div className="title"><span>Лучший сервис <br />для аренды спецтехники<br />и грузового автотранспорта</span></div>
                <div className="title"><span>Пожалуйста, выберите роль<br /> пользователя в системе</span></div>
                <div className="selectRole_divButton divButton">
                    <Link to={{ pathname: '/client/endReg' }} className="selectRole_button globalButton">Клиент</Link>
                    <Link to={{ pathname: '/contractor/regOne' }} className="selectRole_button globalButton" >Подрядчик</Link>
                </div>
            </div>
        )
    }

}
export default SelectRole