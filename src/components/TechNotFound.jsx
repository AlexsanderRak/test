import React, { Component } from 'react';
// import '../css/techNotFound.css';
// import '../css/styles.css';
import { Link } from 'react-router-dom'

export default class TechNotFound extends Component {

	closePopup() {
		const popup = document.getElementsByClassName('tech-not-found disablePopup')[0].parentNode;
		popup.setAttribute('class', 'container close');
	}

	render() {
		const { mail, date, visibility } = this.props;

		// const classname = `container ${ visibility ? "open" : "close" }`

		return (
			<div className='tech-not-found disablePopup'>
				<p> ПО ЗАДАННЫМ ПАРАМЕТРАМ ТЕХНИКА НЕ НАЙДЕНА </p>
				<p> Попробуйте изменить параметры поиска </p>
				<div className='buttons'>
					<button type='button' className='btn' onClick={this.closePopup}> Нет </button>
					<Link to={{ pathname: 'createOrder/selectTime' }} className="colorWhite" onClick={this.closePopup}><button type='button' className='btn' > Да </button></Link>
				</div>
			</div>
		)
	}
}