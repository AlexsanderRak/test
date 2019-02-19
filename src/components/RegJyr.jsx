import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { counterButton_create } from "../redux/countersAC";
import Logo from './logo/Logo'

import '../css/regJyr.css'

//TODO Доделать
class RegJyr extends Component {

    nextPage(e) {
        e.preventDefault();
        var that = this
        var url = 'http://178.159.45.189/api/rest-auth/user/dispatcher/'
        var formElem = document.getElementById('regJyr')
        var formData = new FormData(formElem)
        var name = {}
        var user = this.props.store.user;
        user.name = name;
        for (var [key, value] of formData.entries()) {
            user[key] = value;
        }

        for (let key in user) {
            if (key == 'tax') {
                delete user[key];
            }
        }

        console.log(user);

        that.props.dispatch(counterButton_create(user));


        that.props.props.history.push("regJyr2")// Переход на страницы regJyr2
        // fetch(url, {
        //     method: "PATCH",
        //     headers: {
        //         "Authorization": 'JWT ' + that.props.abc.token,
        //         "Content-Type": "application/json"
        //     },
        //     body: new FormData(formElem),
        // }).then(
        //     function (response) {
        //         if (response.status !== 201) {
        //             console.log('Looks like there was a problem. Status Code: ' +
        //                 response.status);
        //         }
        //         return response.json();
        //     })
        //     // Examine the text in the response  
        //     .then(function (data) {
        //         debugger
        //         that.props.dispatch(counterButton_create(data));
        //         let linkBtn = document.getElementById('disabledlink');
        //         linkBtn.classList.remove('disabled-link');
        //         linkBtn.click()
        //         console.log(data);
        //     })
        //     .catch(function (err) {
        //         console.log('Fetch Error :-S', err);
        //     });

    }

    render() {
        return (
            <div className="wrapper" >
                <Logo />
                <span className="title">Регистрация</span>
                <form onSubmit={this.nextPage.bind(this)} id="regJyr" className="divColumn">
                    <input name="last_name" required className="globalInput regJyrInput"
                        placeholder="Фамилия" />
                    <input name="first_name" placeholder="Имя" required className="globalInput regJyrInput" />
                    <input name="patronymic" placeholder="Отчество" required className="globalInput regJyrInput" />
                    <span className="title">Данные юридического лица</span>
                    <input name="name" placeholder="Полное наименование" required
                        className="globalInput regJyrInput" />
                    <input name="unp" placeholder="УНП" required className="globalInput regJyrInput" />
                    <div className="divRow">
                        <span className="title" >Работаем:</span>
                        <div>
                            <input type="radio" name='tax' id="without_tax" /><label htmlFor="without_tax">без НДС</label>
                        </div>
                        <div>
                            <input type="radio" name='tax' id="with_tax" checked /><label htmlFor="with_tax">с НДС</label>
                        </div>
                    </div>
                </form>
                <div className="divRow regJyrdivRow">
                    <Link to={{ pathname: 'regOne' }} className="globalButton regJyrButton margin_30" >Назад</Link>
                    <button className="globalButton regJyrButton" form="regJyr" type="submit">Далее</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = function (state) {
    return {
        // из раздела Redux с именем counter свойство cnt будет доступно
        // данному компоненту как this.props.cnt
        store: state.store,
        drivers: state.store.drivers,
    };
};

export default connect(mapStateToProps)(RegJyr);
