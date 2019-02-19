import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from './logo/Logo'

import '../css/startPage.css'



class FirstHeadComponent extends Component {

    render() {
        return (
            <div className="wrapper">
                <Logo />
                <div className="title"><span>Лучший сервис <br />для аренды спецтехники<br />и грузового автотранспорта</span></div>
                <div className="startPage_divButton divButton" >
                    <Link to={{ pathname: '/selectRole' }} className="startPage_button globalButton" >Регистрация</Link>
                    <Link to={{ pathname: '/authorization' }} className="startPage_button globalButton" >Войти</Link>
                </div>
                <Link to={{ pathname: 'privacyPolicy' }}>
                    <div className="startPage_textLink"><span className="cross"><br />Политика конфиденциальности <br />и условия использования</span></div>
                </Link>
            </div>
        )
    }
}
export default FirstHeadComponent