import React from 'react';

class Toolbar extends React.Component {
    render() {
        return(
            <div className="toolbar">
                <p className="toolbar--name">Name</p>
                <p className="toolbar--availability">Availability</p>
            </div>
        );
    }
}

export default Toolbar;