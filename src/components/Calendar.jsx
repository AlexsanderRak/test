import React, { Component } from 'react'
import Calendar from 'react-calendar'
// import '../css/calendar.css'
import { Link } from 'react-router-dom'

export default class RoundCalendar extends Component {
    state = {
        startDateSelected: 0,
        dayStart: null,
        dayEnd: null,
    }

    onClickDay(value) {
        let param;
        switch (this.state.startDateSelected) {
            case 0:
                param = 0
                break
            case 1:
                param = 1
                break
            default:
                param = 0
                break
        }
        this.makeDate(param, value)
    }

    makeDate(param, value) {
        // debugger
        if (!param) {   //если клик с первой кнопки - ставим дату начала
            this.setState({ dayStart: value.getDate() + '.' + (value.getMonth() + 1) + '.' + value.getFullYear() })
            let startDateButtonElem = document.getElementById('startDateButton')
            startDateButtonElem.classList.remove('inactive')  //активируем ссылку на компонент с датой и временем
        } else {    //если со второй - дату конца
            if (value.getFullYear() >= +this.state.dayStart.split('.')[2] &&
                value.getMonth() + 1 >= +this.state.dayStart.split('.')[1] &&
                value.getDate() >= +this.state.dayStart.split('.')[0]
            ) { //проверка валидности второй даты
                this.setState({ dayEnd: value.getDate() + '.' + (value.getMonth() + 1) + '.' + value.getFullYear() })
                let endDateButtonElem = document.getElementById('endDateLink')
                endDateButtonElem.classList.remove('inactive')  //активируем ссылку на компонент с датой и временем
            }
        }
    }

    doSelect() {
        let startDateButtonElem = document.getElementById('startDateButton')
        let endDateButtonElem = document.getElementById('endDateButton')
        if (this.state.dayStart) {
            if (this.state.dayEnd) {
            }
            startDateButtonElem.classList.add('none')
            endDateButtonElem.classList.remove('none')
            this.setState({ startDateSelected: 1 })
        } else {
            alert('Сначала выберите дату начала работ')
        }
    }

    render() {
        return (
            <div>
                <p className="order-info-h">выберите дату и время</p>
                <div>
                    <div className="startEndDate-container">
                        <span>Дата начала :</span>
                        <span><strong>{(this.state.dayStart) ? this.state.dayStart + '' : 'Не выбрана'}</strong></span>
                    </div>
                    <div className="startEndDate-container">
                        <span>Дата окончания :</span>
                        <span><strong>{(this.state.dayEnd) ? this.state.dayEnd + '' : 'Не выбрана'}</strong></span>
                    </div>
                </div>
                <Calendar onClickDay={this.onClickDay.bind(this)} />
                <div onClick={this.doSelect.bind(this, false)} id="startDateButton" className="btn btn-calendar inactive">{(this.state.dayStart) ? <span>Выбрать дату начала работ</span> : <span>Не выбрана дата начала работ</span>}</div>
                <Link id="endDateLink" className="inactive" to={{ pathname: '/customer/createorder/selecttime' }}>
                    <div onClick={this.props.updateData.bind(this)} id="endDateButton" className="btn btn-calendar none">{(this.state.dayEnd) ? <span>Выбрать дату окончания работ</span> : <span>Не выбрана дата окончания работ</span>}</div>
                </Link>
            </div>
        )
    }
}