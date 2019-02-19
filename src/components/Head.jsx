import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import headLogo from '../images/head-logo.png'
import { popUp } from "../redux/countersAC";
import showHidePopups from '../js/showHidePopups'
import { connect } from 'react-redux';



class Head extends Component {

    showMenu = () => {
        const panel = document.getElementsByClassName('hamburger')[0].parentNode
        if (!panel.classList.contains('show')) {
            panel.classList.add('show');
            panel.classList.remove('hide');
        }
        else {
            panel.classList.remove('show');
            panel.classList.add('hide');
        }
    }

    render() {
        return (
            <div className="header fix">
                <div className="logo-container">
                    <img width="105" height="100" src={headLogo} alt="" />
                    <p className="logo-title">
                        <strong>ЛУЧШИЙ СЕРВИС ДЛЯ АРЕНДЫ</strong><br />
                        <span><strong>спецтехники и грузового автотранспорта</strong></span>
                    </p>
                </div>
                <div className="navPanel2 hide">
                    <button className="btn nav-but hamburger" onClick={this.showMenu}><i className="fas fa-bars"></i> Меню</button>
                    <Link to={{ pathname: '/customer/profile' }} className="btn nav-but" >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 15.75V14.25C15 13.4544 14.6839 12.6913 14.1213 12.1287C13.5587 11.5661 12.7956 11.25 12 11.25H6C5.20435 11.25 4.44129 11.5661 3.87868 12.1287C3.31607 12.6913 3 13.4544 3 14.25V15.75"
                                stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9 8.25C10.6569 8.25 12 6.90685 12 5.25C12 3.59315 10.6569 2.25 9 2.25C7.34315 2.25 6 3.59315 6 5.25C6 6.90685 7.34315 8.25 9 8.25Z"
                                stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Профиль</span>
                    </Link>
                    <Link to={{ pathname: '' }} className="btn nav-but" >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.75 16.5C7.16421 16.5 7.5 16.1642 7.5 15.75C7.5 15.3358 7.16421 15 6.75 15C6.33579 15 6 15.3358 6 15.75C6 16.1642 6.33579 16.5 6.75 16.5Z"
                                stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15 16.5C15.4142 16.5 15.75 16.1642 15.75 15.75C15.75 15.3358 15.4142 15 15 15C14.5858 15 14.25 15.3358 14.25 15.75C14.25 16.1642 14.5858 16.5 15 16.5Z"
                                stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M0.75 0.75H3.75L5.76 10.7925C5.82858 11.1378 6.01643 11.448 6.29066 11.6687C6.56489 11.8895 6.90802 12.0067 7.26 12H14.55C14.902 12.0067 15.2451 11.8895 15.5193 11.6687C15.7936 11.448 15.9814 11.1378 16.05 10.7925L17.25 4.5H4.5"
                                stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Заказы</span>
                    </Link>
                    <Link to={{ pathname: '/customer/createorder/selectdate' }} className="btn nav-but" >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.75 16.5C7.16421 16.5 7.5 16.1642 7.5 15.75C7.5 15.3358 7.16421 15 6.75 15C6.33579 15 6 15.3358 6 15.75C6 16.1642 6.33579 16.5 6.75 16.5Z"
                                stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15 16.5C15.4142 16.5 15.75 16.1642 15.75 15.75C15.75 15.3358 15.4142 15 15 15C14.5858 15 14.25 15.3358 14.25 15.75C14.25 16.1642 14.5858 16.5 15 16.5Z"
                                stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M0.75 0.75H3.75L5.76 10.7925C5.82858 11.1378 6.01643 11.448 6.29066 11.6687C6.56489 11.8895 6.90802 12.0067 7.26 12H14.55C14.902 12.0067 15.2451 11.8895 15.5193 11.6687C15.7936 11.448 15.9814 11.1378 16.05 10.7925L17.25 4.5H4.5"
                                stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Добавить заказ</span>
                    </Link>
                    <Link to={{ pathname: '' }} className="btn nav-but" >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5 9H12L10.5 11.25H7.5L6 9H1.5" stroke="white" strokeLinecap="round"
                                strokeLinejoin="round" />
                            <path d="M4.0875 3.8325L1.5 9V13.5C1.5 13.8978 1.65804 14.2794 1.93934 14.5607C2.22064 14.842 2.60218 15 3 15H15C15.3978 15 15.7794 14.842 16.0607 14.5607C16.342 14.2794 16.5 13.8978 16.5 13.5V9L13.9125 3.8325C13.7883 3.58259 13.5969 3.37228 13.3597 3.22521C13.1226 3.07814 12.8491 3.00015 12.57 3H5.43C5.15094 3.00015 4.87745 3.07814 4.64028 3.22521C4.40312 3.37228 4.21168 3.58259 4.0875 3.8325V3.8325Z"
                                stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Архив</span>
                    </Link>
                    {/* <button */}
                    <button onClick={this.props.showFeedback.bind(this)}
                        className="colorWhite btn nav-but">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0)">
                                <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                                    stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 12V9" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 7L9 6" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="18" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span className="colorWhite">Помощь</span>
                    </button>
                    <Link to={{ pathname: '' }} className="btn nav-but" >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.75 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H6.75"
                                stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 12.75L15.75 9L12 5.25" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.75 9H6.75" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="colorWhite">Выход</span>
                    </Link>
                </div>
            </div>
        )
    }
}

// export default Head



const mapStateToProps = function (state) {
    // console.log(state.counter, "Authorization")
    return {
        // из раздела Redux с именем counter свойство cnt будет доступно
        // данному компоненту как this.props.cnt
        equipCatalog: state.store.equipCatalog,
    };
};

// присоединяем (connect) компонент к хранилищу Redux
// export default OrderInfoType;
export default connect(mapStateToProps)(Head);