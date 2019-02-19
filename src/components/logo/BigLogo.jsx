import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import headLogo from '../../images/head-logo.png'

import '../../css/logo.css'

class RegSMSHead extends Component {

    render() {
        return (
            <div>
                <div className="logo-center">
                    <Link to={{ pathname: '/' }} >
                        <img width="200" height="222" src={headLogo} alt="" />
                    </Link>
                </div>
            </div>
        )
    }

}
export default RegSMSHead
