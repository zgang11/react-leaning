import React , {Component} from 'react'
import Commet from './Commet'


class CommetList extends Component {
    static defaultProps = {
        contents:[]
    }
    render(){
        return(
            <div>
                {this.props.contents.map((content,key)=><Commet content={content} key={key} />)}
            </div>
        )
    }
}

export default CommetList