import React from 'react'
import {Provider} from 'react-redux';
import configureStore from './stores';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import router from './router';//路由

const store = configureStore();

let unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})
class App extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    {router}
                </BrowserRouter>
            </Provider>
        )
    }

}
export default App