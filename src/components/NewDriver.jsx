import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { addDriver } from "../redux/countersAC";

// import '../css/styles.css';
// import '../css/newDriver.css';
import trash from '../images/trash.png';


class NewDriver extends Component {

	state= {
		editOrAdd: "",
		trans: [
			// {
			// 	typeTech: 'Экскаватор гусенечный',
			// 	mark: 'МАЗ 12345',
			// 	number: '5555 AB-7',
			// 	driverId: 1
			// },
			// {
			// 	typeTech: 'Экскаватор гусенечный',
			// 	mark: 'МАЗ 56789',
			// 	number: '5555 AB-7',
			// 	driverId: 2
			// }
		]
	}

	createTransItem (trans) {
		return trans.map((item, index) => {
			const {id_autos, title_autos, brand_autos, number_autos} = item;
			return (

				<div key={index} id={id_autos} className='fix-trans-item'>
					<div className='info'>
						<p> {index+1} - {title_autos}</p>
						<p> {brand_autos} </p>
						<p> {number_autos} </p>
					</div>
					<img src={trash} alt="Trash" id={index} onClick={this.onDeleted}/>
				</div>
			)
		})
	}

	// удаляется из локального стэйта, потом просто перезаписывается Redux 
	onDeleted = (e) => { 
		// let delItem = Number(e.target.parentNode.getAttribute('id')); 
		let delItem = e.target.id;
		console.log(delItem) 

		this.setState(({trans}) => { 
			const before = trans.slice(0, delItem); 
			console.log(before) 
			const after = trans.slice(delItem+1); 
			console.log(after) 
			const newArray = [ ...before, ...after]; 
			console.log(newArray) 
			return { 
				trans: newArray 
			} 
		}) 
	} 

	submit = (e) => {
		e.preventDefault();

		// debugger
		// this.props.props.history.push("driversEditAddDelete"); // ------- не видит this !

		// fetch
		if(this.state.editOrAdd == 'add'){
			const that = this;

	        const url = 'http://178.159.45.189/api/rest-auth/user/drivers/'
	        var formElem = document.getElementById('driver')
	        var formData = new FormData(formElem)

	        var driver = {}

	        for (var [key, value] of formData.entries()) {

	            // с остальными не понятно что делать!
	            switch (key) {
	            	case 'first_name' : driver.first_name = value;
	            	case 'last_name' : driver.last_name = value;
	            	case 'patronymic' : driver.patronymic = value;
	            	case 'phone' : driver.phone = value;
	            }
	        }
	        console.log("driver:   ", driver)

	        fetch(url, {
	            method: "POST",
	            headers: {
	                "Authorization": 'JWT ' + that.props.store.user.token,
	                "Content-Type": "application/json"
	            }
	            ,body: JSON.stringify(driver),
	        }).then((response) => {
	                if (response.status !== 200) {
	                    console.log('Looks like there was a problem. Status Code: ' +
	                        response.status);
	                }
	                return response.json();
	            })
	            .then((data) => {

	                console.log("DATA: ", data);

	                // добавить в Redux созданного водителя
	          		// that.props.dispatch(addDriver(data));

			        // console.log('add in Redux')
	            })
		}
	}

	componentDidMount () {
		console.log(this.props.flag)
		let flagDr = (this.props.flag == -1) ? "add" : "edit"; 
		// console.log(flagDr) 
		this.setState({editOrAdd : flagDr});

		if(this.props.flag !== -1) {
			let index = this.props.drivers.findIndex((el) => el.id === this.props.flag);
			console.log(this.props.drivers[index]);

			const driver = this.props.drivers[index];

			document.querySelectorAll('#driver>input')[0].value = driver.first_name;
			document.querySelectorAll('#driver>input')[1].value = driver.last_name;
			document.querySelectorAll('#driver>input')[2].value = driver.patronymic;
			document.querySelectorAll('#driver>input')[3].value = driver.phone;
		}
	}


	render() {

		let transItems = null;

		// if(this.props.flag !== -1){
		// 	let transp = this.props.drivers[this.props.drivers.findIndex((el) => el.id === this.props.flag)].autos;
		// 	transItems = this.createTransItem(transp);
		// 	this.setState({trans: transp}) 
		// }

		return (
			<div className="main-container ">
				<div className="newDriver">
					<p> ВОДИТЕЛИ</p>
					<hr />	
						<form id="driver" onSubmit={this.submit}>
							<div className='radioB'>
								<div><input  type="radio" name="on_of" id="on" /><label htmlFor="on">Включить приложение</label></div>
								<div><input  type="radio" name="on_of" id="off" /><label htmlFor="off">Выключить приложение</label></div>
							</div>
							{/*// через innerText прописывать данные на редактирование*/}
							<input name="first_name" id="qwe" placeholder="Иван" type="text" required pattern="[А-Яа-я/-]{2,40}" title="только русские буквы"/>
							<input name="last_name" placeholder="Иванов" type="text" required pattern="[А-Яа-я/-]{2,40}" title="только русские буквы" />
							<input name="patronymic" placeholder="Иванович" type="text" required pattern="[А-Яа-я/-]{2,40}" title="только русские буквы" />
							<input name="phone" placeholder="+ 375 33 654 75 80" required title="375 29 123 45 67"
								pattern="^([\+]?375|(8[\s|\-]?0))[\s|\-]?(29|33|25|44|33|17)[\s|\-]?([0-9]{3}[\s|\-]?[0-9]{2}[\s|\-]?[0-9]{2}[\s|\-]?)$" />

							<div className="fix-transport ">
								<p>Закрепленный транспорт:</p>
								{transItems}
							</div>
							{/*// выводить список доступного транспорта, переделать генерирование options */}
								<select className="for-input for-input-width95" name="equipmentName" id="">
									<option value="1">Самосвал</option>
									<option value="2">Бус(грузовой)</option>
									<option value="3">Погрузчик</option>
									<option value="4">Бульдозер</option>
									<option value="5">Экскаватор(колесный)</option>
									<option value="6">Экскаватор снегоуборочный</option>
									<option value="7">Манипулятор</option>
									<option value="8">Эвакуатор</option>
									<option value="9">Автокран</option>
									<option value="10">Ассинезатор</option>
									<option value="11" >Добавьте транспорт</option>
								</select>

							<div className="buttons">
								<Link to={{ pathname: 'driversEditAddDelete' }} className="colorWhite" ><button className="btn ">Отмена</button></Link>
								<button type="submit" className="btn" form="driver" >Сохранить </button>
							</div>
						</form>
				</div>
			</div>
		)
	}

}

const mapStateToProps = function (state) {
	console.log(state, "             NewDriver")
    return {
        store: state.store,
        drivers: state.store.drivers,
        flag: state.store.driverAddOrEdit
    };
};

export default connect(mapStateToProps)(NewDriver);