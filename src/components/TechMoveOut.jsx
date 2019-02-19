import React, { Component } from 'react';
// import '../css/techMoveOut.css';

export default class TechMoveOut extends Component {

	closePopup() {
		const popup = document.getElementsByClassName('tech-move-out')[0].parentNode;
		popup.setAttribute('class', 'container close');
	}

	render() {
		const { mail, date, visibility } = this.props;


		return (
			<div className='tech-move-out disablePopup'>
				<p> Заказанный транспорт выехал к месту выполнения заказа </p>
				<button type='button' className='btn' onClick={this.closePopup}> Закрыть </button>
			</div>
		)
	}
}