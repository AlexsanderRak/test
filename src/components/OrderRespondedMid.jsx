import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import search from '../images/search-interface-symbol.png'
import ekskavator from '../images/ekskavator.png'

// import '../css/styles.css'

class OrderRespondedMid extends Component {
    constructor() {
        super()

    }
    render() {
        var data = this.props.data;
        var equipment = data.map(function (item, index) {
            return (
                <div className="div-row bottom-line" key={index}>
                    <div className="space-between bold">
                        <div>
                            <div className="margin-5">
                                <input type="checkbox" id="checkbox1" />
                                <label htmlFor="checkbox1" className="margin-5">{item.model}</label>
                            </div>
                            <div className="div-column flex-statr">
                                <label className="margin-5">Сумма Заказа</label>
                                <label className="margin-5">{item.orderPrice + "р."}<label>без НДС</label></label>
                                <label className="margin-5">Коммисия сервиса</label>
                                <label className="margin-5">{item.serviceСommission + "р."}<label>в т.ч. НДС</label></label>
                                <label className="margin-5">До места выполнения работ</label>
                                <label className="margin-5">{item.distanceToPlace}<label>км</label></label>
                            </div>
                        </div>
                        <div className="div-column">
                            <Link to={{ pathname: '/reviews' }} className="colorWhite" >
                                <img src={ekskavator} alt="ekskavator" />
                                <div className="div-row margin-top-bot-5 cross">
                                    <img src={item.stars[0]} alt="Star" />
                                    <img src={item.stars[1]} alt="Star" />
                                    <img src={item.stars[2]} alt="Star" />
                                    <img src={item.stars[3]} alt="Star" />
                                    <img src={item.stars[4]} alt="Star" />
                                </div>
                            </Link>
                            <label className="margin-top-bot-5">{item.year + "г.в."}</label>
                        </div>
                        <button type="button" className="button button-small button-red margin-5"><Link to={{ pathname: '/detailed' }} className="colorWhite" ><img className="pagging_right" src={search} alt="search"></img>Подробнее</Link></button>
                    </div>
                </div>
            )
        })

        return (
            <div>
                {equipment}
            </div>
        );
    }
}

export default OrderRespondedMid