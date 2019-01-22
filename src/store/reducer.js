import {
    CHANGE_INPUT_VALUE,
    DELETE_ITEM,
    ADD_ITEM,
    SET_LIST
} from './actionTypes'
const defaultState = {
    inputValue: '',
    list: ["Hello", "world"]
}
// state 上一次的 state
export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    if (action.type === ADD_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(state.inputValue)
        newState.inputValue = ""
        return newState
    }

    if (action.type === DELETE_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value, 1)
        return newState
    }

    if (action.type === SET_LIST) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState
    }

    return state
}