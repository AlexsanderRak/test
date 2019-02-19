import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// import createHistory from 'history/createBrowserHistory'
import FirstHeadComponent from './FirstHeadComp'
import emptyStar from '../images/emptyStar.svg'
import yellowStar from '../images/yellowStar.svg'
import SelectRole from './SelectRole'
import Authorization from './Authorization'
import EndReg from './EndReg'
import RegFiz from './RegFiz'
import RegOne from './RegOne'
import RegistrationOfLegalEntities from './RegistrationOfLegalEntities'
import ChangeOfLegalEntities from './ChangeOfLegalEntities'
import RegSMS from './RegSMS'
import PasswordRecovery from './PasswordRecovery'
import PhoneNumber from './PhoneNumber'
import PhoneNumberSMS from './PhoneNumberSMS'
import PhoneNumberNewPassword from './PhoneNumberNewPassword'//
import PhoneSuccessfulExecution from './PhoneSuccessfulExecution'
import Email from './Email'
import CompMaker from './CompMaker'
import BigMap from './BigMap'
import RegJyr from './RegJyr'
import RegJyr2 from './RegJyr2'
import ChangeJyr2 from './ChangeJyr2'
import PrivacyPolicy from './PrivacyPolicy'
import CompMakerAdmin from './CompMakerAdmin'
import OrderResponded from './OrderResponded'
import PaymentChoiceIndividual from './PaymentChoiceIndividual'
import PaymentByERIP from './PaymentByERIP'
import AddCustomerFeedback from './AddCustomerFeedback'
import DriversEditAddDelete from './DriversEditAddDelete'
import ActiveOrders from './ActiveOrders'
import ActiveOrderDetail from './ActiveOrderDetail'
import PreOrder from './PreOrder'
import PopupCancelByPerformer from './PopupCancelByPerformer'
import PopupPaymentNotReceived from './PopupPaymentNotReceived'
import PopupPaymentNotReceivedWarning from './PopupPaymentNotReceivedWarning'
import PopupTransportLeft from './PopupTransportLeft'
import PopupExtendTheLease from './PopupExtendTheLease'
import TechNotFound from './TechNotFound'
import TechMoveOut from './TechMoveOut'
import SetOrderRating from './SetOrderRating'
import Detailed from './Detailed'
import Reviews from './Reviews'
import Messages from './Messages'
import FeedbackForm from './FeedbackForm'
import { popUp } from "../redux/countersAC";
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

// import '../css/popups.css'


import ekskavator from '../images/ekskavator.png'
import EquipCatalog from './EquipCatalog';
import showHidePopups from '../js/showHidePopups';
import EquipQuestoinsForm from './EquipQuestoinsForm';



import choicePopup from '../js/choicePopup';
import centerPopup from '../js/centerPopup';

class Main extends Component {
    constructor() {
        super()
        this.state = {
            dS: null,
            dE: null,
            location: null,
            activePopupId: null,
            reviews: [
                {
                    data: "20.11.2017",
                    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    data: "20.11.2017",
                    comment: "Loresdf sum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    data: "25.5.2015",
                    comment: "Lorem ipsum dolor sit amet consectetur g elit.",
                },
                {
                    data: "22.01.2017",
                    comment: "Loresdf sum dolor sit amet  adipisicing elit.",
                },
                {
                    data: "20.11.2017",
                    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    data: "20.11.2017",
                    comment: "Loresdf sum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    data: "25.5.2015",
                    comment: "Lorem ipsum dolor sit amet consectetur g elit.",
                },
                {
                    data: "22.01.2017",
                    comment: "Loresdf sum dolor sit amet  adipisicing elit.",
                },
            ],
            equipment: [
                {
                    orderNumber: "123456",
                    model: "Экскаватор гусеничный",
                    orderPrice: 80,
                    serviceСommission: 7,
                    distanceToPlace: 10.5,
                    year: 2018,
                    rating: 3.7,
                    stars: [yellowStar, yellowStar, yellowStar, yellowStar, emptyStar],
                    id: 1,
                    img: ekskavator,
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
                    paymentState: true,
                    techType: "Экскаватор"
                },
                {
                    id: '67891',
                    status: 'Отменен клиентом',
                    date: '01. 09. 2015',
                    time: '09:30',
                    paymentState: false,
                    techType: "Экскаватор"
                },
                {
                    id: '23456',
                    status: 'Отменен клиентом',
                    date: '01. 09. 2015',
                    time: '09:30',
                    paymentState: false,
                    techType: "Экскаватор"
                },
                {
                    id: '78912',
                    status: 'Отменен клиентом',
                    date: '01. 09. 2015',
                    time: '09:30',
                    paymentState: true,
                    techType: "Экскаватор"
                },
                {
                    id: '34567',
                    status: 'Отменен клиентом',
                    date: '01. 09. 2015',
                    time: '09:30',
                    paymentState: true,
                    techType: "Экскаватор"
                },
                {
                    id: '89123',
                    status: 'Отменен клиентом',
                    date: '01. 09. 2015',
                    time: '09:30',
                    paymentState: true,
                    techType: "Экскаватор"
                },
                {
                    id: '45678',
                    status: 'Отменен клиентом',
                    date: '01. 09. 2015',
                    time: '09:30',
                    paymentState: true,
                    techType: "Экскаватор"
                },
                {
                    id: '91234',
                    status: 'Отменен клиентом',
                    date: '01. 09. 2015',
                    time: '09:30',
                    paymentState: true,
                    techType: "Экскаватор"
                }
            ],
            orderDetail: {
                id: '123450',
                techType: "Экскаватор",
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
                price: 'XXX ',
                commission: 'XXX '
            },
            isLoaded: false,
            items: [],
        }

    }
    // setResize() {
    //     let elemId = this.props.store.activePopupId
    //     let elemClass = choicePopup(elemId)
    //     centerPopup(elemClass)
    // }
    // componentDidMount = function () {
    //     window.addEventListener('resize', this.setResize.bind(this))
    // }

    showFeedback() {
        var that = this
        that.props.dispatch(popUp(1100))
        showHidePopups(1100)
    }

    render() {

        return (
            <main style={{ position: "relative" }}>
                <div className="content-blocker" onClick={showHidePopups.bind(this, this.props.store.activePopupId, 1)}></div>
                {/* <EquipCatalog />
                <SetOrderRating />
                <PopupPaymentNotReceivedWarning />
                <PopupCancelByPerformer />
                <PopupPaymentNotReceived />
                <PopupTransportLeft />
                <PopupExtendTheLease />
                <TechMoveOut />
                <TechNotFound />
                <EquipQuestoinsForm />
                <FeedbackForm /> */}
                <Switch >
                    <Route exact path='/' component={FirstHeadComponent} />
                    <Route path='/selectRole' component={SelectRole} />
                    <Route path='/authorization' component={Authorization} />
                    <Route path='/client/endReg' component={EndReg} />
                    <Route path='/regFiz' component={RegFiz} />
                    <Route path='/client/regOne' component={RegOne} />
                    <Route path='/contractor/regOne' component={RegOne} />
                    <Route path='/messages' component={Messages} />
                    <Route path='/registrationOfLegalEntities' render={(props) => <RegistrationOfLegalEntities props={props} />} />
                    <Route path='/changeOfLegalEntities' render={(props) => <ChangeOfLegalEntities props={props} />} />
                    <Route path='/client/regSMS' render={(props) => <RegSMS props={props} />} />
                    <Route path='/contractor/regSMS' render={(props) => <RegSMS next="regJyr" props={props} />} />
                    <Route path='/passwordRecovery' render={(props) => <PasswordRecovery props={props} />} />
                    <Route path='/phoneNumber' render={(props) => <PhoneNumber props={props} />} />
                    <Route path='/phoneNumberSMS' render={(props) => <PhoneNumberSMS props={props} />} />
                    <Route path='/phoneNumberNewPassword' render={(props) => <PhoneNumberNewPassword props={props} />} />
                    <Route path='/email' render={(props) => <Email props={props} />} />
                    <Route path='/phoneSuccessfulExecution' render={(props) => <PhoneSuccessfulExecution props={props} />} />
                    <Route path='/selectAddress' component={BigMap} />
                    <Route path='/contractor/regJyr' render={(props) => <RegJyr props={props} />} />
                    <Route path='/contractor/regJyr2' render={(props) => <RegJyr2 props={props} />} />
                    <Route path='/customer' render={(props) => <CompMaker showFeedback={this.showFeedback} />} />
                    <Route path='/admin' render={(props) => <CompMakerAdmin showFeedback={this.showFeedback} />} />
                    <Route path='/orderResponded' component={OrderResponded} />
                    <Route path='/detailed' render={(props) => <Detailed data={this.state.equipment} />} />
                    <Route path='/reviews' render={(props) => <Reviews data={this.statuste.reviews} />} />
                    <Route path='/privacyPolicy' component={PrivacyPolicy} />
                    <Route path='/paymentByERIP' render={(props) => <PaymentByERIP orderNumber="211111111" />} />
                    <Route path='/addCustomerFeedback' render={(props) => <AddCustomerFeedback client='OOO "Авангардспецмонтаж"' props={props} />} />
                    <Route path='/driversEditAddDelete' render={(props) => <DriversEditAddDelete drivers={this.state.drivers} />} />
                    <Route path='/activeOrders' render={(props) => <ActiveOrders orders={this.state.orders} />} />
                    <Route path='/activeOrderDetail' render={(props) => <ActiveOrderDetail orderDetail={this.state.orderDetail} />} />
                    <Route path='/preOrder' render={(props) => <PreOrder orders={this.state.orders} />} />
                    <Route path='/paymentChoiceIndividual' render={(props) => <PaymentChoiceIndividual openPopup={this.openPopup} />} />
                </Switch>
            </main>
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

export default withRouter(connect(mapStateToProps)(Main));