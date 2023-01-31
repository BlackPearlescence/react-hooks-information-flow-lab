import React from "react";

function Filter(props){
    
    return(
        <select name="filter" onChange={props.handleChange}>
            {props.children}
        </select>
        );
}
export default Filter;