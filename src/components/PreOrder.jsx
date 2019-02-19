import React, {Component} from 'react';
import { Link } from 'react-router-dom'
// import '../css/orders.css';
// import '../css/main.css';

export default class PreOrder extends Component {

	createOrderItem (orders) {
		return orders.map((order) => {
			const {id, status, date, time, paymentState, techType} = order;
			return (

				<div key={id} className='order-item '>
					<div className='pre-order-item'>
						<div className='info'>
							<p> Заказ: <b> № {id} </b></p> 
							<p>Тип техники: <b> {techType} </b> </p>
							<p> Статус: <b> {status} </b> </p> 
							<p> Дата и время заказа: <b> {time} / {date} </b> </p> 
						</div>
						<div className='status'>
							<p> {paymentState ? "Оплата поступила" : "Ожидание оплаты"} </p>
							<Link to={{ pathname: 'activeOrderDetail' }} className="colorWhite" ><button type='button' className='btn' > Подробнее </button></Link>
						</div>
					</div>
					<hr />
				</div>
			)
		})
	}

	render() {

		const orders = this.props.orders;
		const orderItems = this.createOrderItem(orders);

		return (
			<div className = 'main-container'>
				<div className = 'orders pre-order'>
					<p> ПРЕДЗАКАЗЫ </p>
					<hr/>
					<div className='active-order'>
						{orderItems}
					</div>
				</div>
			</div>
		)
	}

}