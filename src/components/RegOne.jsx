import React, { Component } from 'react'
import { connect } from 'react-redux';
import { counterButton_create } from "../redux/countersAC";
import { Link } from 'react-router-dom'
import Logo from './logo/Logo'
import eye from '../images/red-eye.png'

import '../css/regOne.css'

class RegOne extends Component {
    constructor() {
        super()
        this.state = {
            typePassword: "password",
            typePassword2: "password",
            password2: "",
            location: null,
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
    nextPage(e) {
        //debugger
        e.preventDefault();
        var that = this
        var urlFiz = "http://178.159.45.189/api/rest-auth/registration/client/private/"
        var urlJyr = "http://178.159.45.189/api/rest-auth/registration/client/legal/"
        var urlDispatcher = "http://178.159.45.189/api/rest-auth/registration/dispatcher/"
        var url = (this.props.history.location.pathname === "/contractor/regOne") ? urlDispatcher : urlFiz = (this.props.store.legalPrivate) ? urlFiz : urlJyr;
        var formElem = document.getElementById('regOne')
        fetch(url, {
            method: "POST",
            headers: {
                // "Content-Type": "application/json",
            },
            body: new FormData(formElem),
        }).then(
            function (response) {
                // if (response.status !== 201) {
                //     console.log('Looks like there was a problem. Status Code: ' +
                //         response.status);
                // }
                // console.log(response)
                return response.json();
            })
            .then(function (data) {
                that.props.dispatch(counterButton_create(data));
                console.log(data);
                that.props.history.push('regSMS') // Переход на страницы админ/пользователь 
            })
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });
    }

    password(e) {
        let value = e.currentTarget.value;
        this.setState({ password2: value });
    }

    render() {
        return (

            <div className="wrapper">
            <Logo />
                <div>
                    <div className="title"><span>Регистрация</span></div>
                    <form onSubmit={this.nextPage.bind(this)} id="regOne">
                        <div className="regOne_divInput globalInput">
                            <input className="regOne_input " name="email" type="text" title="name@mail.ru" required pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" placeholder="*Введите E-mail" />
                        </div>
                        <input name="phone" type="tel" title="375 29 123 45 67"
                            pattern="^([\+]?375|(8[\s|\-]?0))[\s|\-]?(29|33|25|44|33|17)[\s|\-]?([0-9]{3}[\s|\-]?[0-9]{2}[\s|\-]?[0-9]{2})$" required className="regOne_divInput globalInput"
                            placeholder="+375 __ ___ __ __" />
                        <div className="regOne_divInput globalInput">
                            <input name="password1" id="password2" type={this.state.typePassword} required className="regOne_input"
                                placeholder="Придумайте новый пароль"
                                title="Пороль неменее 8-х символов" pattern="^.{8,40}" onChange={this.password.bind(this)} />
                            <img className="cross" name="eye1" src={eye} alt="eye" onClick={this.onClickEye.bind(this)} />
                        </div>
                        <div className="regOne_divInput globalInput">
                            <input name="password2" title="Пороли не совподает" id="password-check2" pattern={this.state.password2} type={this.state.typePassword2} required className="regOne_input"
                                placeholder="Подтвердите пароль" />
                            <img className="cross" name="eye2" src={eye} alt="eye" onClick={this.onClickEye.bind(this)} />
                        </div>
                    </form>
                    <div className="title" ><span className="colorOrange"> * </span><span> Проверьте корректность ввода e-mail.<br />  На указанный email в процессе работы<br /> будет высылаться необходимая <br />документация.</span></div>
                </div>

                <div className="divButton regOne_divButton">
                    <Link to={{ pathname: '/selectRole' }} className='regOne_button globalButton margin_30'>Назад</Link>
                    <button type="submit" className="regOne_button globalButton" form="regOne">Далее</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = function (state) {
    console.log(state)
    return {
        // из раздела Redux с именем counter свойство cnt будет доступно
        // данному компоненту как this.props.cnt
        store: state.store,
    };
};

export default connect(mapStateToProps)(RegOne);
