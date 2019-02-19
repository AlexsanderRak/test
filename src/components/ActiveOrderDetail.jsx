import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import '../css/activeOrderDetail.css';
// import '../css/main.css';

export default class ActiveOrderDetail extends Component {

	render() {

		const { id, status, date, driverFio, driverPhone, dispatcherFio,
			dispatcherPhone, TechClass, TechTitle, quantity, dateStart, TimeStart,
			dateEnd, TimeEnd, location, price, commission, techType, title } = this.props.orderDetail;
		//TODO переход на карту !!!
		return (
			<div className='main-container'>
				<div className='order-detail'>
					<p> {title} </p>
					<hr />
					<div className='detail'>
						<p>Заказ: <b>№ {id} </b> </p>
						<p>Тип техники: <b> {techType} </b> </p>
						<p>Статус: <b>{status} </b> </p>
						<p>Дата заказа: <b>{date}</b> </p>
						<p>Водитель: <b>{driverFio}</b> <b> {driverPhone} </b> </p>
						<p>Диспетчер: <b>{dispatcherFio} </b> <b>{dispatcherPhone} </b> </p>
						<p id='tech'>{TechClass} <br /> {TechTitle}</p>
						<p>Количество: <b>{quantity} шт. </b> </p>
						<p>Дата начала: <b>{TimeStart} </b> <b>{dateStart} </b> </p>
						<p>Дата окончания: <b>{TimeEnd}</b> <b> {dateEnd} </b> </p>
						<p>Место выполнения работ: <b>{location} </b> </p>
						<p>Сумма заказа: <b>{price} BYN без НДС</b> </p>
						<p>Комиссия сервиса: <b>{commission} BYN в т.ч. НДС</b> </p>
					</div>
					<hr />
					<Link to={{ pathname: 'activeOrders' }} className="colorWhite" ><button type='button' className='btn'> Показать на карте </button></Link>
				</div>
			</div>
		)
	}
}