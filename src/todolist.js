import React from 'react'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import Store from './store'
import {add,deletething,change} from './store/actioncreator'


  
class Todolist extends React.Component {
    constructor(props) {
        super(props)
        this.state = Store.getState()
        this.changeinput= this.changeinput.bind(this)
        this.showinputcontent = this.showinputcontent.bind(this)
        this.addtodo = this.addtodo.bind(this)
        Store.subscribe(this.showinputcontent)
    }
    render() {
        return (
            <div>
                <div style={{margin:'10px'}}>
                <Input placeholder='请输入todolist' value={this.state.inputval} onChange={this.changeinput} style={{width:'300px'}}/>
                <Button type="primary" onClick={this.addtodo}>点击添加</Button>
                </div>
                <div style={{width:'300px', margin:'10px'}}>
                <List
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (
                      <List.Item onClick={this.deletetodo.bind(this,index)}>
                         {item}
                      </List.Item>
                    )}
                />
                </div>
            </div>
        )
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