import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import Logo from './logo/Logo'

import '../css/regSMS.css'

class RegSMS extends Component {

    constructor() {
        super()
        this.state = {

        }
    }
    nextPage(e) {
        debugger
        e.preventDefault();
        var that = this
        if (this.props.store.legalOrPrivatePath !== null) { //если null - активный юзер - не физ и не юр, а диспетчер
            that.props.props.history.push(this.props.store.legalOrPrivatePath) // Переход на страницы 
        } else {
            that.props.props.history.push(this.props.next)
        }
    }
    render() {
        return (
            <div className="wrapper">
                <Logo />
                <form onSubmit={this.nextPage.bind(this)} id="test" className="regSMS_divInput globalInput">
                    <input className="regSMS_input" defaultValue={this.props.store.user.sms_code} type="text" required placeholder="Введите код из SMS" />
                </form>
                <div className="divButton">
                    <button type="submit" className="regSMS_button globalButton" form="test">Далее</button>
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
    };
};

export default connect(mapStateToProps)(RegSMS);