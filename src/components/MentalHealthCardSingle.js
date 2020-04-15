import React from 'react';


export default function MentalHealthCardSingle(props) {
    return (
        <div className="tip-singular-holder">
            <img className="phys-image-size" src={props.src} alt="correspondingimagetotitle" />
            <h4 className="spacer">{props.title}</h4>
            <p className="spacer">{props.content}</p>
        </div>
    )
}