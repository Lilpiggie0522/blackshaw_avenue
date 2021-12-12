import React from 'react'
import './Room.css'

const Room = (props) => {
    return (
        <div className="rooms">
            <h2>{props.title}</h2>
            <img className="rooms__img" src={props.image} alt="pic"/>
        </div>
    )
}

export default Room
