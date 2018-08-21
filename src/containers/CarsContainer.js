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
            cars: []
        }
    }

    componentDidMount() {
        this.props.fetchCars();
    }

    componentDidUpdate(prevProps, prevState) {
        // only update if the data has changed
        if (prevProps.cars !== this.props.cars) {
            this.setState({
                cars: this.props.cars
            });
        }
    }

    handleGetAll() {
        const result = []
        this.props.cars.map(car => {
            result.push(car)
        });

        this.setState({
            cars: result
        });
    }

    handleSortByName() {
        const cars = this.props.cars

        const sortedByName = cars.sort((a, b) => {
            return a.name - b.name
        });
    }

    handleAvailability() {
        const result = []
        this.props.cars.filter(car => {
            if (car.available == "In Dealership") {
                result.push(car);
            }
        });

        this.setState({
            cars: result
        });
    } 

    // [ Render Cars ]
    renderCars() {
        return (
            this.state.cars.map(car => {
                return <Card 
                    name={ car.name }
                    make={ car.make }
                    model={ car.model }
                    picture={ car.picture }
                    availability={ car.available }
                />
            })
        );
    }

    render() {
        const data = this.state.cars;
        return (
            <div className="car">
                <Toolbar 
                    all={() => this.handleGetAll()}
                    nameSort={() => this.handleSortByName()}
                    availability={() => this.handleAvailability()}
                />
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