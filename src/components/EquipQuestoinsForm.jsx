import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import '../css/order.css'

export default class EquipQuestoinsForm extends Component {
    constructor() {
        super()
        this.state = {
            nameImgLoad: "",
            enableAdditions: true,
            value: ""
        }
    }
    imgPersonLoad(e) {
        let imgLoad = e.currentTarget.value;
        // localStorage.setItem("imgLoad", imgLoad);
        this.setState({ nameImgLoad: "Загружаеммая фотография   " + imgLoad });
    }

    submit = (e) => {
        e.preventDefault();
        this.props.history.push("/createOrder/selectTime");
    }
    activateAdditions() {
        this.setState({ enableAdditions: (this.state.enableAdditions) ? false : true })
        this.setState({ value: '' })
    }
    render() {
        return (
            <div className="equipQuestionsFormContainer disablePopup">
                <form onSubmit={this.submit}>
                    <p className="p-title">Ответить на вопросы по выбранной технике</p>
                    <div className="equip-name form-section card">
                        <div>
                            <select name="" id="">
                                <option value="0">Марка</option>
                            </select>
                        </div>
                        <div>
                            <select name="" id="">
                                <option value="0">Модель</option>
                            </select>
                        </div>
                        <div className="equipment-cnt">
                            <div className="equipment-cnt-row">
                                <input type="checkbox" id="additionsEnable" onClick={this.activateAdditions.bind(this)} />
                                <label htmlFor="additionsEnable" ><span>Навесное оборудование</span></label>
                            </div>
                            <input type="text" name="" id="additionsInput" placeholder="Вилы" value={this.state.value} onChange={(e) => { this.setState({ value: e.currentTarget.value }) }} disabled={this.state.enableAdditions} />   {/*TODO переделать вилы*/}
                        </div>
                    </div>
                    <div className="equip-options form-section card">
                        <div className="item">
                            <span style={{ color: '#F88600' }}>*</span><span>Объём ковша, м3:</span><br />
                            <span>от</span>
                            <select name="от" id="">
                                <option value="0"></option>
                            </select>
                            <span>до</span>
                            <select name="до" id="">
                                <option value="0"></option>
                            </select>
                        </div>
                        <div className="item">
                            <span style={{ color: '#F88600' }}>*</span><span>Глубина копания, м:</span><br />
                            <span>от</span>
                            <select name="от" id="">
                                <option value="0"></option>
                            </select>
                            <span>до</span>
                            <select name="до" id="">
                                <option value="0"></option>
                            </select>
                        </div>
                        <div className="item">
                            <span style={{ color: '#F88600' }}>*</span><span>Минимальный заказ, ч:</span><br />
                            <span>от</span>
                            <select name="от" id="">
                                <option value="0"></option>
                            </select>
                            <span>до</span>
                            <select name="до" id="">
                                <option value="0"></option>
                            </select>
                        </div>
                    </div>
                    <div className="equip-comments form-section card">
                        <div>
                            <span><strong>Нужна ли доставка?</strong></span>
                            <input name="delivery" type="radio" id="delivery1" />
                            <label htmlFor="delivery1">Да</label>
                            <input name="delivery" type="radio" id="delivery2" />
                            <label htmlFor="delivery2">Нет</label>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="comments"><span>Комментарии к заказу:</span></label>
                                <textarea name="" id="comments" cols="20" rows="10"></textarea>
                            </div>
                            <div>
                                <label htmlFor="jobs"><span>Какие работы будут выполняться?</span></label>
                                <textarea name="" id="jobs" cols="20" rows="10"></textarea>
                            </div>
                            <div className="add-equipment-container">
                                <span>Прикрепить фото с места проведения работ:</span>
                                <label htmlFor="addPhoto">
                                    <p className="btn">
                                        <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12"
                                                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M16 6L12 2L8 6" stroke="white" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M12 2V15" stroke="white" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                        </svg>
                                    </p>
                                </label>
                                <label>{this.state.nameImgLoad}</label>
                                <input type="file" name="photo" id="addPhoto" multiple accept="image/*,image/jpeg" onChange={this.imgPersonLoad.bind(this)} />
                            </div>
                        </div>
                    </div>
                    <div className="equipQuestionsFormSubmitContainer">
                        <button type='submit' className="btn">Отправить</button>
                    </div>
                </form>
            </div>
        )
    }
}