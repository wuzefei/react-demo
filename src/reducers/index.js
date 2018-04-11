import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux' // 将routerReducer一起合并管理
import login from './login'

//合并reducer
const reducer = combineReducers({
    login:login,
    routing: routerReducer,
});

export default reducer;