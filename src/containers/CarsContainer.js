import React from 'react';
import Card from '../components/Card';

class CarsContainer extends React.Component {
    renderCars() {
        return <Card 
            picture="http://via.placeholder.com/250x250"
            name="Mercedes Benz"
            make="4Matic"
            model="GLS 450"
        />
    }
    
    render() {
        return (
            <div className="car__container">
                {this.renderCars()}
            </div>
        )
    }
}

export default CarsContainer;