import React , {Component} from 'react'


class Commet extends Component {
    // static defaultProps={
    //     content:{},
    //     key:''
    // }
    render(){
        return(
            <div className='comment'>
              <div className='comment-user'>
                <span>{this.props.content.userName} </span>：
              </div>
              <p>{this.props.content.content}</p>
            </div>
        )
    }
}

export default Commet