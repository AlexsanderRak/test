import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import car from '../images/car.png'
// import '../css/styles.css';
// import '../css/newTransport.css';

export default class NewTransport extends Component {

	render() { 
		
		return (
			<div className="main-container ">
				<div className="main-white">
					<div className="text-top-white"><h2><strong>Транспорт</strong></h2></div>
					<div className="div-row-center">
						<div className="div-column margin-right-80 left">
							<div className="img" ><img width="155px" src={car} alt="" /></div>
							<div className="div-centr-flex "><span>Добавить фото:</span></div>
							<div>
								<div className="button button-small button-red">
									<label htmlFor="image" className="cross"><div><svg width="33" height="30" viewBox="0 0 33 39" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M4 18.25V31.25C4 32.112 4.34241 32.9386 4.9519 33.5481C5.5614 34.1576 6.38805 34.5 7.25 34.5H26.75C27.612 34.5 28.4386 34.1576 29.0481 33.5481C29.6576 32.9386 30 32.112 30 31.25V18.25"
											stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M23.5 8.5L17 2L10.5 8.5" stroke="white" strokeWidth="2" strokeLinecap="round"
											strokeLinejoin="round" />
										<path d="M17 2V23.125" stroke="white" strokeWidth="2" strokeLinecap="round"
											strokeLinejoin="round" />
									</svg></div>
										<input type="file"  style={{ display: "none" }} id="image" />
									</label>
								</div>
							</div>
						</div>
						<div className="div-column width-50 right">
							<form className="form-transport">
								<select required>
									<option value=" ">Категория</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
								</select>

								<select required>
									<option value=" ">Марка</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
								</select>
								<span >Гос. номер:</span>
								<input className="for-input" type="text" placeholder="№12345" required />
								<div className="div-row ">
									<div className="top-row">
										<span>Масса:</span>
											<select required>
												<option value=" "></option>
												<option>1</option>
												<option>2</option>
											</select>
									</div>
									<div className="top-row">
										<span>Модель:</span>
											<select required>
												<option value=" "></option>
												<option>1</option>
												<option>2</option>
											</select>
									</div>
								</div>
								<div className="div-row">
									<div className="bottom-row">
										<span>Объем ковша, м3:</span>
											<select required>
												<option value=" "></option>
												<option>1</option>
												<option>2</option>
											</select></div>
									<div className="bottom-row">
										<span>Глубина копания, м</span>
											<select required>
												<option value=" "></option>
												<option>1</option>
												<option>2</option>
											</select>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="btn-container">
						<button className="button button-small button-red "><Link to={{ pathname: 'transportEditAddDelete' }} className="colorWhite" >Отмена</Link></button>
						<button type="submit" className="button button-small button-red" form="form-transport" ><Link to={{ pathname: 'transportEditAddDelete' }} id='disabledlink' className='disabled-link colorWhite'>Сохранить </Link></button>
					</div>
				</div>
			</div>
		)
	}

}