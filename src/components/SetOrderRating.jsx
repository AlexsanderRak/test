import React, { Component } from 'react';
import emptyStar from '../images/emptyStar.svg';
import yellowStar from '../images/yellowStar.svg';
import addPhoto from '../images/addFile.png';
// import '../css/setOrderRating.css';

export default class SetOrderRating extends Component {

	state = {
		ratingTech: [emptyStar, emptyStar, emptyStar, emptyStar, emptyStar],
		ratingDriver: [emptyStar, emptyStar, emptyStar, emptyStar, emptyStar],
		nameImgLoad: []
	}

	imgPersonLoad = (e) => {
		let images = Array.from(e.target.files);
		this.setState(({ nameImgLoad }) => {
			const newArray = [...nameImgLoad, ...images];
			return {
				nameImgLoad: newArray
			}
		})

	}

	onDeleted = (e) => {
		let delItem = Number(e.target.parentNode.getAttribute('id'));
		console.log(delItem)

		this.setState(({ nameImgLoad }) => {
			console.log(nameImgLoad);
			const before = nameImgLoad.slice(0, delItem);
			console.log(before)
			const after = nameImgLoad.slice(delItem + 1);
			console.log(after)
			const newArray = [...before, ...after];
			console.log(newArray)
			return {
				nameImgLoad: newArray
			}
		})
	}

	check = () => {
		const fotos = document.getElementsByClassName('fotoName')[0];
		if (!this.state.nameImgLoad.length) {
			fotos.innerHTML = "";
			document.querySelector('.foto>p').style.display = 'none';
		} else {
			document.querySelector('.foto>p').style.display = 'block';

			if (this.state.nameImgLoad.length) {
				fotos.innerHTML = "";

				this.state.nameImgLoad.forEach((el, index) => {
					let div = document.createElement('div');
					div.setAttribute('id', index);

					let p = document.createElement('p');
					p.innerText = el.name;

					let btn = document.createElement('button');
					btn.setAttribute('type', 'button');
					btn.setAttribute('class', 'btn');
					btn.addEventListener('click', this.onDeleted);
					btn.innerText = 'удалить';

					div.appendChild(p);
					div.appendChild(btn);
					fotos.appendChild(div);
				})

			}
		}
	}

	componentDidUpdate() {
		this.check();
	}


	setRating = (e) => {
		const rating = e.target.getAttribute('id');
		this.setState(({ ratingTech, ratingDriver }) => {

			if (rating <= 4) {
				let newRating = ratingTech.map((el, index) => {
					if (index <= rating) {
						return yellowStar;
					}
					return emptyStar;
				})

				return {
					ratingTech: newRating
				}
			} else {
				let newRating = ratingDriver.map((el, index) => {
					if (index + 5 <= rating) {
						return yellowStar;
					}
					return emptyStar;
				})

				return {
					ratingDriver: newRating
				}
			}
		})
	}

	hoverRating = (e) => {
		const currStar = e.target.getAttribute('id');
		let coll, stars, hoverStars;
		if (currStar <= 4) {
			coll = document.querySelectorAll('.tech .stars>img');
			stars = Array.from(coll);
			hoverStars = stars.filter((el) => {
				return el.getAttribute('id') <= currStar;
			})
		} else {
			coll = document.querySelectorAll('.driver .stars>img');
			stars = Array.from(coll);
			hoverStars = stars.filter((el) => {
				return el.getAttribute('id') + 5 <= currStar;
			})
		}

		hoverStars.forEach((el) => {
			el.setAttribute('src', yellowStar);
		})
	}

	unhoverRating = (e) => {
		const currStar = e.target.getAttribute('id');
		let coll, stars, hoverStars;
		if (currStar <= 4) {
			coll = document.querySelectorAll('.tech .stars>img');
			stars = Array.from(coll);
			hoverStars = stars.filter((el) => {
				return el.getAttribute('id') <= currStar;
			})
			hoverStars.forEach((el) => {
				el.setAttribute('src', this.state.ratingTech[el.getAttribute('id')]);
			})
		} else {
			coll = document.querySelectorAll('.driver .stars>img');
			stars = Array.from(coll);
			hoverStars = stars.filter((el) => {
				return el.getAttribute('id') + 5 <= currStar;
			})
			hoverStars.forEach((el) => {
				el.setAttribute('src', this.state.ratingDriver[el.getAttribute('id') - 5]);
			})
		}
	}

	getRatingTech() {
		return this.state.ratingTech.filter((el) => el == yellowStar).length;
	}

	getRatingDriver() {
		return this.state.ratingDriver.filter((el) => el == yellowStar).length;
	}

	closePopup() {
		const popup = document.getElementsByClassName('set-order-rating')[0].parentNode;
		popup.setAttribute('class', 'container close');
	}

	submit = (e) => {
		e.preventDefault();
		console.log('lol')
		this.closePopup();
		// this.props.props.history.push("/admin/messages");

		// fetch
	}

	render() {

		const { name, num, date } = this.props;

		return (
			<div className='set-order-rating disablePopup'>
				<p> УВАЖАЕМЫЙ {name} </p>
				<div className='ppp'>
					<p> Пожалуйста, оцените Ваш заказ </p><br />
					<p> №{num} от {date} </p>
				</div>
				<div className="comments">
					<div className="tech">
						<p> Спецтехника </p>
						<div className="stars">
							<img src={this.state.ratingTech[0]} alt="Star" id='0' onClick={this.setRating} onMouseOver={this.hoverRating} onMouseOut={this.unhoverRating} />
							<img src={this.state.ratingTech[1]} alt="Star" id='1' onClick={this.setRating} onMouseOver={this.hoverRating} onMouseOut={this.unhoverRating} />
							<img src={this.state.ratingTech[2]} alt="Star" id='2' onClick={this.setRating} onMouseOver={this.hoverRating} onMouseOut={this.unhoverRating} />
							<img src={this.state.ratingTech[3]} alt="Star" id='3' onClick={this.setRating} onMouseOver={this.hoverRating} onMouseOut={this.unhoverRating} />
							<img src={this.state.ratingTech[4]} alt="Star" id='4' onClick={this.setRating} onMouseOver={this.hoverRating} onMouseOut={this.unhoverRating} />
						</div>
						<textarea name="commentTech" form='rating-feedback' placeholder="Пожалуйста, оставьте комментарий..."></textarea>
					</div>

					<div className="driver">
						<p> Работа водителя </p>
						<div className="stars">
							<img src={this.state.ratingDriver[0]} alt="Star" id='5' onClick={this.setRating} onMouseOver={this.hoverRating} onMouseOut={this.unhoverRating} />
							<img src={this.state.ratingDriver[1]} alt="Star" id='6' onClick={this.setRating} onMouseOver={this.hoverRating} onMouseOut={this.unhoverRating} />
							<img src={this.state.ratingDriver[2]} alt="Star" id='7' onClick={this.setRating} onMouseOver={this.hoverRating} onMouseOut={this.unhoverRating} />
							<img src={this.state.ratingDriver[3]} alt="Star" id='8' onClick={this.setRating} onMouseOver={this.hoverRating} onMouseOut={this.unhoverRating} />
							<img src={this.state.ratingDriver[4]} alt="Star" id='9' onClick={this.setRating} onMouseOver={this.hoverRating} onMouseOut={this.unhoverRating} />
						</div>
						<textarea name="commentDriver" form='rating-feedback' placeholder="Пожалуйста, оставьте комментарий..."></textarea>
					</div>
				</div>
				<hr />
				<form onSubmit={this.submit} id='rating-feedback' name='ratingFeedbackForm'>
					<p> Добавить фото </p>
					<label htmlFor="addPhoto" className="btn label"><img src={addPhoto} /></label>
					<input type="file" name="photo" id="addPhoto" multiple accept="image/*,image/jpeg" onChange={this.imgPersonLoad} />
					<div className='foto'>
						<p style={{ display: "none" }}> Загруженные фотографии: </p>
						<div className="fotoName">

						</div>
					</div>
					<input type='hidden' name='ratingTech' value={this.getRatingTech()} />
					<input type='hidden' name='ratingDriver' value={this.getRatingDriver()} />
				</form>
				<hr />
				<button type='submit' className='btn' form='rating-feedback'> ОТПРАВИТЬ </button>
			</div>
		)
	}
}