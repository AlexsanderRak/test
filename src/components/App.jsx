import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combinedReducer from '../redux/reducers';
import Main from './Main'
import Foot from './Foot'

// Создаем store 
let store = createStore(combinedReducer);

class App extends Component {

    render() {

        return (
            <BrowserRouter >
                <Provider store={store}>
                    <div>
                        <Main />
                        <Foot />
                    </div>
                </Provider>
            </BrowserRouter >
        )
    }
}

export default App
