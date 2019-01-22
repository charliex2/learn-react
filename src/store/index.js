import {
    createStore
} from 'redux'
import reducer from './reducer'

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;

// Store 设计使用的原则

// 1. store是唯一的
// 2. 只有 store 才能改变自己的内容
// 3. reducer 必须是个纯函数
//    纯函数的定义：给定固定的输入，就一定会有固定的输出而且不会有任何副作用
//    不能有任何副作用例如对外部函数进行修改