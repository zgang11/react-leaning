import React , {Component} from 'react'

class CommetInput extends Component{
    constructor(){
        super()
        this.state = {
            userName:'',
            content:'',
        }
    }
    
    handleUsernameChange(e){
        this.setState({
            userName:e.target.value
        })
    }

    handleContentChange(e){
        this.setState({
            content:e.target.value
        })
    }

    handleSubmit(){
        if(this.props.onSubmit){
            const {userName, content} = this.state
            this.props.onSubmit({userName,content})
        }
        this.setState({userName:'',content:''})
    }

    render(){
        return (
            <div className='comment-input'>
              <div className='comment-field'>
                <span className='comment-field-name'>用户名：</span>
                <div className='comment-field-input'>
                  <input value={this.state.userName} onChange={this.handleUsernameChange.bind(this)}/>
                </div>
              </div>
              <div className='comment-field'>
                <span className='comment-field-name'>评论内容：</span>
                <div className='comment-field-input'>
                  <textarea value={this.state.content} onChange={this.handleContentChange.bind(this)}/>
                </div>
              </div>
              <div className='comment-field-button'>
                <button onClick={this.handleSubmit.bind(this)}>
                  发布
                </button>
              </div>
            </div>
        )
    }
}

export default CommetInput