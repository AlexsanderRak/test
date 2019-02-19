import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import emptyStar from '../images/emptyStar.svg'
import yellowStar from '../images/yellowStar.svg'

// import '../css/reviews.css'


export default class Reviews extends Component {
        state = {
            rating: 4.7,
            nameEquipment: "Экскаватор гусеничный",
            nameModel: "MAZ3556",
            comments: [
                {
                    date: '28.08.2018',
                    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit erat nec quam ornare, non tristique augue tempor.`
                },
                {
                    date: '28.08.2018',
                    comment: `Donec semper arcu sapien, tempor sagittis augue molestie nec. Morbi ut nibh nunc. Fusce et erat eu nisi ornare consectetur.
                        Aenean euismod orci ipsum, et viverra nisi condimentum vel. Pellentesque convallis lobortis ullamcorper.
                        Vivamus ac consequat risus. Vivamus fringilla id nisi in bibendum.`
                },
                {
                    date: '28.08.2018',
                    comment: `Aenean euismod orci ipsum, et viverra nisi condimentum vel. Pellentesque convallis lobortis ullamcorper.
                        Vivamus ac consequat risus. Vivamus fringilla id nisi in bibendum.`
                }
            ]

        }

    generateStars(rating) {
        let {generateStarRating} = this.props;
        const starsR = generateStarRating(rating);
        return starsR;
    }

    closePopup() {
        const popup = document.getElementsByClassName('container')[0];
        popup.setAttribute('class', 'container close');

    }

    render() {

        const id = this.props.id; // ------- для отправки запроса на сервер (для получения комментов?б рейтинга, модели, названия на определенную технику

        console.log(id)

        let stars = this.generateStars(Math.round(this.state.rating));

        var equipment = this.state.comments.map(function (item, index) {
            return (
                <div key={index} className="margin_top width-90 text-align-left reviews-items">
                    <p >{item.date}</p>
                    <p className="bold">{item.comment}</p>
                </div>
            )
        })

        return (
                <div className="container close">
                    <div className="popup-small reviews">
                        <div className="div-centr-flex margin-5 text-align-left rev">
                            <p><b>{this.state.nameEquipment}</b></p>
                            <p className="margin-bot-20"><b>{this.state.nameModel}</b></p>
                            <p className="margin-bot-20">{this.state.nameEquipment}</p>
                            <div className="star-wrap width-50 space-between margin-bot-20 stars">
                                <p className="bold">Рейтинг</p>
                                <div>
                                    <img className="cross" src={stars[0]} alt="Star" />
                                    <img className="cross" src={stars[1]} alt="Star" />
                                    <img className="cross" src={stars[2]} alt="Star" />
                                    <img className="cross" src={stars[3]} alt="Star" />
                                    <img className="cross" src={stars[4]} alt="Star" />
                                </div>
                            </div>
                        </div>
                        <div className="width-90 actual-equip-container-min reviews-reader comments">
                            <div className="div-centr-flex ">
                                {equipment}
                            </div>
                        </div>
                        <div className="logo-center reviews-btn">
                            <Link to={{ pathname: '/orderResponded' }} className="colorWhite" onClick={this.closePopup}><button className="btn">Назад</button></Link>
                        </div>

                    </div>
                </div>
        );
    }
}