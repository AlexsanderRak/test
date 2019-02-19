import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import headLogo from '../../images/head-logo.png'

import '../../css/logo.css'

class Logo extends Component {

    render() {
        return (
            <div className="logo-center">
                <Link to={{ pathname: '/' }} >
                    <img width="158" height="165" src={headLogo} alt="" />
                </Link>
            </div>
        )
    }

}
export default Logo
