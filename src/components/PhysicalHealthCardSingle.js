import React from 'react';

export default function PhysicalHealthCardSingle(props) {
    return (
        <div className="tip-singular-holder">
            <h4 className="spacer">{props.title}</h4>
            <p className="spacer">{props.content}</p>
        </div>
    )
}