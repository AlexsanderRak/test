import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// import '../css/FeedbackForm.css'

export default class FeedBackForm extends Component {

    submit = (e) => {
        e.preventDefault();
        console.log();
        this.props.props.history.push("/createOrder/selectTime");
    }
    render() {
        return (
            <div className="feedback-form-container disablePopup">
                <form onSubmit={this.submit} className="feedback-form">
                    <div className="feedback-tittle">
                        <h3>Обратная связь</h3>
                        <hr />
                    </div>
                    <div className="feedback-topic">
                        <p>Тема сообщения</p>
                        <input type="text" name="feedbackTopic" placeholder="Не работает ссылка &laquo;Водители&raquo;" />
                    </div>  
                    <div className="feedback-body">
                        <p>Текст сообщения</p>
                        <div className="textareaFix">
                            <textarea name="feedbackBody" id="" cols="30" rows="10" placeholder="Введите текст сообщения..."></textarea>
                        </div>
                    </div>
                    <div className="feedback-form-submit-container">
                        <button type="submit" className="btn" >Отправить</button>
                        <Link to={{ pathname: ''}} className="btn" ><div>Часто задаваемые вопросы</div></Link>
                     </div>
                    <a href="" className="info">Информация о проекте</a>
                </form>
            </div>
        )
    }
}