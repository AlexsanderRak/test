import React, { Component } from 'react';
// import '../css/privacyPolicy.css';
// import '../css/main.css';
import { Link } from 'react-router-dom'

export default class PrivacyPolicy extends Component {

	render() {
		return (
			<div className='main-container'>
				<div className='privacy-policy'>
					<p> ПУБЛИЧНАЯ ОФЕРТА </p>
					<hr />
					<div className='policy'>
						<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit erat nec quam ornare, non tristique augue tempor.
						Donec semper arcu sapien, tempor sagittis augue molestie nec. Morbi ut nibh nunc. Fusce et erat eu nisi ornare consectetur.
						Aenean euismod orci ipsum, et viverra nisi condimentum vel. Pellentesque convallis lobortis ullamcorper.
						Vivamus ac consequat risus. Vivamus fringilla id nisi in bibendum. </p> <br />
						<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit erat nec quam ornare, non tristique augue tempor.
						Donec semper arcu sapien, tempor sagittis augue molestie nec. Morbi ut nibh nunc. Fusce et erat eu nisi ornare consectetur.
						Aenean euismod orci ipsum, et viverra nisi condimentum vel. Pellentesque convallis lobortis ullamcorper.
						Vivamus ac consequat risus. Vivamus fringilla id nisi in bibendum. </p> <br />
						<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit erat nec quam ornare, non tristique augue tempor.
						Donec semper arcu sapien, tempor sagittis augue molestie nec. Morbi ut nibh nunc. Fusce et erat eu nisi ornare consectetur.
						Aenean euismod orci ipsum, et viverra nisi condimentum vel. Pellentesque convallis lobortis ullamcorper.
						Vivamus ac consequat risus. Vivamus fringilla id nisi in bibendum. </p> <br />
						<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit erat nec quam ornare, non tristique augue tempor.
						Donec semper arcu sapien, tempor sagittis augue molestie nec. Morbi ut nibh nunc. Fusce et erat eu nisi ornare consectetur.
						Aenean euismod orci ipsum, et viverra nisi condimentum vel. Pellentesque convallis lobortis ullamcorper.
						Vivamus ac consequat risus. Vivamus fringilla id nisi in bibendum. </p> <br />
						<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit erat nec quam ornare, non tristique augue tempor.
						Donec semper arcu sapien, tempor sagittis augue molestie nec. Morbi ut nibh nunc. Fusce et erat eu nisi ornare consectetur.
						Aenean euismod orci ipsum, et viverra nisi condimentum vel. Pellentesque convallis lobortis ullamcorper.
						Vivamus ac consequat risus. Vivamus fringilla id nisi in bibendum. </p> <br />
						<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit erat nec quam ornare, non tristique augue tempor.
						Donec semper arcu sapien, tempor sagittis augue molestie nec. Morbi ut nibh nunc. Fusce et erat eu nisi ornare consectetur.
						Aenean euismod orci ipsum, et viverra nisi condimentum vel. Pellentesque convallis lobortis ullamcorper.
						Vivamus ac consequat risus. Vivamus fringilla id nisi in bibendum. </p> <br />
						<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit erat nec quam ornare, non tristique augue tempor.
						Donec semper arcu sapien, tempor sagittis augue molestie nec. Morbi ut nibh nunc. Fusce et erat eu nisi ornare consectetur.
						Aenean euismod orci ipsum, et viverra nisi condimentum vel. Pellentesque convallis lobortis ullamcorper.
						Vivamus ac consequat risus. Vivamus fringilla id nisi in bibendum. </p> <br />
						<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit erat nec quam ornare, non tristique augue tempor.
						Donec semper arcu sapien, tempor sagittis augue molestie nec. Morbi ut nibh nunc. Fusce et erat eu nisi ornare consectetur.
						Aenean euismod orci ipsum, et viverra nisi condimentum vel. Pellentesque convallis lobortis ullamcorper.
						Vivamus ac consequat risus. Vivamus fringilla id nisi in bibendum. </p> <br />
						<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit erat nec quam ornare, non tristique augue tempor.
						Donec semper arcu sapien, tempor sagittis augue molestie nec. Morbi ut nibh nunc. Fusce et erat eu nisi ornare consectetur.
						Aenean euismod orci ipsum, et viverra nisi condimentum vel. Pellentesque convallis lobortis ullamcorper.
						Vivamus ac consequat risus. Vivamus fringilla id nisi in bibendum. </p> <br />
						<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit erat nec quam ornare, non tristique augue tempor.
						Donec semper arcu sapien, tempor sagittis augue molestie nec. Morbi ut nibh nunc. Fusce et erat eu nisi ornare consectetur.
						Aenean euismod orci ipsum, et viverra nisi condimentum vel. Pellentesque convallis lobortis ullamcorper.
						Vivamus ac consequat risus. Vivamus fringilla id nisi in bibendum. </p> <br />
					</div>
					<hr />
					<div className='exceptions'>
						<p> Нажимая "Далее", вы принимаете условия публичной оферты </p>
					</div>
					<div className='buttons'>
						<Link className="colorWhite" to={{ pathname: '/' }}><button className="btn" type='button'> Назад </button></Link>
						<Link className="colorWhite" to={{ pathname: '/' }}><button className="btn" type='button'>* Далее </button></Link>
					</div>
				</div>
			</div>
		)
	}

}