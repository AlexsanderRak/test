import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PopupExtendTheLease extends Component {

	state = {
		new_time: 1
	}

	onPlusClick = () => {
		let temp = parseInt(this.state.new_time);
		++temp;
		this.setState({ new_time: temp});
	}

	onMinusClick = () => {
		let temp = parseInt(this.state.new_time);
		if (temp == 1) {
			return
		}
		--temp;
		this.setState({ new_time: temp});
	}

	render() {
		const { name, time,  visibility } = this.props;

		return (
				<div className="popups extend-the-lease disablePopup">
					<h3>Уважаемый { name }</h3>
					<p>
						Срок аренды заканчивается через { time } час.<br />
						Если Вы хотите продлить время работы техники/транспорта, укажите время дополнительной работы.
					</p>
					<p>
						Продлить на, ч:
					</p>
					<div className="container-lease">
						<button className="btn" onClick={ this.onMinusClick }>-</button>
						<input defaultValue={ this.state.new_time }></input>
						<button className="btn" onClick={ this.onPlusClick }>+</button>
					</div>
					<Link to={{ pathname: ''}}><input type="submit" className="btn extend-btn" value="Продлить" /></Link>
				</div>
		)
	}
}