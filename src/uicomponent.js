import { Input, Button, List } from 'antd';
import React from 'react'
const UIcomponent = (props)=>{
    return (
        <div>
        <div style={{margin:'10px'}}>
        <Input placeholder='请输入todolist' value={props.value} onChange={props.changeinput} style={{width:'300px'}}/>
        <Button type="primary" onClick={props.addtodo}>点击添加</Button>
        </div>
        <div style={{width:'300px', margin:'10px'}}>
        <List
            bordered
            dataSource={props.list}
            renderItem={(item,index) => (
              <List.Item onClick={(index)=>{
                  props.deletething(index)
              }}>
                 {item}
              </List.Item>
            )}
        />
        </div>
    </div>
    )
}
export default UIcomponent