import React, { Component } from 'react';
import './App.css';

import store from './store'
import { Button, Input, List } from 'antd';

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
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />    
      </div>
    );
  }

  handleInputChange(e) {
    const action = {
      type:'change-input-value',
      value:e.target.value
    }
    store.dispatch(action)
    console.log(e.target.value)
  }

  handleAddItem(e){
    store.dispatch({
      type:'add-item',
    })
  }

  handleStoreChange(){
    this.setState(store.getState())
  }
}

export default App;
