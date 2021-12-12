import React from 'react'
import './StreetView.css'
const StreetView = (props) => {
    return (
        <div className='streetView'>
            <h3>{props.title}</h3>
            <img src={props.image} alt=''/>
            <h2>{props.description}</h2>
        </div>
    )
}

export default StreetView
