import React, { Component } from 'react';
import './App.css';

import store from './store'
import { Button, Input, List } from 'antd';

import {
  CHANGE_INPUT_VALUE,
  DELETE_ITEM,
  ADD_ITEM
} from './store/actionTypes'

class App extends Component {
  constructor(props){
    super(props)
    this.state = store.getState();
    store.subscribe(this.handleStoreChange.bind(this))
  }
  render() {
    return (
      <div className="App">
        <Input placeholder="plesae input value" className="input-demo" onChange={this.handleInputChange}></Input>
        <Button type="primary" className="click" onClick={this.handleAddItem}>Click</Button>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={(item,index) => (<List.Item onClick={this.handleDeleteItem.bind(this,index)}
          >{item}</List.Item>)}
        />    
      </div>
    );
  }

  handleInputChange(e) {
    const action = {
      type:CHANGE_INPUT_VALUE,
      value:e.target.value
    }
    store.dispatch(action)
    console.log(e.target.value)
  }

  handleAddItem(e){
    store.dispatch({
      type:ADD_ITEM,
    })
  }

  handleDeleteItem(index){
    store.dispatch({
      type:DELETE_ITEM,
      value:index
    })
  }

  handleStoreChange(){
    this.setState(store.getState())
  }
}

export default App;
