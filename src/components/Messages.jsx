import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// import '../css/Messages.css'

export default class Messages extends Component {
    orders = [
        {
            number_of_order: 1234,
            extension_time: "14:00-18:00",
            date: "09:30 / 01.09.2015",
            address: "г. Минск, ул. Корвата, 15",
            viewed: false 
        },
        {
            number_of_order: 1234,
            extension_time: "14:00-18:00",
            date: "09:30 / 01.09.2015",
            address: "г. Минск, ул. Корвата, 15",
            viewed: false 
        },
        {
            number_of_order: 1234,
            extension_time: "14:00-18:00",
            date: "09:30 / 01.09.2015",
            address: "г. Минск, ул. Корвата, 15",
            viewed: true 
        },
        {
            number_of_order: 1234,
            extension_time: "14:00-18:00",
            date: "09:30 / 01.09.2015",
            address: "г. Минск, ул. Корвата, 15",
            viewed: true 
        },
        {
            number_of_order: 1234,
            extension_time: "14:00-18:00",
            date: "09:30 / 01.09.2015",
            address: "г. Минск, ул. Корвата, 15",
            viewed: true 
        },
        {
            number_of_order: 1234,
            extension_time: "14:00-18:00",
            date: "09:30 / 01.09.2015",
            address: "г. Минск, ул. Корвата, 15",
            viewed: true 
        }
    ]

    messages = this.orders.map((item, index) => {
        const {number_of_order, extension_time, date, address, viewed} = item;
        const classname = `messages-list-message ${viewed ? `viewed` : `not-viewed`}`;
        return (
            <div key={ index } className={classname}  id={number_of_order}>
                 <div className="info">
                     <div className="info-left">
                         <p className="alert">Сообщение: <span>Заказ № {number_of_order} продлен. Время продления {extension_time}</span></p>
                         <p className="date">Дата и время заказа: <span>{date}</span></p>
                         <p className="address">Адрес заказа: <span>{address}</span></p>
                     </div>
                     <div className="info-right">
                         <p className="state-of-message"><span>{ viewed ? "Просмотрен": "Не просмотрен"}</span></p>
                     </div>
                 </div>
                 <Link to={{ pathname: ''}}><input type="submit" className="btn" value="Показать на карте" /></Link>
             </div>
        );
    })

    render() {
        return (
            <div className="messages-container">
                <form action="" className="messages-form" onsubmit="visibleQuestionForm(false, 'messages-container')">
                    <div className="messages-tittle">
                        <h3>Сообщения</h3>
                    </div>
                    <div className="messages-list">
                        { this.messages }
                    </div>
                </form>
            </div>
        )
    };
}