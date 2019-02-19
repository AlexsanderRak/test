import React, { Component } from 'react';
// import '../css/confOfSendInvoice.css';
// import '../css/styles.css';
import { Link } from 'react-router-dom'

export default class ConfOfSendInvoice extends Component {

	closePopup() {
		const popup = document.getElementsByClassName('containerP')[0];
        popup.setAttribute('class', 'containerP close');

	}

	render() {
		const {mail, date} = this.props;

		return (
			<div className='containerP close'>
				<div className = 'conf-of-send-invoice'>
					<div className='conf'>
						<p><b> СООБЩЕНИЕ БЫЛО ОТПРАВЛЕНО </b></p>
						<p> Счет для оплаты выслан на указанный при регистрации электронный адрес:</p>
						<p id='mail'> {mail} </p>
						<p> Пожалуйста, оплатите не позднее: </p>
						<p><b> {date} </b></p>
					</div>
					<div className='buttons'>
						<button type='button' className='btn' onClick={this.closePopup}> Назад  </button>
						<Link to = {{ pathname: 'createOrder/selectTime' }} className="colorWhite" onClick={this.closePopup}><button type='button' className='btn' > Далее </button></Link>
					</div>
				</div>
			</div>
		)
	}
}