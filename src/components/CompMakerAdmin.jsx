import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import AdminHead from './AdminHead'
import HistoryOfOrders from './HistoryOfOrders'
import ActiveOrderDetail from './ActiveOrderDetail'
import ActiveOrders from './ActiveOrders'
import PreOrder from './PreOrder'
import DriversEditAddDelete from './DriversEditAddDelete'
import NewDriver from './NewDriver'
import TransportEditAddDelete from './TransportEditAddDelete'
import NewTransport from './NewTransport'
import Messages from './Messages'
import FeedbackForm from './FeedbackForm'
import ChangeJyr2 from './ChangeJyr2'
import AddCustomerFeedback from './AddCustomerFeedback'

// import '../css/foot.css'
// import '../css/styles.css'
// import '../css/main.css'
// import '../css/head.css'
// import '../css/adminHead.css'

//TODO Собарть страничку админа 
class CompMakerAdmin extends Component {
    constructor() {
        super()
        this.state = {
            orderDetail: {
                title: 'АКТИВНЫЕ',
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
                price: 'XXX',
                commission: 'XXX',
                techType: "Экскаватор"
            },
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
                    techType: "Экскаватор",
                    historyState: true
                },
                {
                    id: '67891',
                    status: 'Отменен клиентом',
                    date: '01. 09. 2015',
                    time: '09:30',
                    paymentState: false,
                    techType: "Экскаватор",
                    historyState: false
                },
                {
                    id: '23456',
                    status: 'Отменен клиентом',
                    date: '01. 09. 2015',
                    time: '09:30',
                    paymentState: false,
                    techType: "Экскаватор",
                    historyState: true
                },
                {
                    id: '78912',
                    status: 'Отменен клиентом',
                    date: '01. 09. 2015',
                    time: '09:30',
                    paymentState: true,
                    techType: "Экскаватор",
                    historyState: true
                },
                {
                    id: '34567',
                    status: 'Отменен клиентом',
                    date: '01. 09. 2015',
                    time: '09:30',
                    paymentState: true,
                    techType: "Экскаватор",
                    historyState: true
                },
                {
                    id: '89123',
                    status: 'Отменен клиентом',
                    date: '01. 09. 2015',
                    time: '09:30',
                    paymentState: true,
                    techType: "Экскаватор",
                    historyState: true
                },
                {
                    id: '45678',
                    status: 'Отменен клиентом',
                    date: '01. 09. 2015',
                    time: '09:30',
                    paymentState: true,
                    techType: "Экскаватор",
                    historyState: true
                },
                {
                    id: '91234',
                    status: 'Отменен клиентом',
                    date: '01. 09. 2015',
                    time: '09:30',
                    paymentState: true,
                    techType: "Экскаватор",
                    historyState: true
                }
            ],
        }
    }
    render() {
        return (
            <div style={{ background: 'rgb(' + 242 + ',' + 247 + ',' + 250 + ')', paddingBottom: '15px' }}>
                <AdminHead showFeedback={this.props.showFeedback} />
                <div >
                    <Route path='/admin/historyOfOrders' render={(props) => <HistoryOfOrders orders={this.state.orders} />} />
                    <Route path='/admin/activeOrders' render={(props) => <ActiveOrders orders={this.state.orders} />} />
                    <Route path='/admin/activeOrderDetail' render={(props) => <ActiveOrderDetail orderDetail={this.state.orderDetail} />} />
                    <Route path='/admin/preOrder' render={(props) => <PreOrder orders={this.state.orders} />} />
                    <Route path='/admin/driversEditAddDelete' render={(props) => <DriversEditAddDelete drivers={this.state.drivers} props={props} />} />
                    <Route path='/admin/newDriver' render={(props) => <NewDriver drivers={this.state.drivers} />} />
                    <Route path='/admin/transportEditAddDelete' render={(props) => <TransportEditAddDelete drivers={this.state.drivers} />} />
                    <Route path='/admin/newTransport' render={(props) => <NewTransport drivers={this.state.drivers} />} />
                    <Route path='/admin/messages' render={(props) => <Messages drivers={this.state.drivers} />} />
                    <Route path='/admin/feedback' render={(props) => <FeedbackForm drivers={this.state.drivers} classname={'inherit'} props={props} />} />
                    <Route path='/admin/personalarea' render={(props) => <ChangeJyr2 />} />

                </div>
            </div>
        )
    }
}

export default CompMakerAdmin