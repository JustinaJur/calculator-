import React, { Component } from 'react';
import AllButtons from "./AllButtons";


const Main = (props) => {
    return (
        <div className="container">
            <AllButtons
                handleClick={props.handleClick}
            />
        </div>
    );
}

export default Main;
