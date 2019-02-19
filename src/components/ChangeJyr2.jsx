import React, { Component } from 'react'
import LogoMini from './logo/LogoMini'
import ChangeJyr2Mid from './ChangeJyr2Mid'

class RegJyr2 extends Component{
    

    render(){
        return(
            <div className="wrapper colorBlue">
                <ChangeJyr2Mid   props={this.props.props}/>
            </div>  
        )
    }

}
export default RegJyr2
