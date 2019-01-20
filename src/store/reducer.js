const defaultState = {
    inputValue: '',
    list: ["Hello", "world"]
}
// state 上一次的 state
export default (state = defaultState, action) => {
    if (action.type === 'change-input-value') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    if (action.type === 'add-item') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(state.inputValue)
        newState.inputValue = ""
        return newState
    }

    return state
}