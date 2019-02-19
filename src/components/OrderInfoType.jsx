import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { pushCatalog, popUp } from "../redux/countersAC";
import showHidePopups from '../js/showHidePopups'


class OrderInfoType extends Component {
    constructor() {
        super()
        this.state = {
            counter: 1,
            activePopup: 0,
        }
    }
    counter(e) {
        let el = e.currentTarget.innerHTML;
        if (el === "-" && this.state.counter > 1) {
            this.setState({ counter: --this.state.counter })
        }
        if (el === "+" && this.state.counter < 20) {
            this.setState({ counter: ++this.state.counter })
        }
    }

    getCatalog() {
        // var that = this
        // that.props.dispatch(popUp(100))
        // showHidePopups(100)
        var that = this
        let url = 'http://178.159.45.189/api/technics/catalog/'
        fetch(url, {
            method: "GET",
            headers: {
                // "Authorization": 'JWT ' + that.props.abc.token,
                // "Content-Type": "application/json"
            },
            // body: JSON.stringify(user),
        }).then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                }
                return response.json();
            })
            .then(function (data) {
                console.log("DATA FROM SERVER: ", data);
                that.props.dispatch(pushCatalog(data));
                // that.props.props.history.push('equipCatalog')

                that.props.dispatch(popUp(800))
                showHidePopups(800)

                // that.setState({ pathLink: (data.user.user_type == 3) ? '/admin/activeOrders' : '/createOrder/selectDate' })

                // let linkBtn = document.getElementById('disabledlink');                  //переход на авторизацию
                // linkBtn.classList.remove('disabled-link');                              //
                // linkBtn.click()                                                         //
            })
    }
    equipAnswers() {
        var that = this
        that.props.dispatch(popUp(1000))
        showHidePopups(1000)
    }
    render() {
        return (
            <div className="order-info order-info-type">
                <form id="autopass">
                    <p className="order-info-h">ВЫБЕРИТЕ ТИП ТЕХНИКИ</p>
                    <br />
                    <div onClick={this.getCatalog.bind(this)} className="btn">Каталог</div>
                    {/* <div onClick={this.getCatalog.bind(this)} className="btn">Каталог</div> */}
                    <br />
                    <p>Если не нашли подходящей техники, <a onClick={this.props.showFeedback.bind(this)}>свяжитесь с администратором</a></p>
                    <p>Количество:</p>
                    <div className="piece-counter-wrap">
                        <div className="minus btn btn-round" disabled onClick={this.counter.bind(this)}>&#45;</div>
                        <input name="quantEquip" className="minus-plus-result btn-round input-light" readOnly value={this.state.counter} max="20" min="1" maxLength="2" />
                        <div className="plus btn btn-round" disabled onClick={this.counter.bind(this)}>&#43;</div>
                    </div>
                </form>
                {/* <Link to={{ pathname: '/createOrder/equipQuestions' }}> */}
                    <div className="btn" onClick={this.equipAnswers.bind(this)}>
                        Ответить на вопросы по выбранной технике
                    </div>
                {/* </Link> */}
            </div >
        )
    }
}

const mapStateToProps = function (state) {
    // console.log(state.counter, "Authorization")
    return {
        // из раздела Redux с именем counter свойство cnt будет доступно
        // данному компоненту как this.props.cnt
        equipCatalog: state.store.equipCatalog,
    };
};

// присоединяем (connect) компонент к хранилищу Redux
// export default OrderInfoType;
export default connect(mapStateToProps)(OrderInfoType);