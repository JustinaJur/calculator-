import React, { Component } from 'react';


class Screen extends Component {
    render() {
        return (
            <div>
                <h1 style={{ backgroundColor: "#DDDDDD", height: "50px" }}>{this.props.screen}</h1>
            </div >
        );
    }
}

export default Screen; 