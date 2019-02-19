import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import headLogo from '../../images/head-logo.png'

import '../../css/logo.css'

class LogoMini extends Component {

    render() {
        return (
            <div>
                <div className="logo-center">
                    <Link to={{ pathname: '/' }} >
                        <img width="102" height="107" src={headLogo} alt="" />
                    </Link>
                </div>
            </div>
        )
    }

}
export default LogoMini
