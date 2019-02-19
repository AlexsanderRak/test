import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PopupPaymentNotReceived extends Component {

	onCloseClick = () => {
		const popup = document.getElementsByClassName('payment-not-received')[0].parentNode;
		popup.setAttribute('class', 'container close');
	}

	render() {
		const { name, visibility } = this.props;

		return (
			<div className="popups payment-not-received disablePopup">
				<h3>Уважаемый {name}</h3>
				<p>
					Оплата не поступила, Ваш заказ отменён.
					</p>
				<Link to={{ pathname: '/feedback' }}><input onClick={this.onCloseClick} type="submit" className="btn" value="Связаться с администратором" /></Link>
			</div>
		)
	}
}