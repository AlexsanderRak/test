import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { legalPrivate } from "../redux/countersAC";
import Logo from './logo/Logo'

import '../css/endReg.css'

class EndReg extends Component {

    toFiz() {
        this.props.dispatch(legalPrivate(true, "/regFiz"))
    }
    toJyr() {
        this.props.dispatch(legalPrivate(false, "/registrationOfLegalEntities"))
    }



    render() {
        return (
            <div className="wrapper">
                <Logo />
                <div className="title "><span>Для завершения регистрации,<br />внесите недостающие данные</span></div>
                <div className="title "><strong>Выберите тип пользователя</strong></div>
                <div className="endReg_divButton divButton">
                    <Link to={{ pathname: 'regOne' }} onClick={this.toFiz.bind(this)} className="endReg_button globalButton">Физическое лицо</Link>
                    <Link to={{ pathname: 'regOne' }} onClick={this.toJyr.bind(this)} className="endReg_button globalButton">Юридическое лицо</Link>
                </div>
            </div>
        )
    }

}

const mapStateToProps = function (state) {
    // console.log(state.counter, "EndReg")
    return {
        // из раздела Redux с именем counter свойство cnt будет доступно
        // данному компоненту как this.props.cnt
        cnt: state.store.cnt,
    };
};

// присоединяем (connect) компонент к хранилищу Redux
export default connect(mapStateToProps)(EndReg);