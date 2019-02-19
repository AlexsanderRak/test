import React, { Component } from 'react'
import Logo from './logo/Logo';
import EmailMid from './EmailMid'

class Email extends Component {
    render() {
        return (
            <div className="wrapper">
                   <Logo />
                <EmailMid />
            </div>
        )
    }
}
export default Email