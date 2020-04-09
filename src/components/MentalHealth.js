import React from 'react';
import PhysicalHealthCard from './PhysicalHealthCard'

export default function MentalHealth() {

    return (
        <div className="physical-container">
            <h1 className="phys-center headerquote">Humour Health Service</h1>
            <h2 className="headerquote phys-center">A positive view on trying times</h2>
            <PhysicalHealthCard />
        </div>
    )
}