import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import person from '../images/person.png'
import { connect } from 'react-redux';
import { counterButton_create } from "../redux/countersAC";
import LogoMini from './logo/LogoMini'

import '../css/regJyr2.css'

// const str='{"bank":"vdxv","bank_department":"dxv","bank_address":"dx","first_person":"fes","acting_on":"sfesf","accountant":"esf","bank_bik":"dsd","contact_org":"vdx","iban":"ddesf","contact_person":"EFEF","add_contact":"esfes","certificate":"esf","address":{"city":"111","street":"111","house":"111","housing":"111"},"post_address":{"city":"222","street":"222","house":"222","housing":"222"},"last_name":"Яршевич","first_name":"Егор","patronymic":"Александрович","name":"ЁршСтрой","unp":"ОПГ"}'
//         const myobj=JSON.parse(str)
//         for(let key in myobj){
//             if(key==document.getElementByTagName('input').name){
//                 document.getElementByTagName('input').innerHTML+=myobj[key];
//             }
//         }

class RegJyr2 extends Component {
    constructor() {
        super()
        this.state = {
            imgPerson: person,
            nameImgLoad: "",
        }
    }


    //TODO Сделать запрос на изменение данных Диспечера, собрать с прошлой страницы и проставить неймы по апи в формах
    imgPersonLoad(e) {
        let imgLoad = e.currentTarget.value;
        // localStorage.setItem("imgLoad", imgLoad);
        this.setState({ nameImgLoad: "Загружаеммая фотография   " + imgLoad });
    }
    nextPage(event) {
        event.preventDefault();
        // this.props.props.history.push("/authorization")


        debugger

        var that = this;
        var url = 'http://178.159.45.189/api/rest-auth/user/dispatcher/';
        var formElem = document.getElementById('regJyr2');
        var formData = new FormData(formElem);
        var user = {}
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
        const user1 = this.props.store.user;


        debugger
        for (let key in user1) {
            user[key] = user1[key];
        }

        console.log(that.props.store.user.token)

        // можно переделать через Object.assign(user,user1)// если в user и user1 есть одинаковые св-ва, то 
        //они перезапишутся из user1
        //можно сделать новый объект с помощью спред операторов, а именно
        //const res={...user,...user1}
        console.log(user)
        //console.log(address);
        //console.log(post_address);
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
                <LogoMini />
                {/* <div className="title"><span><b>Контактное лицо</b></span></div> */}
                <form onSubmit={this.nextPage.bind(this)} id="regJyr2">
                    <div>
                        {/* <div className="div-row-my margin-top-10 bigform">
                                <input className="button-my button-bigi-my button-gray marg-1 but-big-small" type="text" placeholder="Фамилия" />
                                <input className="button-my button-bigi-my button-gray marg-1 but-big-small" type="text" placeholder="Имя" />
                                <input className="button-my button-bigi-my button-gray marg-1 but-big-small" type="text" placeholder="Отчество" />
                            // </div> */}

                        <div className="title"><span>Юридический адрес</span></div>
                        <div className="divRow regJyr2div">
                            <div className="divColumn_50 regJyr2div">
                                <input name="city" className="globalInput regJyr2Input" type="text"
                                    placeholder="Населенный пункт" />
                                <input name="street" className="globalInput regJyr2Input" type="text"
                                    placeholder="Улица" />
                            </div>
                            <div className="divColumn_50 regJyr2div">
                                <div className="divRow regJyr2div">
                                    <input name="house" className="globalInput regJyr2Input" type="text" placeholder="Дом" />
                                    <input name="housing" className="globalInput regJyr2Input" type="text" placeholder="Корпус" />
                                </div>
                                <input name="office" className="globalInput regJyr2Input" type="text"
                                    placeholder="Помещение, офис, комната и т.д." required />
                            </div>
                        </div>
                        <div className="center cross"><input type="checkbox" id="coincidence" /><label className="cross" for="coincidence">
                            Юридический и почтовый адрес совпадают</label>
                        </div>
                        <div className="title">Почтовый адрес</div>
                        <div className="divRow regJyr2div">
                            <div className="divColumn_50 regJyr2div">
                                <input name="post_city" className="globalInput regJyr2Input" type="text"
                                    placeholder="Населенный пункт" />
                                <input name="post_street" className="globalInput regJyr2Input" type="text"
                                    placeholder="Улица" />
                            </div>
                            <div className="divColumn_50 regJyr2div">
                                <div className="divRow regJyr2div">
                                    <input name="post_house" className="globalInput regJyr2Input" type="text" placeholder="Дом" />
                                    <input name="post_housing" className="globalInput regJyr2Input" type="text" placeholder="Корпус" />
                                </div>
                                <input name="post_office" className="globalInput regJyr2Input" type="text"
                                    placeholder="Помещение, офис, комната и т.д." required />
                            </div>
                        </div>
                        <div className="title"> Платежные реквизиты</div>
                        <div className="divRow regJyr2div">
                            <div className="divColumn_50 regJyr2div">
                                <input name="bank" className="globalInput regJyr2Input" type="text"
                                    placeholder="Банк" />
                                <input name="bank_department" className="globalInput regJyr2Input" type="text"
                                    placeholder="Отделение банка" />
                                <input name="bank_address" className="globalInput regJyr2Input" type="text"
                                    placeholder="Адрес банка" />
                                <input name="first_person" className="globalInput regJyr2Input" type="text"
                                    placeholder="Руководитель" />
                                <input name="acting_on" className="globalInput regJyr2Input" type="text"
                                    placeholder="Действует на основании: Устава, доверенности" />
                                <input name="accountant" className="globalInput regJyr2Input" type="text"
                                    placeholder="Бухгалтер организации" />
                            </div>
                            <div className="divColumn_50 regJyr2div">
                                <input name="bank_bik" className="globalInput regJyr2Input" type="text"
                                    placeholder="БИК банка" />
                                <input name="contact_org" className="globalInput regJyr2Input" type="text"
                                    placeholder="Телефон / E-mail банка" />
                                <input name="iban" className="globalInput regJyr2Input" type="text"
                                    placeholder="Расчетный счет в формате IBAN" />
                                <input name="contact_person" className="globalInput regJyr2Input" type="text"
                                    placeholder="Контактное лицо организации" />
                                <input name="add_contact" className="globalInput regJyr2Input" type="text"
                                    placeholder="Дополнительные контакты организации" />
                                <input name="certificate" className="globalInput regJyr2Input" type="text"
                                    placeholder="Свидетельство о регистрации" />
                            </div>
                        </div>
                    </div>
                </form>
                <div className="divButton">
                    <Link to={{ pathname: 'regJyr' }} className="globalButton regJyr2Button margin_30"> Назад</Link>
                    <button className="globalButton regJyr2Button" form="regJyr2" type="submit">Войти</button>
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
        //abc: state.store.abc,
    };
};

export default connect(mapStateToProps)(RegJyr2);