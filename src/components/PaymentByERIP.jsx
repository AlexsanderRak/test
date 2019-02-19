import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import '../css/styles.css';
// import '../css/paymentByERIP.css';

export default class PaymentByERIP extends Component {

	print() {
		window.print();
	}

	render() {
		const { orderNumber } = this.props;
		return (
			<div className='main-container'>
				<div className='payment-by-ERIP'>
					<p> НОМЕР ЗАКАЗА В СИСТЕМЕ "РАСЧЕТ": <b> {orderNumber} </b></p>
					<p> Запишите номер счета - он понадобится Вам для оплаты </p>
					<hr />
					<div className='payment'>
						<p> Счет вы можете оплатить: </p>
						<ul>
							<li> в кассе или банкомате любого банка </li>
							<li> через платежные терминалы, инфокиоски </li>
							<li> через системы интернет-банкинга и CMC-банкинга </li>
							<li> через платежные системы iPay, WebMoney, EasyPay </li>
						</ul>
					</div>
					<div className='necessary_step'>
						<p> Для проведения платежа необходимо: </p>
						<p> 1 - Выбрать последовательно пункты: </p>
						<ul>
							<li> Система &laquo;Расчет&raquo; (ЕРИП) </li>
							<li> Интернет-магазины/сервисы </li>
							<li> +GT </li>
						</ul>
						<p> 2 - Ввести номер заказа </p>
						<p> 3 - Проверить правильность информации </p>
						<p> 4 - Совершить платеж </p>
					</div>
					<hr />
					<div className='exceptions'>
						<p> Если вы осуществляете платеж в кассе банка, пожалуйста, сообщите
						кассиру о необходимости проведения оплаты услуги &laquo;GT&raquo; через систему
						 &laquo;Расчет&raquo; (ЕРИП) и сообщите номер заказа. </p>
						<p> Нахождение услуги в дереве услуг системы &laquo;Расчет&raquo; (ЕРИП) в некоторых пунктах оплаты
						 может отличаться от описанного выше. В связи с этим, в случае возникновения проблем с поиском услуги,
						 предлагаем выполнить поиск по УНП: 100000000 </p>
					</div>
					<div className='buttons'>
						<Link to={{ pathname: 'paymentChoiceIndividual' }} className="colorWhite" ><button className="btn"> Назад </button></Link>
						<button className='btn print' onClick={this.print}> Печать </button>
						<Link to={{ pathname: 'activeOrderDetail' }} className="colorWhite" ><button className="btn"> Далее </button></Link>
					</div>
				</div>
			</div>
		)
	}

}