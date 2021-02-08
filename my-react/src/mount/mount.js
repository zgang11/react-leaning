import React ,{Component} from 'react'

class Mount extends Component {
    constructor(){
        super()
        this.state={
            timer:new Date()
        }
    }

    componentWillMount(){
        this.timerout = setInterval(() => {
            this.setState({
                timer : new Date()
            })
        }, 1000);
       clearInterval(this.timerout)
    }

    componentDidMount(){
        console.log('componentDidMount')
        
    }
    render(){
        return(
            <div>
                <h1>现在时间是：</h1>
                <h1>{this.state.timer.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

export default Mount