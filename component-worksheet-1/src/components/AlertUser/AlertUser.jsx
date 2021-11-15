import React from 'react';
import "./AlertUser.css"


const AlertUser = (props) => {

    return(
        <div className="custom-div">
            <button className="custom-button" onClick={props.alertUserFunction}>CLICK ME!!</button>
        </div>
    );
    
}

export default AlertUser;