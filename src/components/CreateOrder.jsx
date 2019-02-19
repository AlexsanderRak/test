import React, { Component } from 'react'
import Head from './Head'
import OrderInfoType from './OrderInfoType'
import OrderInfoAddress from './OrderInfoAddress'
import { Switch, Route } from 'react-router-dom'
import RoundCalendar from './Calendar'
import DateTime from './DateTime'
import EquipQuestionsForm from './EquipQuestoinsForm'
import FeedBackForm from './FeedbackForm'
import emptyStar from '../images/emptyStar.svg'
import yellowStar from '../images/yellowStar.svg'
import {connect} from 'react-redux';
import {counterButton_create} from "../redux/countersAC";
import EquipCatalog from './EquipCatalog'
import ProgressBar from './ProgressBar'
import { withRouter } from 'react-router';


// import '../css/foot.css'
// import '../css/styles.css'
// import '../css/main.css'
// import '../css/head.css'
// import '../css/adminHead.css'


class CreateOrder extends Component {
    constructor() {
        super()
        this.state = {
            dS: null,
            dE: null,
            location: this.location,
            equipment: [
                {
                    orderNumber: "123456",
                    model: "Экскаватор гусеничный",
                    orderPrice: 80,
                    serviceСommission: 7,
                    distanceToPlace: 10.5,
                    year: 2018,
                    stars: [yellowStar, yellowStar, yellowStar, yellowStar, emptyStar],
                    detailed: { bucketCapacity: "0.86", minimumDepth: "5", dispatcher: "Куликовская Мария Ивановна", tel: "80291234567" }
                },
            ],
            drivers: [
                {
                    fio: "Иванов Иван Иванович",
                    transport: "Экскаватор гусеничный",
                    stateNumber: "5555 AB-7",
                    phone: "+375 33 654 75 80",
                    id: 1
                },
                {
                    fio: "Иванов Иван Иванович",
                    transport: "Экскаватор гусеничный",
                    stateNumber: "5555 AB-7",
                    phone: "+375 33 654 75 80",
                    id: 2
                },
                {
                    fio: "Иванов Иван Иванович",
                    transport: "Экскаватор гусеничный",
                    stateNumber: "5555 AB-7",
                    phone: "+375 33 654 75 80",
                    id: 3
                },
                {
                    fio: "Иванов Иван Иванович",
                    transport: "Экскаватор гусеничный",
                    stateNumber: "5555 AB-7",
                    phone: "+375 33 654 75 80",
                    id: 4
                }
            ],
            orders: [
                {
                    id: '12345',
                    status: 'Отменен клиентом',
                    date: '01. 09. 2015',
                    time: '09:30',
                    paymentState: 'Оплата поступила'
                },
                {
                    id: '67891',
                    status: 'Отменен клиентом',
                    date: '01. 09. 2015',
                    time: '09:30',
                    paymentState: 'Ожидание оплаты'
                },
                {
                    id: '23456',
                    status: 'Отменен клиентом',
                    date: '01. 09. 2015',
                    time: '09:30',
                    paymentState: 'Ожидание оплаты'
                },
                {
                    id: '78912',
                    status: 'Отменен клиентом',
                    date: '01. 09. 2015',
                    time: '09:30',
                    paymentState: 'Оплата поступила'
                },
                {
                    id: '34567',
                    status: 'Отменен клиентом',
                    date: '01. 09. 2015',
                    time: '09:30',
                    paymentState: 'Оплата поступила'
                },
                {
                    id: '89123',
                    status: 'Отменен клиентом',
                    date: '01. 09. 2015',
                    time: '09:30',
                    paymentState: 'Оплата поступила'
                },
                {
                    id: '45678',
                    status: 'Отменен клиентом',
                    date: '01. 09. 2015',
                    time: '09:30',
                    paymentState: 'Оплата поступила'
                },
                {
                    id: '91234',
                    status: 'Отменен клиентом',
                    date: '01. 09. 2015',
                    time: '09:30',
                    paymentState: 'Оплата поступила'
                }
            ],
            orderDetail: {
                id: '123450',
                status: 'Приехал на место выполнения работ',
                date: '01. 09. 2015',
                driverFio: 'Иванов Иван Иванович ',
                driverPhone: ' +375 33 568 22 46',
                dispatcherFio: 'Екатерина Иванова ',
                dispatcherPhone: ' +375 33 648 66 99',
                TechClass: 'ЗЕМЛЕРОЙНАЯ ТЕХНИКА',
                TechTitle: 'ЭКСКАВАТОР КОЛЕСНЫЙ',
                quantity: '1',
                dateStart: '01. 09. 2015',
                TimeStart: '12:00 дня',
                dateEnd: '01. 10. 2015',
                TimeEnd: '12:00 дня',
                location: 'г.Минск, ул.Есенина, 17',
                price: 'XXX BYN без НДС',
                commission: 'XXX BYN в т.ч. НДС'
            }
        }
    }
    updateData() {
        let x = this.state.dayStart;
        let y = this.state.dayEnd;
        setTimeout(function () {
            document.getElementsByClassName('dateStart')[0].innerHTML = x
            document.getElementsByClassName('dateEnd')[0].innerHTML = y
        }, 400)
    }
    render() {
        // console.log(this.props)
        return (
            <div className='fix'>
                {/* <Head showFeedback={this.props.showFeedback}/> */}
                {/* <ProgressBar />         ПОКА РЕШАЕТСЯ, БУДЕТ ЛИ ИСПОЛЬЗОВАТЬСЯ И ЕСЛИ ДА, ТО КАК */}
                
                {/* <Route path='/createOrder/equipCatalog' component={EquipCatalog} /> */}
                <div className="order-info-wrap">
                    <OrderInfoType props={this.props} showFeedback={this.props.showFeedback}/>
                    <div className="order-info order-info-date">
                        <Route path="/customer/createorder/selecttime" component={DateTime} dS={this.state.dS} dE={this.state.dE} />
                        <Route path='/customer/createorder/selectdate' render={(props) => <RoundCalendar updateData={this.updateData} />} />
                    </div>
                    <OrderInfoAddress />
                </div>
                
                {/* <Route path='/createOrder/equipQuestions' component={EquipQuestionsForm} /> */}                
            </div>
        )
    }
}
const mapStateToProps = function (state) {
    // console.log (state.counter ,"CompMaker")
    return {
        // из раздела Redux с именем counter свойство cnt будет доступно
        // данному компоненту как this.props.cnt
        equipCatalog: state.data,
    };
};

export default withRouter(connect(mapStateToProps)(CreateOrder));