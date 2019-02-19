import React, { Component } from 'react';
// import '../css/entryDataCreditCard.css';
// import '../css/main.css';
import image from '../images/image.png'

export default class EntryDataCreditCard extends Component {

	formatCardCode = () => {
		const myform = document.getElementById('credit-card-form');
		let cardCode = myform.cardcode.value.replace(/[^\d]/g, '').substring(0,16);
		cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
		myform.cardcode.value = cardCode;
	}

	patternValidityDate() {
		const currentDate = new Date();
		const currenYear = currentDate.getFullYear();

		const ones_number = currenYear % 10;
		const tens_number = Math.floor(currenYear % 100 / 10);

		console.log('^((0[1-9])|(1[0-2]))\/?((' + tens_number + '[' + ones_number + '-9])|([' + (tens_number + 1) + '-9][0-9]))$')

		return '^((0[1-9])|(1[0-2]))\/?((' + tens_number + '[' + ones_number + '-9])|([' + (tens_number + 1) + '-9][0-9]))$';
	}

	render() {

		return (
			<div className="entry-data-credit-card">
				<p> Введите данные с карты </p>
				<div className="container">
					<div className="kek"></div>
					<form method='post' action='' id='credit-card-form' name='creditCardForm'>
						<input name='cardcode' pattern="[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}" required placeholder='Номер карты' onInput={this.formatCardCode} />
						<input name='fio' placeholder='Имя владельца карты' required/>
						<input name='validitydate' placeholder='Срок действия карты ММ / ГГ' pattern={this.patternValidityDate()} required />
						<input name='cvv2' placeholder='CVV2' pattern="[0-9]{3}" required />
					</form>
					<div>
						<img src={image} />
					</div>
				</div>
				<div className='buttons'>
					{/*<a href=''><button type='button' className='btn' > Назад </button></a>
					<a href=''><button type='submit' className='btn' form='credit-card-form'> Далее </button></a>*/}
					<button type='button' className='btn' > Назад </button>
					<button type='submit' className='btn' form='credit-card-form'> Далее </button>
				</div>
				
			</div>
		)
	}
}