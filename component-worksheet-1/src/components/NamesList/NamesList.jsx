import React, { Component } from 'react';
import './NameList.css'

const NamesList = (props) => {
    let renderedNamesList = props.namesList.map(names => {
        return <p>{names}</p>
    })

    return(
        <div className='names'>
            <ul>
                {renderedNamesList}
            </ul>
        </div>
    )
}
 
export default NamesList;