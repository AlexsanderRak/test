import React, { Component } from 'react'
import Logo from './logo/Logo'
import { Link } from 'react-router-dom'
import eye from '../images/red-eye.png'
// import '../css/phone.css'


class PhoneNumberNewPassword extends Component {
    constructor() {
        super()
        this.state = {
            typePassword: "password",
            typePassword2: "password",
            password2: "",
        }
    }


    onClickEye(e) {
        let name = e.currentTarget.name;
        if (name === "eye1") {
            let item = this.state.typePassword === "password" ? "text" : "password";
            this.setState({ typePassword: item });
        } else {
            let item = this.state.typePassword2 === "password" ? "text" : "password";
            this.setState({ typePassword2: item });
        }
    }
    nextPage(event) {
        var that = this
        event.preventDefault();
        that.props.props.history.push("/authorization")
    }
    password(e) {
        let value = e.currentTarget.value;
        this.setState({ password2: value });
    }

    render() {

        return (
            <div className='forform'>
                <Logo />
                <form className="form" onSubmit={this.nextPage.bind(this)} id="PhoneNumberNewPassword">
                    <div className="div-password-my button-big-my button-gray">
                        <input name="" id="password3" type={this.state.typePassword} required className="inputin-my button-password-my button-normal-my button-gray too"
                            placeholder="Придумайте новый пароль"
                            title="Пороль неменее 8-х символов" pattern="^.{8,40}" onChange={this.password.bind(this)} />
                        <img className="cross" name="eye1" src={eye} alt="eye" onClick={this.onClickEye.bind(this)} />
                    </div>
                    <div className="div-password-my button-big-my button-gray">
                        <input name="" title="Пороли не совподает" id="password-check3" type={this.state.typePassword2} required className="inputin-my button-password-my button-normal-my button-gray too"
                            placeholder="Подтвердите пароль" pattern={this.state.password2} />
                        <img className="cross" name="eye2" src={eye} alt="eye" onClick={this.onClickEye.bind(this)} />
                    </div>
                </form>
                <button type="submit" className="button-my button-big-my button-red " form="PhoneNumberNewPassword">Далее</button>
            </div>
        )
    }
}

export default PhoneNumberNewPassword