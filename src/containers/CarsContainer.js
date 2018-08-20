import React from 'react';
import Card from '../components/Card';
import Toolbar from './Toolbar';

class CarsContainer extends React.Component {
    renderCars() {
        return <Card 
            picture="https://firebasestorage.googleapis.com/v0/b/thandothedev.appspot.com/o/fancycars%2Fmercedes-benz-gls.jpg?alt=media&token=4a828406-82cd-44aa-be00-d1ff09df6618"
            name="Mercedes Benz"
            make="4Matic"
            model="GLS 450"
            availability="Available"
        />
    }
    
    render() {
        return (
            <div className="car">
                <Toolbar />
                <div className="car__container"> 
                    {this.renderCars()}
                    {this.renderCars()}
                </div>
            </div>
        )
    }
}

export default CarsContainer;