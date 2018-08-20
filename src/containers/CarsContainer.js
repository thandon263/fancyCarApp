import React from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';
import Card from '../components/Card';
import Toolbar from './Toolbar';
import { fetchCars } from '../actions';

class CarsContainer extends React.Component {
    componentDidMount() {
        this.props.fetchCars();
    }

    renderCars() {
        return this.props.cars.map(car => {
            return (
                <Card 
                    name={ car.name }
                    model={ car.model }
                    make={ car.make }
                    picture={ car.picture }
                    availability={ car.available }
                />
            );
        });
    }
    
    render() {
        return (
            <div className="car">
                <Toolbar />
                <div>
                    <Masonry>
                        { this.renderCars() }
                    </Masonry>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ cars }) => {
    return { cars }
}

export default connect(mapStateToProps, { fetchCars })(CarsContainer);