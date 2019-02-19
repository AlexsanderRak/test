import React, { Component } from 'react'
import emptyStar from '../images/emptyStar.svg'
import yellowStar from '../images/yellowStar.svg'
import OrderRespondedHead from './OrderRespondedHead'
import OrderRespondedMid from './OrderRespondedMid'
import OrderRespondedBottom from './OrderRespondedBottom'
import ekskavator from '../images/ekskavator.png'
import search from '../images/search-interface-symbol.png' 
import Reviews from './Reviews.jsx'
import { Link } from 'react-router-dom'


// import '../css/orderResponded.css'

class OrderResponded extends Component {
   
        state = {
            numberOrder: "123456",
            equipment: [
                {
                    model:"Экскаватор гусеничный",
                    orderPrice: 80,
                    serviceСommission: 7,
                    distanceToPlace: 10.5,
                    year: 2018,
                    id: 1,
                    rating: 3.4,
                    img: ekskavator
                },
                {
                    model:"Экскаватор гусеничный",
                    orderPrice: 80,
                    serviceСommission: 7,
                    distanceToPlace: 10.5,
                    year: 2018,
                    id: 2,
                    rating: 0,
                    img: ekskavator
                },
                {
                    model:"Экскаватор гусеничный",
                    orderPrice: 80,
                    serviceСommission: 7,
                    distanceToPlace: 10.5,
                    year: 2018,
                    id: 3,
                    rating: 4.7,
                    img: ekskavator
                },
                {
                    model:"Экскаватор гусеничный",
                    orderPrice: 80,
                    serviceСommission: 7,
                    distanceToPlace: 10.5,
                    year: 2018,
                    id: 4,
                    rating: 3.5,
                    img: ekskavator
                },
                {
                    model:"Экскаватор гусеничный",
                    orderPrice: 80,
                    serviceСommission: 7,
                    distanceToPlace: 10.5,
                    year: 2018,
                    id: 5,
                    rating: 4,
                    img: ekskavator
                },
            ],
            currReviews: 1000
        }

    getId = (id) => {
        console.log(id)
    }

    generateStarRating(rating) {
        let arr = [];
        if(rating == 0){
            for(let i = 0; i < 5; i++) {
                arr.push(emptyStar);
            }
        } else {
            for(let i = 0; i < rating; i++) {
                arr.push(yellowStar);
            }

            for(let i = arr.length; i < 5; i++) {
                arr.push(emptyStar);
            }

        }
        return arr;
    }

    setCurrReviews = (e) => {
        let currElem = e.target.parentNode.id;
        console.log(currElem)
        this.setState({currReviews: currElem}) 
        console.log(this.state)
    }

    openPopup() {
        const popup = document.getElementsByClassName('container')[0];
        const popupParent = popup.parentNode;
        popup.style.height = popupParent.getBoundingClientRect().height + parseInt(getComputedStyle(popupParent).marginTop) + parseInt(getComputedStyle(popupParent).marginBottom) + 'px';
        popup.setAttribute('class', 'container open');
    }

    createOrderItem (orders) {
        return orders.map((order, index) => {
            const {model, orderPrice, serviceСommission, distanceToPlace, year, id, rating, img} = order;
            let ratingS = Math.round(rating);
            let stars = this.generateStarRating(ratingS);
            let checkboxId = `checkbox${id}`;
            return (
                <div key={id}>
                    <div className='orders-item'>
                        <div className='info'>
                            <input type="checkbox" id={checkboxId} />
                            <label htmlFor={checkboxId}><b>{model}</b></label>
                            <p> Сумма заказа: </p>
                            <b> {orderPrice} p. без НДС </b>
                            <p> Комиссия сервиса: </p>
                            <b> {serviceСommission} p. в т.ч. НДС </b>
                            <p> До места выполнения работ: </p>
                            <b> {distanceToPlace} км </b>

                        </div>
                        <div className='tech-description'>
                            <img src={ekskavator} alt="ekskavator"/>
                            <div className='stars' id={id} onClick={(e) => {this.setCurrReviews(e); this.openPopup()}}>
                                <img src={stars[0]} alt="Star" />
                                <img src={stars[1]} alt="Star" />
                                <img src={stars[2]} alt="Star" />
                                <img src={stars[3]} alt="Star" />
                                <img src={stars[4]} alt="Star" />
                            </div>
                            <b> {year} г.в. </b>
                        </div>
                        <div className="buttons">
                            <Link to={{ pathname: '/detailed' }} className="colorWhite"><button type="button" className="btn" onClick={() => this.getId(id)}>Подробнее</button></Link>
                        </div>
                    </div>
                    <hr />
                </div>
            )
        })
    }

    render() {
        const orders = this.state.equipment;
        const ordersItems = this.createOrderItem(orders);

        return (
            <div className="main-container">
                <Reviews id={this.state.currReviews} generateStarRating = {this.generateStarRating} />
                <div className="order-responded">
                    <p> ЗАКАЗ {this.state.numberOrder} </p>
                    <hr />
                    <div className="orders-responded">
                        {ordersItems}
                    </div>
                    <hr />
                    <div className='bottom'>
                        <p> Нажимая "Далее", Вы принимаете условия <span className="bottom-line cross"><Link to={{ pathname: 'privacyPolicy' }}>публичного договора</Link></span></p>
                        <div className="buttons">
                        <Link to={{ pathname: '/selectAddress' }} ><button className="btn">Назад </button></Link>
                        <Link to={{ pathname: '/paymentChoiceIndividual' }} ><button className="btn"> *Далее </button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderResponded
