import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';
import Cars from './containers/CarsContainer';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Cars />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));