import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import smallMap from '../images/smallMap.jpeg'
// import '../css/orderInfoAddress.css'

class OrderInfoAddress extends Component {

    render() {
        return (
            <Link className="order-info order-info-address" to={{ pathname: '/selectAddress' }} >
                <div >
                    <p className="order-info-h">ВЫБЕРИТЕ МЕСТО</p>
                    <p>Отметьте место испольнения на карте</p>
                    <div className="map-wrap">
                        <div id="smallMap" style={{ width: 100 + '%', height: 100 + '%' }}>
                            <img src={smallMap} width='100%' alt="yandex map" />
                        </div>
                    </div>
                    <input className="input-light" placeholder="Поиск адреса" type="text" id="addressInput" />

                </div>
            </Link>
        )
    }
}

export default OrderInfoAddress