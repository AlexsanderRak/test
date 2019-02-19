import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTransportList } from "../redux/countersAC";
// import '../css/driversEditAddDelete.css';
// import '../css/main.css';
// import '../css/adminka.css';


class TransportEditAddDelete extends Component {
	getId = (e) => {
		return e.target.parentNode.parentNode.getAttribute('id');
	}


	getEditId = (e) => {
		console.log(e.target.parentNode.parentNode.parentNode.getAttribute('id'))
		return e.target.parentNode.parentNode.parentNode.getAttribute('id');
	}

	getTransport = () => {
        const that = this;
        const url = 'http:\/\/178.159.45.189/api/technics/autos/';
        fetch(url, {
            method: "GET",
            headers: {
                "Authorization": 'JWT ' + that.props.store.user.token,
                "Content-Type": "application/json"
            }
        }).then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                }
                return response.json();
            })
            .then(function (data) {
                that.props.dispatch(getTransportList(data)); // записываю в глобальный стэйт
                console.log("DATA: ", data);
            })
    }

	submit = (e) => {
		// e.preventDefault();
		this.props.props.history.push("/admin/transportEditAddDelete");
		const id = this.getId(e);

		console.log(id)

		// fetch
	}

	componentDidMount() {
		this.getTransport();
	}


	createTransportItem(transports) {
		if (!transports) return;
		return transports.map((transport) => {
			const { category, first_name_driver, last_name_driver, patronymic_driver, phone_driver, year, model, number, id } = transport;
			console.log(transport);
			return (
				<div key={id} id={id} className='driver-item'>
					<p> Имя: <b> { first_name_driver } </b></p>
					<p> Закрепленный транспорт: <b> { } </b> </p>
					<p> Гос. номер: <b> {number} </b> </p>
					<p> Номер телефона: <b> {phone_driver} </b> </p>
					<div className='buttons'>
						<Link to={{ pathname: 'newTransport' }} className="colorWhite" ><button type='button' className='btn' onClick={() => this.getEditId}>Редактировать</button></Link>
						<button type='button' className='btn' onClick = {this.submit}> Удалить </button>
					</div>
					<hr />
				</div>
			)
		})
	}

	render() {
		console.log(this.props);
		const transports = this.props.transports;
		const transportItems = this.createTransportItem(transports);

		return (
			<div className='main-container'>
				<div className='drivers-edit-add-delete'>
					<p> Транспорт </p>
					<hr />
					<div className='drivers div-column-transport '>
						<Link to={{ pathname: 'newTransport' }} className="colorWhite" ><button type='button' className='btn' >Добавить транспорт</button></Link>
						<div className='selectTech'>
							<select className="for-input for-input-width95" name="equipmentName" id="">
								<option value="1" default>Категория:</option>
								<option value="2">Самосвал</option>
								<option value="3">Бус(грузовой)</option>
								<option value="4">Погрузчик</option>
								<option value="5">Бульдозер</option>
								<option value="6">Экскаватор(колесный)</option>
								<option value="7">Экскаватор снегоуборочный</option>
								<option value="8">Манипулятор</option>
								<option value="9">Эвакуатор</option>
								<option value="10">Автокран</option>
								<option value="11">Ассинезатор</option>
								<option value="12" >Добавьте транспорт</option>
							</select>
							<select className="for-input for-input-width95" name="equipmentName" id="">
								<option value=" ">Тип:</option>
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
						</div>

						{transportItems}
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = function (state) { 
	console.log(state, " transport") 
	return { 
		store: state.store, 
		transports: state.store.transports
	}; 
};

export default connect(mapStateToProps)(TransportEditAddDelete);