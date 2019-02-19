import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PopupPaymentNotReceivedWarning extends Component {

	onCloseClick = () => {
		const popup = document.getElementsByClassName('payment-warning')[0].parentNode;
		popup.setAttribute('class', 'container close');
	}

	render() {
		const { name, visibility } = this.props;

		const classname = `container ${visibility ? "open" : "close"}`

		return (
			<div className="popups payment-warning disablePopup">
				<h3>Уважаемый {name}</h3>
				<p>
					Оплата не поступила, предказаз будет отменён через 1 час.<br />
					В случае если оплата была Вами произведена, просьба оперативно связаться с администратором.
					</p>
				<Link to={{ pathname: '/feedback' }}><input onClick={this.onCloseClick} type="submit" className="btn" value="Связаться с администратором" /></Link>
			</div>
		)
	}
}