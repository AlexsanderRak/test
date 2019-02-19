import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PopupTransportLeft extends Component {

	onCloseClick = () => {
		const popup = document.getElementsByClassName('transport-left')[0].parentNode;
		popup.setAttribute('class', 'container close');
	}

	render() {
		const { name, visibility } = this.props;

		return (
			<div className="popups transport-left disablePopup">
				<h3>Уважаемый {name}</h3>
				<p>
					Заказанный транспорт выехал к следующему пункту выполнения работ.
					</p>
				<input onClick={this.onCloseClick} type="submit" className="btn" value="Закрыть" />
			</div>
		)
	}
}
