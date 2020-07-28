import React from 'react'
// import Store from './store'
import {connect} from 'react-redux'

class todolist extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <input placeholder="please input todothings" onChange={this.props.handleonchange} value={this.props.inputval}/>
                    <button>点击添加</button>
                </div>
                <ul>
                    <li>the first thing</li>
                </ul>
            </div>
        )
    }
}
const mapStateProps = (state)=>{
    return {
        inputval: state.inputval
    }
}
const dispatchProps = (dispatch) =>{
    return {
        handleonchange(e){
            const action = {
                type:'change_input',
                val: e.target.val
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateProps,dispatchProps)(todolist)