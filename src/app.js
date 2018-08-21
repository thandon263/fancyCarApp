import 'babel-polyfill';
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from "react-redux";

import Header from './components/Header';
import Cars from './containers/CarsContainer';
import Footer from './components/Footer';
import reducers from './reducers';

const store = createStore(
    reducers, {}, 
    compose(applyMiddleware(thunk)));

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Cars />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));