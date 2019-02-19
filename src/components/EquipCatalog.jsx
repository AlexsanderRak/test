import React, { Component } from 'react'
import { connect } from 'react-redux'
// import '../css/equipCatalog.css'

class EquipCatalog extends Component {
    state = {
        displayState: 'none',
        // orderItem: null
    }

    showHide(e) {
        let obj = e.target
        let typeId = obj.id // id элемента под кликом
        let subtypesId = 'subtypes' + typeId.slice(4)    // берём только номер из id кликнутого элемента type1, получаем - 1
        let subtypesElem = document.querySelector("." + subtypesId)
        subtypesElem.style.display = (subtypesElem.style.display == 'none') ? 'block' : 'none'
    }

    rerender = () => { this.forceUpdate() }

    createOrderItem() {
        let data = this.props.equipCatalog
        if (data) {
            return data.map((el, index) => {
                return (
                    <div key={index}>
                        <div id={'type' + index} className="equip-title equip-type-title" onClick={this.showHide.bind(this)}>{el.title}</div>
                        {/* <div id={'type' + index} className="equip-title equip-type-tite" onClick={this.showHide.bind(this)}>{el.title}</div> */}
                        <div className={'subtypes' + index} style={{ display: this.state.displayState }}>
                            {/* <div id={'subtypes' + index} style={{ display: this.state.displayState.id }}> */}
                            {el.types.map((types, index) => {
                                return (
                                    <div className="equip-title equip-subtype-title" key={index}>
                                        <label><input type="radio" name="equipment" value={types.title} />{types.title}</label>
                                        {/* ДУБЛИРУЮТСЯ ID */}
                                        {/* <input type="radio" name="equipment" value={types.title} /><label htmlFor={"subtype" + index}>{types.title}</label> */}
                                    </div>
                                )
                            })}
                        </div>
                    </div >
                )
            })
        }
    }

    render() {

        return (
            <div className="equip-catalog-wrapper disablePopup">
                <p className="p-title">ВЫБЕРИТЕ ТИП ТЕХНИКИ</p>
                <div className="equip-catalog">
                    {this.createOrderItem()}
                </div>
                <div className="btn">Подтвердить</div>
            </div>
        )
    }
}


const mapStateToProps = function (state) {
    // console.log(state)
    return {
        // из раздела Redux с именем counter свойство cnt будет доступно
        // данному компоненту как this.props.cnt
        equipCatalog: state.store.equipCatalog,
    };
};

// присоединяем (connect) компонент к хранилищу Redux
export default connect(mapStateToProps)(EquipCatalog);