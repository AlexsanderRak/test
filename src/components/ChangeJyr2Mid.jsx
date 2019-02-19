import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import person from '../images/person.png'
import { connect } from 'react-redux';
import { counterButton_create, getPersonalData } from "../redux/countersAC";


class ChangeJyr2Mid extends Component {
    constructor() {
        super() 
    }

    state = {
        imgPerson: person,
        nameImgLoad: "",
        myobj: {
            address: {},
            post_address: {}
        }
    }

    componentDidMount() {
        const str='{"bank":"vdxv","bank_department":"dxv","bank_address":"dx","first_person":"fes","acting_on":"sfesf","accountant":"esf","bank_bik":"dsd","contact_org":"vdx","iban":"ddesf","contact_person":"EFEF","add_contact":"esfes","certificate":"esf","address":{"city":"111","street":"111","house":"111","housing":"111"},"post_address":{"city":"222","street":"222","house":"222","housing":"222"},"last_name":"Яршевич","first_name":"Егор","patronymic":"Александрович","name":"ЁршСтрой","unp":"ОПГ"}'
        const myobj=JSON.parse(str);
        //this.setState({ myobj });
        var that=this;
        var url='http://178.159.45.189/api/rest-auth/user/dispatcher/';
        fetch(url,{
            method: "GET",
            headers:{
                "Authorization": 'JWT ' + that.props.store.user.token,
                "Content-Type":"application/json"
            }
        }).then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                }
                console.log(response)
                return response.json();
            }).then(function (data) {
                that.props.dispatch(getPersonalData(data));
                console.log("DATA: ", data);
            });
            
        }
    

    //TODO Сделать запрос на изменение данных Диспечера, собрать с прошлой страницы и проставить неймы по апи в формах
    imgPersonLoad(e) {
        let imgLoad = e.currentTarget.value;
        // localStorage.setItem("imgLoad", imgLoad);
        this.setState({ nameImgLoad: "Загружаеммая фотография   " + imgLoad });
    }
    nextPage(event) {
        debugger
        event.preventDefault();
        var that=this;
        var url='http://178.159.45.189/api/rest-auth/user/dispatcher/';
        var formElem=document.getElementById('regJyr2');
        var formData=new FormData(formElem);
        var user={}
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
        const user1=this.props.store.user;

        
        debugger
        for (let key in user1){
           user[key]=user1[key];
        }

        
        
        // можно переделать через Object.assign(user,user1)// если в user и user1 есть одинаковые св-ва, то 
        //они перезапишутся из user1
        //можно сделать новый объект с помощью спред операторов, а именно
        //const res={...user,...user1}
        console.log(user)
        //console.log(address);
        //console.log(post_address);
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

                that.props.props.history.push("/authorization")// Переход на страницы админ/пользователь 
            })
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });

            
        }
        
    

    render() {
        let { name } = this.state.myobj;
        return (
            <div className="div-centr-flex bigform bigform-container">
                <div>
                    {/* <div className="textUndrerJT"><span><b>Контактное лицо</b></span></div> */}
                     <div className="textUndrerJT"><span><strong>Изменение личных данных</strong></span></div>
                    <form onSubmit={this.nextPage.bind(this)} id="regJyr2">
                        <div className="div-col-my">
                            <div className="div-row-my margin-top-10 bigform">
                                <input className="button-my button-bigi-my button-gray marg-1 but-big-small" type="text" placeholder="Фамилия" defaultValue={this.state.myobj.last_name}/>
                                <input className="button-my button-bigi-my button-gray marg-1 but-big-small" type="text" placeholder="Имя" defaultValue={this.state.myobj.first_name}/>
                                <input className="button-my button-bigi-my button-gray marg-1 but-big-small" type="text" placeholder="Отчество" defaultValue={this.state.myobj.patronymic}/>
                             </div>

                            

                            <div className="div-row-my margin-top-10 bigform">
                                <div className="div-col-my width-100-my ">
                                    <input name="name" placeholder="Полное наименование" required
                                        className="button-my button-bigi-my button-gray" />
                                </div>
                                
                                <div className="div-col-my width-100-my">
                                    <input name="unp" placeholder="УНП" required className="button-my button-bigi-my button-gray" />
                        
                                </div>
                            </div>




                            <div className="textUndrerJT"><span><b>Юридический адрес</b></span></div>

                            <div className="div-row-my margin-top-10 bigform">
                                <div className="div-col-my width-100-my">
                                    <input name="city" className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="Населенный пункт" defaultValue={this.state.myobj.address.city}/>
                                    <input name="street" className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="Улица"  defaultValue={this.state.myobj.address.street}/>
                                </div>
                                
                                <div className="div-col-my width-100-my">
                                    <div className="button-bigi-my div-row-my">
                                        <div className="">
                                            <input name="house" className="button-my button-small-my button-gray marg-1 smallbut but-big-small" type="text" placeholder="Дом"  defaultValue={this.state.myobj.address.house}/>
                                            <input name="housing" className="button-my button-small-my button-gray marg-1 smallbut but-big-small" type="text" placeholder="Корпус"  defaultValue={this.state.myobj.address.housing} />
                                        </div>
                                    </div>
                                    <div name="office" className="button-bigi-my" ><input className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="Помещение, офис, комната и т.д." required  defaultValue={this.state.myobj.address.office}/></div>
                                </div>
                            </div>
                            <div className="text-center"><input type="checkbox" id="coincidence" /><label htmlFor="coincidence">
                                Юридический и почтовый адрес совпадают</label>
                            </div>
                            <div className="textUndrerJT"><strong>Почтовый адрес</strong>
                            </div>

                            <div className="div-row-my margin-top-10 bigform">

                                <div className="div-col-my width-100-my">
                                    
                                        <input name="post_city" className="button-my button-bigi-my button-gray" type="text"
                                            placeholder="Населенный пункт" defaultValue={this.state.myobj.post_address.city}/>
                                        <input name="post_street" className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="Улица" defaultValue={this.state.myobj.post_address.street}/></div>
                                    
                                <div className="div-col-my width-100-my">
                                    <div className="div-row-my button-bigi-my">
                                        <div>
                                            <input name="post_house" className="button-my button-small-my button-gray marg-1 smallbut but-big-small" type="text" placeholder="Дом" defaultValue={this.state.myobj.post_address.house}/>
                                            <input name="post_housing" className="button-my button-small-my button-gray marg-1 smallbut but-big-small" type="text" placeholder="Корпус" defaultValue={this.state.myobj.post_address.housing}/>
                                        </div>
                                    </div>
                                    <div name="post_office" className="button-bigi-my"><input className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="Помещение, офис, комната и т.д." required  defaultValue={this.state.myobj.post_address.office}/></div>
                                </div>
                            </div>


                            <div className="textUndrerJT"><strong> Платежные реквизиты</strong>
                            </div>

                            <div className="div-row-my margin-top-10 bigform">

                                <div className="div-col-my width-100-my">
                                    <input name="bank" className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="Банк" defaultValue={this.state.myobj.bank}/>
                                    <input name="bank_department" className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="Отделение банка" defaultValue={this.state.myobj.bank_department}/>
                                    <input name="bank_address" className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="Адрес банка" defaultValue={this.state.myobj.bank_address}/>
                                    <input name="first_person" className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="Руководитель" defaultValue={this.state.myobj.first_person}/>
                                    <input name="acting_on" className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="Действует на основании: Устава, доверенности" defaultValue={this.state.myobj.acting_on}/>
                                    <input name="accountant" className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="Бухгалтер организации" defaultValue={this.state.myobj.accountant}/>
                                </div>
                                <div className="div-col-my width-100-my">
                                    <input name="bank_bik" className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="БИК банка" defaultValue={this.state.myobj.bank_bik}/>
                                    <input name="contact_org" className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="Телефон / E-mail банка" defaultValue={this.state.myobj.contact_org}/>
                                    <input name="iban" className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="Расчетный счет в формате IBAN" defaultValue={this.state.myobj.iban}/>
                                    <input name="contact_person" className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="Контактное лицо организации" defaultValue={this.state.myobj.contact_person}/>
                                    <input name="add_contact" className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="Дополнительные контакты организации" defaultValue={this.state.myobj.add_contact}/>
                                    <input name="certificate" className="button-my button-bigi-my button-gray" type="text"
                                        placeholder="Свидетельство о регистрации" defaultValue={this.state.myobj.certificate}/>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="div-centr-flex" >
                        <div className=" button-bigi-my btn-cntner fortext">
                            <button className="button-my button-small-my button-red marg-1 " form="regJyr2" type="submit">Сохранить</button>
                        </div>
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
        //abc: state.store.abc,
    };
};

export default connect(mapStateToProps)(ChangeJyr2Mid);