import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PopupCancelByPerformer extends Component {

	onCloseClick = () => {
		const popup =  document.getElementsByClassName('cancel')[0].parentNode;
        popup.setAttribute('class', 'container close');
	}

	render() {

		const { name, number_of_order } = this.props;

		return (
				<div className="popups cancel disablePopup">
					<h3>Уважаемый { name }</h3>
					<p>
						Сообщаем, что ваш заказ №{ number_of_order} отменен исполнитем.<br />
						Приносим свои изменения.<br />
						Желаете, что бы система произвела поиск нового подрядчика по заданным параметрам?
					</p>
					<div className="btn-container">
						<Link to={{ pathname: ''}}><input onClick={ this.onCloseClick } type="submit" className="btn refuse" value="Отказаться" /></Link>
						<Link to={{ pathname: ''}}><input type="submit" className="btn search" value="Выполнить поиск" /></Link>
					</div>
				</div>
		)
	}
}