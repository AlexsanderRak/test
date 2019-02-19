import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import person from '../images/person.png'
import { connect } from 'react-redux';
import { counterButton_create } from "../redux/countersAC";
import Logo from './logo/Logo'
import '../css/regFiz.css'

class RegFiz extends Component {
    constructor() {
        super()
        this.state = {
            imgPerson: person,
            nameImgLoad: "",
        }
    }
    imgPersonLoad(e) {
        let imgLoad = e.currentTarget.value;
        // localStorage.setItem("imgLoad", imgLoad);
        this.setState({ nameImgLoad: "Загружаеммая фотография   " + imgLoad });
    }
    nextPage(e) {
        e.preventDefault();
        var that = this
        var url = 'http://178.159.45.189/api/rest-auth/user/client/private/'
        var formElem = document.getElementById('regFiz')
        var formData = new FormData(formElem)
        var user = {}
        var address = {}
        for (var [key, value] of formData.entries()) {
            if (key == 'city' || key == 'street' || key == 'house' || key == 'housing' || key == 'office') {
                address[key] = value
            } else {
                user[key] = value
            }
        }
        user.address = address

        // var user = {
        //     // email: that.props.abc.user.email,
        //     // phone: that.props.abc.user.phone,
        //     // first_name: "ВАСЯ",
        //     // last_name: "ВАСЯ",
        //     // patronymic: "ВАСЯ",
        //     // birth_date: "ВАСЯ",
        //     // person_id:"ВАСЯ",
        //     // address: "ВАСЯ",
        //     // image:
        //     // personal_id: that.props.abc.user.id
        // }

        // var address = {
        //     // city: <str>,
        //     // street: <srt>,
        //     // house: <str>,
        //     // housing: <str>,
        //     // office: <str>,
        //     // description: <str>,
        // }


        fetch(url, {
            method: "PATCH",
            headers: {
                "Authorization": 'JWT ' + that.props.store.user.token,
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

                that.props.history.push("/authorization")// Переход на страницы админ/пользователь  
            })
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });





    }

    render() {
        return (
            <div className="wrapper">
                <Logo />
                <Link to={{ pathname: '/authorization' }} className="regFiz_Link globalLink">Заполнить позже</Link>
                <form className="regFiz_ divColumn" onSubmit={this.nextPage.bind(this)} id="main_form">
                    <div className="regFiz_ divRow" >
                        <div className="regFiz_ divColumn_50">
                            <div>
                                <label className="cross" htmlFor="image">
                                    <input type="file" id="image" style={{ display: "none" }} onChange={this.imgPersonLoad.bind(this)} />
                                    <img src={this.state.imgPerson} alt="" />
                                </label>
                                <label>{this.state.nameImgLoad}</label>
                            </div>
                            <input name="birth_date"
                                required placeholder="Введите дату рождения" className="regFiz_divInput globalInput" type="date" id="datepicker" />
                        </div>
                        <div className="regFiz_ divColumn_50">
                            <span className="title" >Личные данные</span>
                            <input name="last_name"
                                pattern="[А-Яа-я/-]{2,40}" title="только русские буквы"
                                className="regFiz_divInput globalInput " type="text"
                                placeholder="Фамилия" required />
                            <div className="regFiz_ divRow">
                                <input name="first_name"
                                    className="regFiz_divInput globalInput" pattern="[А-Яа-я/-]{2,40}"
                                    title="только русские буквы"
                                    type="text" placeholder="Имя" required />
                                <input name="patronymic"
                                    className="regFiz_divInput globalInput" type="text" pattern="[А-Яа-я/-]{2,40}"
                                    title="только русские буквы"
                                    placeholder="Отчество" required />
                            </div>
                            <input name="person_id"
                                className="regFiz_divInput globalInput" type="text"
                                placeholder="Личный номер" required />
                        </div>
                    </div>
                    <span className='title' >Адрес регистрации</span>
                    <div className="regFiz_ divRow">
                        <div className="regFiz_ divColumn_50">
                            <input name="city"
                                required className="regFiz_divInput globalInput" type="text"
                                pattern="[А-Яа-я/-]{2,40}" title="только русские буквы"
                                placeholder="Населенный пункт" />
                            <input name="street"
                                required className="regFiz_divInput globalInput" type="text"
                                placeholder="Улица" />
                        </div>
                        <div className="regFiz_ divColumn_50">
                            <div className="regFiz_ divRow">
                                <input name="house"
                                    required className="regFiz_divInput globalInput" type="text" placeholder="Дом" />
                                <input name="housing"
                                    className="regFiz_divInput globalInput" type="text" placeholder="Корпус" />
                            </div>
                            <input name="office"
                                className="regFiz_divInput globalInput" type="text"
                                placeholder="*Квартира / Помещение " required />
                        </div>
                    </div>
                </form>
                <span className="title"><span className="colorOrange">*</span> В случае проживания в индивидуальном жилом доме
                                <br /> поле заполнять не обязательно</span>
                <button type="submit" form="main_form" className='regFiz_button globalButton'>Подтвердить</button>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        // из раздела Redux с именем counter свойство cnt будет доступно
        // данному компоненту как this.props.cnt
        store: state.store,
    };
};

export default connect(mapStateToProps)(RegFiz);