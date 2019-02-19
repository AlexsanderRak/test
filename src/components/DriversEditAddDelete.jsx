import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { setDriverAddEditFlag, getDriversList, deleteDriver } from "../redux/countersAC";

// import '../css/driversEditAddDelete.css';
// import '../css/main.css';

class DriversEditAddDelete extends Component {

	getId = (e) => {
		return e.target.parentNode.parentNode.getAttribute('id');
	}

	getEditId = (e) => {
		let id = e.target.parentNode.parentNode.parentNode.getAttribute('id');
		this.props.dispatch(setDriverAddEditFlag(Number(id)));
		return id;
	}

	getDrivers = () => {
         // e.preventDefault();
        const that = this  // сохраняет контекст?!

        const url = 'http://178.159.45.189/api/rest-auth/user/drivers/'
       
        // for (var [key, value] of formData.entries()) {
        //     if (value[0] == '+') {
        //         user.phone = value
        //         console.log(key)
        //         console.log("THIS IS TELEFHONE")
        //     } else if (key == 'password') {
        //         user.password = value
        //         console.log(key)
        //         console.log("THIS IS PASSWORD")
        //     } else {
        //         user.email = value
        //         console.log(key)
        //         console.log("THIS IS EMAIL")
        //     }
        // }
        // console.log("USER:   ", user)
        // debugger
        console.log(that.props.store.token)
        fetch(url, {
            method: "GET",
            headers: {
                "Authorization": 'JWT ' + that.props.store.user.token,
                "Content-Type": "application/json"
            }
            // ,body: JSON.stringify(user),
        }).then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                }
                console.log(response)
                return response.json();
            })
            .then(function (data) {
                // debugger
                that.props.dispatch(getDriversList(data)); // записываю в глобальный стэйт
                console.log("DATA: ", data);
                // let nextLocation = data.user.user_type == 3 ? '/admin/activeOrders' : '/createOrder/selectDate' ;
                // that.props.history.push(nextLocation) // Переход на страницы админ/пользователь 
            })
        // .catch(function (err) {
        //     console.log('Fetch Error :-S', err);
        // });

    }

	submit = (e) => {
		this.props.props.history.push("/admin/driversEditAddDelete");
		const id = this.getId(e);

		console.log(id)

        const that = this

        const url = `http://178.159.45.189/api/rest-auth/user/drivers/${id}`;
        const url2 = 'http://178.159.45.189/api/rest-auth/user/drivers/';
        const token = that.props.store.user.token;
        console.log(token)

        fetch(url, {
            method: "DELETE",
            headers: {
                "Authorization": 'JWT ' + token
                ,"Content-Type": "application/json"
            }
        }).then((response) => {
              	
              		console.log(response)
                	console.log('delete in DB')
	        
			        if(response.status === 200 || response.status === 204 ) {
			        	
			        	that.props.dispatch(deleteDriver(Number(id)));

			        	console.log('delete in Redux')


			        } else {
			        	console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
			        }
            })
	}

	setStateAddNewDriver = (e) => {
		const flag = -1;
		this.props.dispatch(setDriverAddEditFlag(flag));
	}


	createDriverItem (drivers) {
		console.log(drivers)
		return drivers.map((driver) => {
			const {last_name, first_name, patronymic, autos, stateNumber, phone, id} = driver; // пофиксить транспорт!!!!!
			return (

				<div key={id} id={id} className='driver-item'>
					<p> Имя: <b> {last_name} {first_name} {patronymic} </b></p> 
					<p> Закрепленный транспорт: <b> {autos.title_autos} </b> </p> 
					<p> Гос. номер: <b> {autos.number_autos} </b> </p> 
					<p> Номер телефона: <b> {phone} </b> </p> 
					<div className='buttons'>
						<Link to={{ pathname: 'newDriver' }} className="colorWhite" ><button type='button' className='btn' onClick={this.getEditId}>Редактировать</button></Link>
						<button type='button' className='btn' onClick = {this.submit}> Удалить </button>
					</div>
					<hr />
				</div>
			)
		})
	}

	componentDidMount() {
		this.getDrivers();
	}

	render() {
		const drivers = this.props.drivers;
		const driverItems = this.createDriverItem(drivers);

		return (
			<div className = 'main-container'>
				<div className = 'drivers-edit-add-delete'>
					<p> ВОДИТЕЛИ </p>
					<hr/>
					<div className='drivers'>
						<Link to={{ pathname: 'newDriver' }} className="colorWhite" ><button type='button' className='btn' onClick={this.setStateAddNewDriver}>Добавить водителя</button></Link>
						{driverItems}
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	console.log(state, "             Driver")
    return {
        store: state.store,
        drivers: state.store.drivers
    };
};

export default connect(mapStateToProps)(DriversEditAddDelete);