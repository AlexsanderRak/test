import React, { Component } from 'react'
import headLogo from '../images/head-logo.png'


class CheckIn extends Component{
   
    render(){
        return(
            <div className="div-centr-flex">
                <div style={{width: '450px'}}>
                    <div className="div-image-gt-wrap"><img src={headLogo} width="200" height="222" alt="gt" style={{textalign: "center"}} className="image-center" />
                    </div>
                <div className="textUndrerJT"><span>Регистрация </span></div>
                <div>
                    <form class="form" action="reg2.html" method="post" id="test1">
                        <input name=""  type="text" title="name@mail.ru" required pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" className="button button-big button-gray" placeholder="*Введите E-mail" />
                        <input name="" type="text" required title="375 29 123 45 67" pattern="^([\+]?375|(8[\s|\-]?0))[\s|\-]?(29|33|25|44|33|17)[\s|\-]?([0-9]{3}[\s|\-]?[0-9]{2}[\s|\-]?[0-9]{2}[\s|\-]?)$" className="button button-big button-gray" placeholder="Введите номер телефона" />
                        <input name="" id="password" type="password" placeholder="Ведите пароль" required className="button button-big button-gray" title="код неменее 8-х символов" pattern="^.{8,40}" />
                        <input name="" id="password-check" type="password" placeholder="Подтвердите пароль" required className="button button-big button-gray" />
                        <br /><span id='message'></span>
                    </form>
                </div>

        <div>
            <div>
                <button className="button button-small button-red">Назад</button>
                <button type="submit" className="button button-small button-red" form="test4">Далее</button>
            </div>
        </div>


    </div>
</div>

        )
    }

}
export default CheckIn