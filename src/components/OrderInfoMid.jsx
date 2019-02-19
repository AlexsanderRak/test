import React, { Component } from 'react'
import OrderInfoType from './OrderInfoType';
import OrderInfoDate from './OrderInfoDate';
import OrderInfoAddress from './OrderInfoAddress';
import { Switch, Route } from 'react-router-dom'
import RoundCalendar from './Calendar';
import DateTime from './DateTime'

export default class OrderInfoMid extends Component {
    // state = {
    //     dS: null,
    //     dE: null
    // }
    // updateData() {
    //     let x = this.state.dayStart;
    //     let y = this.state.dayEnd;
    //     setTimeout(function () {
    //         document.getElementsByClassName('dateStart-input')[0].value = x
    //         document.getElementsByClassName('dateEnd-input')[0].value = y
    //     }, 4)
    // }
    render() {
        // console.log(this.state.dS, this.state.dE)
        // const M = () => (
        //     <div className="order-info order-info-date">
        //         <Switch>
        //             <Route exact path='/createOrder' component={OrderInfoDate} />
        //             <Route
        //                 path='/createOrder/dateStart'
        //                 render={(props) => <RoundCalendar updateData={this.updateData} />}
        //             />
        //             <Route
        //                 path='/createOrder/dateEnd'
        //                 render={(props) => <RoundCalendar updateData={this.updateData} />}
        //             />
        //             <Route updateData={this.updateData} path='/createOrder/dateEnd' component={RoundCalendar} />
        //         </Switch>
        //     </div>
        // )
        return (
            // <BrowserRouter>
            <div className="order-info-wrap">
                <OrderInfoType />
                <div className="order-info order-info-date">
{this.props.children}
                </div>
                
                {/* <DateTime /> */}
                <OrderInfoAddress />
            </div>
            // {/* </BrowserRouter> */}
        )
    }
}


