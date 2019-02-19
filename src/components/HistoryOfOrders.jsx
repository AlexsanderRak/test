import React, {Component} from 'react';
import { Link } from 'react-router-dom'
// import '../css/orders.css';

export default class HistoryOfOrders extends Component {

	displayAddFeedback(status) {
		if(status){
			return (
				<Link to={{ pathname: 'addCustomerFeedback' }} className="colorWhite " ><button type='button' className='btn addFeedback' > Оставить отзыв </button></Link>
			)
		}
	}

	createOrderItem (orders) {
		return orders.map((order) => {
			const {id, status, date, time, techType, historyState} = order;
			return (

				<div key={id} className='order-item'>
					<div className='pre-order-item'>
						<div className='info'>
							<p> Заказ: <b> № {id} </b></p> 
							<p> Тип техники: <b> {techType} </b> </p>
							<p> Статус: <b> {historyState ? "Завершен" : "Отменен"} </b> </p> 
							<p> Дата и время заказа: <b> {time} / {date} </b> </p> 
						</div>
						<div className='status historyState'>
							{this.displayAddFeedback(historyState)}
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
				<div className = 'orders  history'>
					<p> ИСТОРИЯ </p>
					<hr/>
					<div className='active-order'>
						{orderItems}
					</div>
				</div>
			</div>
		)
	}

}