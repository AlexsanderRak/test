import React, { Component } from 'react'
import { connect } from 'react-redux'

import PopupCancelByPerformer from './PopupCancelByPerformer'
import PopupPaymentNotReceived from './PopupPaymentNotReceived'
import PopupPaymentNotReceivedWarning from './PopupPaymentNotReceivedWarning'
import PopupTransportLeft from './PopupTransportLeft'
import PopupExtendTheLease from './PopupExtendTheLease'
import TechNotFound from './TechNotFound'
import TechMoveOut from './TechMoveOut'
import SetOrderRating from './SetOrderRating'
import EquipCatalog from './EquipCatalog'
import { popUp } from '../redux/countersAC'


class Popup extends Component {
    constructor() {
        super()
        this.state = {
            // Popup's data
            obj: {
                id: 40,
                visibility: true,
                props: {
                    name: "Иван Иванович",
                    time: 1,
                    number_of_order: 12345,
                    num: 12345678,
                    date: "03.09.2018"
                }
            }
            // activePopup: null
        }
    }

    openPopup(componentClassTitle) {
        console.log(componentClassTitle)
        const popup = document.getElementsByClassName(componentClassTitle)[0].parentNode;
        const popupParent = popup.parentNode.children[1];
        popup.style.height = popupParent.getBoundingClientRect().height + parseInt(getComputedStyle(popupParent).marginTop) + parseInt(getComputedStyle(popupParent).marginBottom) + 'px';
        popup.style.top = 0;

    }

    //calculates the height of the popups
    componentDidMount() {
        if (!this.props.activePopup) return;
        this.openPopup(this.props.activePopup);
        window.addEventListener('resize', () => {
            this.openPopup(this.props.activePopup);
        })
    }

    render() {
        var that = this;
        switch (that.props.activePopupId) {
            case 0:
                return <div></div>
            case 100:
                // debugger
                that.props.dispatch(popUp('tech-not-found'))
                return <TechNotFound visibility={that.state.obj.visibility} />
            case 200:
                this.props.store.activePopup = 'tech-move-out';
                return <TechMoveOut visibility={this.state.obj.visibility} />
            case 300:
                this.props.store.activePopup = 'extend-the-lease';
                return <PopupExtendTheLease visibility={this.state.obj.visibility} name={this.state.obj.props.name} time={this.state.obj.props.time} />;
            case 400:
                this.props.store.activePopup = 'transport-left';
                return <PopupTransportLeft visibility={this.state.obj.visibility} name={this.state.obj.props.name} />;
            case 500:
                this.props.store.activePopup = 'payment-not-received';
                return <PopupPaymentNotReceived visibility={this.state.obj.visibility} name={this.state.obj.props.name} />;
            case 600:
                this.props.store.activePopup = 'cancel';
                return <PopupCancelByPerformer visibility={this.state.obj.visibility} name={this.state.obj.props.name} number_of_order={this.state.obj.props.number_of_order} />;
            case 700:
                this.props.store.activePopup = 'payment-warning';
                return <PopupPaymentNotReceivedWarning visibility={this.state.obj.visibility} name={this.state.obj.props.name} />;
            case 800:
                this.props.store.activePopup = 'set-order-rating'
                return <SetOrderRating visibility={this.state.obj.visibility} name={this.state.obj.name} num={this.state.obj.num} date={this.state.obj.date} />;
            case 900:
                this.props.store.activePopup = 'equip-catalog'
                return <EquipCatalog visibility={this.state.obj.visibility} />;
            default: return;
        }
    }
}



const mapStateToProps = function (state) {
    console.log(state, "             Popup")
    return {
        // из раздела Redux с именем store свойство activePopupId будет доступно
        // данному компоненту как this.props.activePopupId
        // activePopup: state.store.activePopup,
        activePopupId: state.store.activePopupId,
    };
};

// присоединяем (connect) компонент к хранилищу Redux
export default connect(mapStateToProps)(Popup);