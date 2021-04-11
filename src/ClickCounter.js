import React, {Component} from 'react';
import withCounter from './withCounter'
export class ClickCounter extends Component{
    
    render(){
        const {count, incrementCount} = this.props
        return(
            <div>
                return 
                    <button onClick={incrementCount}>
                    Clicked {count} Times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter)