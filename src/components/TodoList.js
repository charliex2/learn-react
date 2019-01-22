import React, { Component } from 'react'

import store from '../store'

import TodoListUI from './TodoListUI'

import { getDeleteItemAction, getAddItemAction, getInputChangeAction, getItemData } from '../store/actionCreators';


class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState();
        store.subscribe(this.handleStoreChange.bind(this))
      }
    componentDidMount(){
        const action = getItemData()
        store.dispatch(action)
    }

    render(){
        return (
            <TodoListUI
                handleInputChange={this.handleInputChange}
                handleAddItem={this.handleAddItem}
                list={this.state.list}
                handleDeleteItem={this.handleDeleteItem}
            ></TodoListUI>
        )
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

export default TodoList