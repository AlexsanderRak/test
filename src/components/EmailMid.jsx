import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import '../css/email.css'

class EmailMid extends Component {
    nextPage(event) {
        event.preventDefault();
        var that = this
        that.props.history.push('/phoneSuccessfulExecution') // Переход на страницы Email
    }
    render() {
        return (
            <div className="forform">
                <div>
                    <form onSubmit={this.nextPage.bind(this)} id="test5">
                        <div className="">
                            <input className="inp-my width-100  too div-password-my button-big-my button-gray" name="" type="text" title="name@mail.ru" required pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" placeholder="Введите e-mail(логин)" />
                        </div>
                    </form>
                </div>

                <div>
                    <div>
                        <button type="submit" className="button-my button-big-my button-red" form="test5"><Link to={{ pathname: '/phoneSuccessfulExecution' }} id='disabledlink' className='disabled-link colorWhite' >Далее</Link></button>
                    </div>
                </div>
            </div>
        )
    }
}
export default EmailMid