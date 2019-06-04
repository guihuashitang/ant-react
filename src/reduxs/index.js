// Store 有以下职责：
// 维持应用的 state；
// 提供 getState() 方法获取 state；
// 提供 dispatch(action) 方法更新 state；
// 通过 subscribe(listener) 注册监听器;
// 通过 subscribe(listener) 返回的函数注销监听器。
// Redux 应用只有一个单一的 store

import { createStore } from 'redux'


import todoApp from './reducer.js'
let store = createStore(todoApp,window.STATE_FROM_SERVER)

export default store