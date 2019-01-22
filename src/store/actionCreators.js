import {
    ADD_ITEM,
    CHANGE_INPUT_VALUE,
    DELETE_ITEM,
    SET_LIST
} from './actionTypes';

import axios from 'axios'

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = () => ({
    type: ADD_ITEM
})

export const getDeleteItemAction = (index) => ({
    type: DELETE_ITEM,
    value: index
})

export const setListAction = (data)=>({
    type: SET_LIST,
    data
})

export const getItemData = ()=>{
    return (dispatch)=>{
        axios.get('/list.json').then(response=>{
            const action = setListAction(response.data);
            dispatch(action)
        })
    }
}