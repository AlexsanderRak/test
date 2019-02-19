import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import person from '../images/person.png'
import { connect } from 'react-redux';
import Logo from './logo/Logo'
import { counterButton_create } from "../redux/countersAC";
import '../css/registrationOfLegalEntities.css'

class RegistrationOfLegalEntities extends Component {
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
    nextPage(event) {
        event.preventDefault();
        var that = this;
        var url = 'http://178.159.45.189/api/rest-auth/user/client/legal/';
        var formElem = document.getElementById('registrationOfLegal');
        var formData = new FormData(formElem);
        var user = this.props.store.user;
        console.log(user)
        var address = {}
        var post_address = {}
        for (var [key, value] of formData.entries()) {
            if (key == 'city' || key == 'street' || key == 'house' || key == 'housing' || key == 'office') {
                address[key] = value
            }
            else if (key == 'post_city' || key == 'post_street' || key == 'post_house' || key == 'post_housing' || key == 'post_office') {
                let newKey = key.slice(5)
                post_address[newKey] = value
            }
            else {
                user[key] = value
            }
        }

        user.address = address
        user.post_address = post_address

        console.log(user)
        console.log(address);
        console.log(post_address);
        debugger
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

                that.props.props.history.push("/authorization")// Переход на страницы админ/пользователь 
            })
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });


    }

    render() {
        return (
            <div className="wrapper">
                <Logo />
                <Link to={{ pathname: '/authorization' }} className="registrationOfLegalEntities_Link globalLink">Заполнить позже</Link>
                {/* <!-- блок с формой--> */}
                <form onSubmit={this.nextPage.bind(this)} id="registrationOfLegal">
                    <div className="title"><span>Изменение личных данных юридического лица</span></div>
                    <div className="divRow registrationOfLegalEntities">
                        <div className="divColumn_50 registrationOfLegalEntities">
                            <label className="cross" htmlFor="image">
                                <input type="file" id="image" style={{ display: "none" }} onChange={this.imgPersonLoad.bind(this)} />
                                <img src={this.state.imgPerson} alt="" />
                            </label>
                            <label>{this.state.nameImgLoad}</label>
                        </div>
                        <div className="divColumn_50 registrationOfLegalEntities">
                            <input className="registrationOfLegalEntities_divInput globalInput" type="text" name="name"
                                placeholder="Полное наименование" required />
                            <input className="registrationOfLegalEntities_divInput globalInput" type="text" name="unp"
                                placeholder="УНП" required />
                        </div>
                    </div>
                    <div className="title"><span>Юридический адрес</span></div>
                    <div className="divRow registrationOfLegalEntities">
                        <div className="divColumn_50 registrationOfLegalEntities">
                            <input className="registrationOfLegalEntities_divInput globalInput" type="text" name="city"
                                placeholder="Населенный пункт" />
                            <input className="registrationOfLegalEntities_divInput globalInput" type="text" name="street"
                                placeholder="Улица" />
                        </div>
                        <div className="divColumn_50 registrationOfLegalEntities">
                            <div className="divRow registrationOfLegalEntities">
                                <input name="house" className="registrationOfLegalEntities_divInput globalInput" type="text" placeholder="Дом" />
                                <input name="housing" className="registrationOfLegalEntities_divInput globalInput" type="text" placeholder="Корпус" />
                            </div>
                            <input name="office" className="registrationOfLegalEntities_divInput globalInput" type="text"
                                placeholder="Помещение, офис, комната и т.д." required />
                        </div>
                    </div>
                    <div className="center"><input type="checkbox" id="coincidence" /><label htmlFor="coincidence">
                        Юридический и почтовый адрес совпадают</label>
                    </div>
                    <div className="title">Почтовый адрес</div>
                    <div className="divRow registrationOfLegalEntities">
                        <div className="divColumn_50 registrationOfLegalEntities">
                            <input name="post_city" className="registrationOfLegalEntities_divInput globalInput" type="text"
                                placeholder="Населенный пункт" />
                            <input name="post_street" className="registrationOfLegalEntities_divInput globalInput" type="text"
                                placeholder="Улица" /></div>
                        <div className="divColumn_50 registrationOfLegalEntities">
                            <div className="divRow registrationOfLegalEntities">
                                <input name="post_house" className="registrationOfLegalEntities_divInput globalInput" type="text" placeholder="Дом" />
                                <input name="post_housing" className="registrationOfLegalEntities_divInput globalInput" type="text" placeholder="Корпус" />
                            </div>
                            <input name="post_office" className="registrationOfLegalEntities_divInput globalInput" type="text"
                                placeholder="Помещение, офис, комната и т.д." required />
                        </div>
                    </div>
                    <div className="title">Платежные реквизиты</div>
                    <div className="divRow registrationOfLegalEntities">
                        <div className="divColumn_50 registrationOfLegalEntities">
                            <input name="bank" className="registrationOfLegalEntities_divInput globalInput" type="text"
                                placeholder="Банк" />
                            <input name="bank_department" className="registrationOfLegalEntities_divInput globalInput" type="text"
                                placeholder="Отделение банка" />
                            <input name="bank_address" className="registrationOfLegalEntities_divInput globalInput" type="text"
                                placeholder="Адрес банка" />
                        </div>
                        <div className="divColumn_50 registrationOfLegalEntities">
                            <input name="bank_bik" className="registrationOfLegalEntities_divInput globalInput" type="text"
                                placeholder="БИК банка" />
                            <input name="contact_org" className="registrationOfLegalEntities_divInput globalInput" type="text"
                                placeholder="Телефон / E-mail банка" />
                            <input name="iban" className="registrationOfLegalEntities_divInput globalInput" type="text"
                                placeholder="Расчетный счет в формате IBAN" />
                        </div>
                    </div>
                    <div className="title">Должностное лицо</div>
                    <div className="divRow registrationOfLegalEntities">
                        <div className="divColumn_50 registrationOfLegalEntities">
                            <input name="first_person" className="registrationOfLegalEntities_divInput globalInput" type="text"
                                placeholder="Руководитель" />
                            <input name="acting_on" className="registrationOfLegalEntities_divInput globalInput" type="text"
                                placeholder="Действует на основании: Устава, доверенности" />
                            <input name="accountant" className="registrationOfLegalEntities_divInput globalInput" type="text"
                                placeholder="Бухгалтер организации" />
                        </div>
                        <div className="divColumn_50 registrationOfLegalEntities">
                            <input name="contact_person" className="registrationOfLegalEntities_divInput globalInput" type="text"
                                placeholder="Контактное лицо организации" />
                            <input name="add_contact" className="registrationOfLegalEntities_divInput globalInput" type="text"
                                placeholder="Дополнительные контакты организации" />
                            <input name="certificate" className="registrationOfLegalEntities_divInput globalInput" type="text"
                                placeholder="Свидетельство о регистрации" />
                        </div>
                    </div>
                </form>
                <button className="registrationOfLegalEntities_button globalButton" form="registrationOfLegal">Подтвердить</button>
            </div >
        )
    }
}


const mapStateToProps = function (state) {
    return {
        // из раздела Redux с именем counter свойство cnt будет доступно
        // данному компоненту как this.props.cnt
        store: state.store,
        drivers: state.store.drivers,
        //abc: state.store.abc,
    };
};

export default connect(mapStateToProps)(RegistrationOfLegalEntities);