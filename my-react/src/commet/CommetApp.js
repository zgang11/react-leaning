import React , {Component} from 'react'
import CommetInput from './CommetInput'
import CommetList from './CommetList'

class CommetApp extends Component {
    constructor(){
        super()
        this.state ={
            contents:[]
        }
    }
    onSubmit(obj){
        this.state.contents.push(obj)
        this.setState({
            contents:this.state.contents
        })
        console.log(this.state.contents)
    }
    render(){
        return (
            <div className="wrapper">
                <CommetInput onSubmit={this.onSubmit.bind(this)}/>
                <CommetList contents={this.state.contents}/>
            </div>
        )
    }
}


export default CommetApp