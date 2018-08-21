import React from 'react';

class Toolbar extends React.Component {
    render() {
        return(
            <div className="toolbar">
                <div 
                    className="toolbar--name" 
                    onClick={this.props.all}>
                    All
                </div>
                <div 
                    className="toolbar--name" 
                    onClick={this.props.nameSort}>
                    Name
                </div>
                <div 
                    className="toolbar--availability" 
                    onClick={this.props.availability}>
                    Availability
                </div>
            </div>
        );
    }
}

export default Toolbar;