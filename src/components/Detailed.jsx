import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import emptyStar from '../images/emptyStar.svg'
import yellowStar from '../images/yellowStar.svg'
// import ekskavator from '../images/ekskavator.png'
// import '../css/detailed.css'

export default class Detailed extends Component {

    // state = {
    //      equipment: [
    //             {
    //                 orderNumber: "123456",
    //                 model: "Экскаватор гусеничный",
    //                 orderPrice: 80,
    //                 serviceСommission: 7,
    //                 distanceToPlace: 10.5,
    //                 year: 2018,
    //                 rating: 3.7,
    //                 stars: [yellowStar, yellowStar, yellowStar, yellowStar, emptyStar],
    //                 id: 1,
    //                 img: ekskavator,
    //                 detailed: { bucketCapacity: "0.86", minimumDepth: "5", dispatcher: "Куликовская Мария Ивановна", tel: "80291234567" }
    //             },
    //         ]
    // }



    // можно вынести в Main ........... наверное ...............(повторяется в orderResponded, мб еще где)
    generateStarRating (rating) {
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

    generateStars(rating) {
        let {generateStarRating} = this.props;
        const starsR = this.generateStarRating(rating);
        return starsR;
    }

    render() {
        const {orderPrice, serviceСommission, orderNumber, distanceToPlace, detailed, img, rating, year} = this.props.data[0];
        // console.log(this.props.data[0].detailed)           
        let stars = this.generateStars(Math.round(rating));

        return (
            <div className="main-container">
                <div className="detailed">
                        <p>ЗАКАЗ {orderNumber}</p>
                        <hr />
                        <div className="desc1">
                            <div className="info">
                                        <p>Сумма Заказа </p>    
                                        <b>{orderPrice + "р."} без НДС</b>                                    
                                        <p>Коммисия сервиса  </p>
                                        <b> {serviceСommission + "р."} в т.ч. НДС</b>
                                        <p>До места выполнения работ</p>
                                        <b >{distanceToPlace} км</b>
                            </div>
                            <div className="imgRating">
                                    <img src={img} alt="ekskavator" />
                                    <div className="stars">
                                        <img src={stars[0]} alt="Star" />
                                        <img src={stars[1]} alt="Star" />
                                        <img src={stars[2]} alt="Star" />
                                        <img src={stars[3]} alt="Star" />
                                        <img src={stars[4]} alt="Star" />
                                    </div>
                                    <b>{year}  г.в.</b>
                            </div>
                        </div>
                        <hr />
                        <div className="desc2">
                            <p>Объём ковша: <b>{detailed.bucketCapacity} м3</b></p>
                            <p>Минимальная глубина копания: <b>{detailed.minimumDepth} м</b></p>
                            <p>Диспетчер: <b>{detailed.dispatcher}</b></p>
                            <p>Тел: <b>{detailed.tel}</b></p>
                        </div>

                    <Link to={{ pathname: '/orderResponded' }} className="colorWhite" ><button  className="btn">Назад</button></Link>

                </div>
            </div>
        );
    }
}