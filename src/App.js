import React, { Component } from 'react';
import './App.css';

import store from './store'
import { Button, Input, List } from 'antd';

import {
  CHANGE_INPUT_VALUE,
  DELETE_ITEM,
  ADD_ITEM
} from './store/actionTypes'
import { getDeleteItemAction, getAddItemAction, getInputChangeAction } from './store/actionCreators';

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
    store.dispatch(getInputChangeAction(e.target.value))
    console.log(e.target.value)
  }

  handleAddItem(e){
    store.dispatch(getAddItemAction(e.target.value))
  }

  handleDeleteItem(index){
    store.dispatch(getDeleteItemAction())
  }

  handleStoreChange(){
    this.setState(store.getState())
  }
}

export default App;
