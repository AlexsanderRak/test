import React, { Component } from 'react'
import PhoneSuccessfulExecutionHead from './PhoneSuccessfulExecutionHead'
import PhoneSuccessfulExecutionMid from './PhoneSuccessfulExecutionMid'

class PhoneSuccessfulExecution extends Component {

    render() {
        return (
            <div className="wrapper">
                <PhoneSuccessfulExecutionHead />
                <PhoneSuccessfulExecutionMid props={this.props.props} />
            </div>
        )
    }
}

export default PhoneSuccessfulExecution