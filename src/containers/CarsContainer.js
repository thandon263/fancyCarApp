import React from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';
import Card from '../components/Card';
import Toolbar from './Toolbar';
import { fetchCars } from '../actions';

class CarsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [],
            availability: false
        }
    }

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

    renderAvailable() {
        console.log("All available cars");
    }
    
    render() {
        return (
            <div className="car">
                <Toolbar />
                <div>
                    <Masonry>
                        { this.props.cars.map(car => {
                            return ( 
                                <Card 
                                    name={ car.name }
                                    model={ car.model }
                                    make={ car.make }
                                    picture={ car.picture }
                                    availability={ car.available }
                                />
                            );
                        })}
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