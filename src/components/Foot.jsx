import React, { Component } from 'react'
import googleplayLogo from '../images/google-play-badge.svg'
import appstoreLogo from '../images/appStore.svg'
import ButtonHelp from './ButtonHelp';
import '../css/footer.css'

class Foot extends Component {

    render() { 
        return (
            <div className="footerContentWrap">
                <p className="footerContentWrap_title">ЗАГРУЗИТЬ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ</p>
                <div className="getAppWrap">
                    <a href="https://play.google.com/store/apps"><img src={googleplayLogo} alt="" /></a>
                    <a href="https://www.apple.com/ru/ios/app-store/"><img src={appstoreLogo} alt="" /></a>
                </div>
                <span>2018 &copy; GT</span>
                <ButtonHelp />
            </div>
        )
    }
}

export default Foot