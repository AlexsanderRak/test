import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Head from './Head'
import ChangeOfLegalEntities from './ChangeOfLegalEntities'
import CreateOrder from './CreateOrder'


// import '../css/foot.css'
// import '../css/styles.css'
// import '../css/main.css'
// import '../css/head.css'
// import '../css/adminHead.css'

//TODO Собарть страничку клиента 
class CompMaker extends Component {
    constructor() {
        super()
    }
    render() {
        return (
             <div className="colorBlue" >
               <Head showFeedback={this.props.showFeedback}/>
                <div className="colorBlue" >
                    <Route path='/customer/profile' render={(props) => <ChangeOfLegalEntities  />} />
                    <Route path='/customer/createorder' render={(props) => <CreateOrder  showFeedback={this.props.showFeedback}/>} />
                </div>
            </div>
        )
    }
}

export default CompMaker
