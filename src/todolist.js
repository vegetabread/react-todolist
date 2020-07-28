import React from 'react'
import Store from './store'
import {add,deletething,change, getajaxdata} from './store/actioncreator'
import UIcomponent from './uicomponent'

import 'antd/dist/antd.css';
  
class Todolist extends React.Component {
    constructor(props) {
        super(props)
        this.state = Store.getState()
        this.changeinput= this.changeinput.bind(this)
        this.showinputcontent = this.showinputcontent.bind(this)
        this.addtodo = this.addtodo.bind(this)
        this.deletetodo = this.deletetodo.bind(this)
        Store.subscribe(this.showinputcontent)
    }
    render() {
        return (
            <UIcomponent value={this.state.inputval}
            list={this.state.list}
            addtodo={this.addtodo}
            changeinput={this.changeinput}
            deletething={this.deletetodo}
            />
        )
    }
    componentDidMount(){
        const action = getajaxdata()
        Store.dispatch(action)
    }
    deletetodo(index){
        const action = deletething(index)
        Store.dispatch(action)
    }
    addtodo() {
        const addinfo = add()
        Store.dispatch(addinfo)
    }
    changeinput (e) {
        const changpart= change(e.target.value)
        Store.dispatch(changpart)
    }
    showinputcontent () {
        this.setState(Store.getState())
    }
}
export default Todolist