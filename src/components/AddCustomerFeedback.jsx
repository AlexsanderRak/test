import React, {Component} from 'react';
// import '../css/addCustomerFeedback.css';
// import '../css/main.css';
import emptyStar from '../images/emptyStar.svg';
import yellowStar from '../images/yellowStar.svg';
import addPhoto from '../images/addFile.png';
import { Link } from 'react-router-dom'

export default class AddCustomerFeedback extends Component {

	state = {
		stars: [emptyStar, emptyStar, emptyStar, emptyStar, emptyStar],
		nameImgLoad: []
	}

	imgPersonLoad = (e) => {
        let images = Array.from(e.target.files);
        this.setState(({nameImgLoad}) => {
			const newArray = [ ... nameImgLoad, ... images];
			return {
				nameImgLoad: newArray
			}
		})

    }

    onDeleted = (e) => {
    	let delItem = Number(e.target.parentNode.getAttribute('id'));

    	this.setState(({nameImgLoad}) => {
			const before = nameImgLoad.slice(0, delItem);
			const after = nameImgLoad.slice(delItem+1);
			const newArray = [ ...before, ...after];
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
    		
			if(this.state.nameImgLoad.length) { 
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

		this.setState(({stars}) => {
			let newRating = stars.map((el, index) => {
				if(index <= rating) {
					return yellowStar;
				}
				return emptyStar;
			})

			return {
				stars: newRating
			}
		})
	}

	hoverRating = (e) => {
		const currStar = e.target.getAttribute('id');
		const coll = document.querySelectorAll('.stars>img');
		const stars = Array.from(coll)
		const hoverStars = stars.filter((el) => {
			return el.getAttribute('id') <= currStar;
		})
		hoverStars.forEach((el) => {
			el.setAttribute('src', yellowStar);
		})
	}

	unhoverRating = (e) => {
		const currStar = e.target.getAttribute('id');
		const coll = document.querySelectorAll('.stars>img');
		const stars = Array.from(coll)
		const hoverStars = stars.filter((el) => {
			return el.getAttribute('id') <= currStar;
		})
		hoverStars.forEach((el) => {
			el.setAttribute('src', this.state.stars[el.getAttribute('id')]);
		})
	}

	getRating() {
		return this.state.stars.filter((el) => el == yellowStar).length;
	}

	submit = (e) => {
		e.preventDefault();
		this.props.props.history.push("/admin/messages");

		// fetch
	}

	render() {
		const {client} = this.props;
		// console.log(this.props);

		return (
			<div className = 'main-container'>
				<div className='add-customer-feedback'>
					<p> НАПИШИТЕ ОТЗЫВ О КЛИЕНТЕ </p>
					<p> {client} </p>
					<hr />
					<div className="stars">
                        <img src={this.state.stars[0]} alt="Star" id='0' onClick={this.setRating} onMouseOver={this.hoverRating} onMouseOut={this.unhoverRating} />
                        <img src={this.state.stars[1]} alt="Star" id='1' onClick={this.setRating} onMouseOver={this.hoverRating} onMouseOut={this.unhoverRating} />
                        <img src={this.state.stars[2]} alt="Star" id='2' onClick={this.setRating} onMouseOver={this.hoverRating} onMouseOut={this.unhoverRating} />
                        <img src={this.state.stars[3]} alt="Star" id='3' onClick={this.setRating} onMouseOver={this.hoverRating} onMouseOut={this.unhoverRating} />
                        <img src={this.state.stars[4]} alt="Star" id='4' onClick={this.setRating} onMouseOver={this.hoverRating} onMouseOut={this.unhoverRating} />
                    </div>
                    <textarea name="customerFeedbackBody" form='customer-feedback' placeholder="Введите текст сообщения..."></textarea>
                    <hr />
                    <form onSubmit={this.submit} id='customer-feedback' name='customerFeedbackForm'>
                    	<p> Добавить фото: </p>
                    	<label htmlFor="addPhoto" className="btn label"><img src={addPhoto} /></label>
                    	<input type="file" name="photo" id="addPhoto" multiple accept="image/*,image/jpeg" onChange={this.imgPersonLoad} />
                    	<div className='foto'>
                    		<p style={{ display: "none" }}> Загруженные фотографии: </p>
                    		{/*<label>{this.state.nameImgLoad}</label>*/}
                    		<div className="fotoName">

                    		</div>
                    	</div>
                    	
						<input type='hidden' name='rating' value={this.getRating()}/>
					</form>
					<hr />
					<div className='buttons'>
						<Link to={{ pathname: '/admin/historyOfOrders' }} ><button type='button' className='btn' > Назад </button></Link>
						<button type='submit' className='btn' form='customer-feedback'> Отправить </button>
					</div>
				</div>
			</div>
		)
	}
}