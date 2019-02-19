import React, { Component } from 'react'

class ProgressBar extends Component {
    constructor() {
        super()

    }
    render() {
        return (
            <div className="order-progress-bar">
                <div className="progress-step ">
                    <div className="red-point"></div>
                    <p>Выбор техники</p>
                </div>
                <div className="progress-step">
                    <div className="red-point"></div>
                    <p>Выбор даты и времени</p>
                </div>
                <div className="progress-step">
                    <div className="red-point"></div>
                    <p>Выбор места выполнения работ</p>
                </div>
                <div className="progress-step">
                    <div className="red-point"></div>
                    <p>Подтверждение заявки</p>
                </div>
                <div className="progress-step">
                    <div className="red-point"></div>
                    <p>Ожидание техники</p>
                    <div className="red-point"></div>
                </div>
            </div>
        )
    }
}

export default ProgressBar