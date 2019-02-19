import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { counterButton_create } from "../redux/countersAC";
import Logo from './logo/Logo'
import eye from '../images/red-eye.png'
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import '../css/authorization.css'

class Authorization extends Component {
    constructor() {
        super()
        this.state = {
            typePassword: "password",
            typePassword2: "password",
            pathLink: ''
            // messegeError:"Вы ввели не верно Логин или Пароль папробуйте снова или восстановите его!",
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
        this.props.dispatch(counterButton_create(this.state));
        // console.log(this.props)
    }
    onSuccess() {
        // console.log("Всё Ок")
    }
    onFailure() {
        // console.log("Сука Лох")
    }
    nextPage(e) {
        e.preventDefault();
        var that = this
        var url = 'http://178.159.45.189/api/rest-auth/login/'
        var formElem = document.getElementById('authorization')
        var formData = new FormData(formElem)
        var user = {}

        for (var [key, value] of formData.entries()) {
            if (value[0] == '+') {
                user.phone = value
                console.log(key)
                console.log("THIS IS TELEFHONE")
            } else if (key == 'password') {
                user.password = value
                console.log(key)
                console.log("THIS IS PASSWORD")
            } else {
                user.email = value
                console.log(key)
                console.log("THIS IS EMAIL")
            }
        }
        console.log("USER:   ", user)

        fetch(url, {
            method: "POST",
            headers: {
                // "Authorization": 'JWT ' + that.props.abc.token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user),
        }).then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                }
                return response.json();
            })
            .then(function (data) {
                that.props.dispatch(counterButton_create(data));
                console.log("DATA: ", data);
                let nextLocation = data.user.user_type == 3 ? '/admin/activeOrders' : '/customer/createOrder/selectdate';
                that.props.history.push(nextLocation) // Переход на страницы админ/пользователь 
            })
        // .catch(function (err) {
        //     console.log('Fetch Error :-S', err);
        // });
    }

    // incCounter = () => {
    //     this.props.dispatch( counterButton_create(this.state.typePassword) );
    // }

    render() {
        return (
            <div className="wrapper">
                <Logo />
                <form onSubmit={this.nextPage.bind(this)} id="authorization" >
                    <label className="">{this.state.messegeError}</label>
                    <div className="globalInput authorization_divInput">
                        <input name="phoneEmail" type="text" className="authorization_input"
                            placeholder="Введите Телефон или E-mail"
                            title="name@mail.ru 375 29 123 45 67" required
                            pattern="(^([\+]?375|(8[\s|\-]?0))[\s|\-]?(29|33|25|44|33|17)[\s|\-]?([0-9]{3}[\s|\-]?[0-9]{2}[\s|\-]?[0-9]{2})$)|(^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$)" />
                    </div>
                    <div className="globalInput authorization_divInput">
                        <input name="password" id="password2" type={this.state.typePassword} required className="authorization_input"
                            placeholder="Введите пароль"
                            title="код неменее 8-х символов" pattern="^.{8,40}" />
                        <img name="eye1" src={eye} alt="eye" onClick={this.onClickEye.bind(this)} />
                    </div>
                </form>
                    <Link to={{ pathname: '/passwordRecovery' }} className="authorization_textLink">Забыли пароль?</Link><br />
                   <div className="authorization_titleInput"><input type="checkbox" name="" value="" id="savePass" /><label htmlFor="savePass" className="authorization_title">Запомнить / Сохранить пароль</label></div>
                <div className="divButton authorization_divbutton ">
                    < GoogleLogin
                        clientId="xxx.apps.googleusercontent.com "
                        buttonText="Login"
                        onSuccess={this.onSuccess}
                        onFailure={this.onFailure}
                        render={renderProps => { return <button onClick={renderProps.onClick} className="globalButton">Войти с помощью Google</button> }} />
                    <FacebookLogin
                        appId="1088597931155576"
                        autoLoad={true}
                        fields="name,email,picture"
                        callback={this.onFailure}
                        render={renderProps => { return <button onClick={renderProps.onClick} className="globalButton" >Войти с помощью Facebook</button> }}
                    />
                </div>
                <div>
                    <Link to={{ pathname: '/' }} className="globalButton authorization_button margin_30">Назад</Link>
                    <button type="submit" className="globalButton authorization_button" form="authorization" >Войти</button>
                </div>
                <Link to={{ pathname: 'privacyPolicy' }}>
                    <div className="authorization_textLink"><span className="cross"><br />Политика конфиденциальности <br />и условия использования</span></div>
                </Link>
            </div>
        )
    }
}
const mapStateToProps = function (state) {
    // console.log(state.counter, "Authorization")
    return {
        // из раздела Redux с именем counter свойство cnt будет доступно
        // данному компоненту как this.props.cnt
        cnt: state.store.cnt,
    };
};

// присоединяем (connect) компонент к хранилищу Redux
export default connect(mapStateToProps)(Authorization);
