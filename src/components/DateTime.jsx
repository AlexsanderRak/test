import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class DateTime extends Component {
    render() {
        return (
            <form>
                <p className="order-info-h">ВЫБЕРИТЕ ДАТУ И ВРЕМЯ</p>
                <div className="date-time-containtent">
                    <p className="p-title">Желаемая дата и время начала работ</p>
                    <div className="date-time-container ">
                        <div className="time-container">
                            <p className="pagging-0">Дата начала:</p>
                            <Link to={{ pathname: 'selectDate' }} className="colorWhite width-100">
                                <button className="dateStart margin-bot-0 button button-small-133  button-red textSmall" type="text" >День.Месяц.Год</button>
                            </Link>
                        </div>
                        <div className="time-container">
                            <p className="pagging-0 ">Время начала:</p>
                            <input name="startTime" className="button button-small-133  margin-top-10 time-input" type="time" />
                        </div>
                    </div>
                </div>
                <div className="date-time-containtent">
                    <p className="p-title">Предполагаемая дата и время окончания работ</p>
                    <div className="date-time-container">
                        <div className="time-container">
                            <p className="pagging-0">Дата окончания:</p>
                            <Link to={{ pathname: 'selectDate' }} className="colorWhite width-100 ">
                                <button className="dateEnd margin-bot-0 button button-small-133  button-red textSmall" type="text" >День.Месяц.Год</button>
                            </Link>
                        </div>
                        <div className="time-container">
                            <p className="pagging-0">Время окончания:</p>
                            <input name="endTime" className="button button-small-133  margin-top-10 time-input" type="time" />
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}