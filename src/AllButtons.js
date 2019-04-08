import React, { Component } from 'react';



const AllButtons = (props) => {
    return (
        <table onClick={props.handleClick} >
            <tbody>
                {/* //<tr> */}
                <td>7 </td>
                <td>8 </td>
                <td>9 </td>
                <td> /</td>
                {/* </tr>
                    <tr> */}
                <td> 4</td>
                <td>5 </td>
                <td> 6</td>
                <td> *</td>
                {/* </tr>
                    <tr> */}
                <td> 1</td>
                <td>2 </td>
                <td>3 </td>
                <td> .</td>
                {/* </tr>
                    <tr> */}
                <td> 0</td>
                <td>- </td>
                <td > +</td>
                <td className="result" onClick={props.result}>=</td>
                <td className="clear" onClick={props.clear}> clear </td>
                {/* </tr> */}
            </tbody>
        </table >
    );
}

export default AllButtons;
