import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import person from '../images/person.png'
import { connect } from 'react-redux';
import { counterButton_create } from "../redux/countersAC";
// import '../css/allmystyle.css'

class ChangeOfLegalEntitiesMid extends Component {
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
        var that=this;
        var url='http://178.159.45.189/api/rest-auth/user/client/legal/';
        var formElem=document.getElementById('registrationOfLegal');
        var formData=new FormData(formElem);
        var user = this.props.store.user;
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
        fetch(url,{
            method: "PATCH",
            headers:{
                "Authorization": 'JWT ' + that.props.store.user.token,
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user),
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
            })
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });

            
        }

    render() {
        return (
            <div className="bigform">
                <div>
                    {/* <!-- блок с формой--> */}
                    <form onSubmit={this.nextPage.bind(this)} id="registrationOfLegal">
                        <div className="fortext">
                        <div className="textUndrerJT"><span><strong>Введите данные юридического лица</strong></span></div>
                        <div className="import">
                            <Link to={{ pathname: '/authorization' }} className="colorWhite button-my button-bigi-my button-red">Заполнить позже</Link>
                        </div>
                            <div className="div-row-my margin_top">
                                <div className="width-100-my">
                                <div className="div-col-my">
                                        <label className="cross" htmlFor="image">
                                            <input type="file" id="image" style={{ display: "none" }} onChange={this.imgPersonLoad.bind(this)} />
                                            <img src={this.state.imgPerson} alt="" />
                                        </label>
                                        <label>{this.state.nameImgLoad}</label>
                                    </div>
                                </div>
                                <div className="div-col-my width-100-my">
                                    <input className="button-my button-bigi-my button-gray" type="text" name="name"
                                        placeholder="Полное наименование" required />
                                    <input className="button-my button-bigi-my button-gray" type="text" name="unp"
                                        placeholder="УНП" required />
                                </div>
                            </div>

                            <div className="textUndrerJT"><span><b>Юридический адрес</b></span></div>

                           <div className="div-row-my margin-top-10 bigform">
                                <div className="div-col-my width-100-my">
                                    <input className="button-my button-bigi-my button-gray" type="text" name="city"
                                        placeholder="Населенный пункт" />
                                    <input className="button-my button-bigi-my button-gray" type="text" name="street"
                                        placeholder="Улица" />
                                </div>
                                
                                <div className="div-col-my width-100-my">
                                    <div className="div-row-my button-bigi-my">
                                        <div className="">
                                            <input name="house" className="button-my button-small-my button-gray marg-1 smallbut but-big-small" type="text" placeholder="Дом" />
                                            <input name="housing" className="button-my button-small-my button-gray marg-1 smallbut but-big-small" type="text" placeholder="Корпус" />
                                        </div>
                                    </div>
                                    <div name="office" className="button-bigi-my" ><input className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="Помещение, офис, комната и т.д." required /></div>
                                </div>
                            </div>
                            <div className="text-center fortext"><input type="checkbox" id="coincidence" /><label for="coincidence">
                                Юридический и почтовый адрес совпадают</label>
                            </div>
                            <div className="textUndrerJT"><strong>Почтовый адрес</strong>
                            </div>

                            <div className="div-row-my margin-top-10 bigform">

                                <div className="div-col-my width-100-my">
                                    <div>
                                        <input name="post_city" className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="Населенный пункт" />
                                        <input name="post_street" className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="Улица" /></div>
                                    </div>
                                <div className="div-col-my width-100-my">
                                    <div className="div-row-my button-bigi-my">
                                        <div>
                                            <input name="post_house" className="button-my button-small-my button-gray marg-1 smallbut but-big-small" type="text" placeholder="Дом" />
                                            <input name="post_housing" className="button-my button-small-my button-gray marg-1 smallbut but-big-small" type="text" placeholder="Корпус" />
                                        </div>
                                    </div>
                                    <div name="post_office" className="button-bigi-my"><input className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="Помещение, офис, комната и т.д." required /></div>
                                </div>
                            </div>


                            <div className="textUndrerJT"><strong> Платежные реквизиты</strong>
                            </div>

                            <div className="div-row-my margin-top-10 bigform">

                                <div className="div-col-my width-100-my">
                                    <input name="bank" className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="Банк" />
                                    <input name="bank_department" className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="Отделение банка" />
                                    <input name="bank_address" className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="Адрес банка" />
                                    <input name="first_person" className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="Руководитель" />
                                    <input name="acting_on" className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="Действует на основании: Устава, доверенности" />
                                    <input name="accountant" className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="Бухгалтер организации" />
                                </div>
                                <div className="div-col-my width-100-my">
                                    <input name="bank_bik" className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="БИК банка" />
                                    <input name="contact_org" className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="Телефон / E-mail банка" />
                                    <input name="iban" className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="Расчетный счет в формате IBAN" />
                                    <input name="contact_person" className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="Контактное лицо организации" />
                                    <input name="add_contact" className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="Дополнительные контакты организации" />
                                    <input name="certificate" className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="Свидетельство о регистрации" />
                                </div>
                            </div>
                        </div>
                    
                    </form>


                    <div className="fortext" >
                    <button className="colorWhite button-my button-bigi-my button-red" form="registrationOfLegal">Подтвердить</button>
                    </div>


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
        drivers: state.store.drivers,
        //abc: state.store.abc,
    };
};

export default connect(mapStateToProps)(ChangeOfLegalEntitiesMid);