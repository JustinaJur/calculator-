import React, { Component } from 'react';



const AllButtons = (props) => {
    return (
        <table onClick={props.handleClick} >
            <tbody>
                <td>7 </td>
                <td>8 </td>
                <td>9 </td>
                <td> /</td>
                <td> 4</td>
                <td>5 </td>
                <td> 6</td>
                <td> *</td>
                <td> 1</td>
                <td>2 </td>
                <td>3 </td>
                <td> .</td>
                <td> 0</td>
                <td>- </td>
                <td > +</td>
                <td className="result">=</td>
                <td className="clear">clear</td>
            </tbody>
        </table >
    );
}

export default AllButtons;
