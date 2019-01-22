import React from 'react'
import { Button, Input, List } from 'antd';

const TodoListUI = (props)=>{
    return (
        <div style={{marginTop:'10px', marginLeft:'10px'}}>
            <Input placeholder="plesae input value" className="input-demo" onChange={props.handleInputChange}></Input>
            <Button type="primary" className="click" onClick={props.handleAddItem}>Click</Button>
            <List
                bordered
                dataSource={props.list}
                renderItem={(item,index) => (<List.Item onClick={props.handleDeleteItem.bind(index)}
                >{item}</List.Item>)}
            />    
        </div>
    )
}

export default TodoListUI;