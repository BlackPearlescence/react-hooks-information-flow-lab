// eslint-disable-next-line
import React, {useState} from "react";

function Header(props){
    
    return(
        <div className = {props.appDark}>
            <header>
                <h2>Shopster</h2>
                <button onClick={props.onChangeMode}>
                    {props.isDark}
                </button>
            </header>
            {props.children}
        </div>
        
    );
}

export default Header;