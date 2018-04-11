import { createStore,applyMiddleware } from 'redux'
import reducer from '../reducers'
import thunk from 'redux-thunk';

export default function configureStore (initialState){
    //创建一个全局store来保存全局state
    const store = createStore(
        reducer,
        initialState,
        applyMiddleware(thunk),
        //redux调试代码
        window.devToolsExtension && window.devToolsExtension({ actionCreators }),

    );
    //热加载,及时跟新reducer
    if(module.hot){
        module.hot.accept("../reducers",() =>{
            const nextReducer = require("../reducers/index");
            store.replaceReducer(nextReducer);
        })
    }

    return store;
}