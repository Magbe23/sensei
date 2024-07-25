import React, { useState } from 'react';

const Sensei = ({ nombre }) => {
    const [salud, setSalud] = useState(200);
    const [velocidad, setVelocidad] = useState(10);
    const [fuerza, setFuerza] = useState(10);
    const [sabiduria, setSabiduria] = useState(10);

    const speakWisdom = () => {
        drinkSake();
        console.log(`"${sabiduria}"`);
    };

    const drinkSake = () => {
        setSalud(salud + 10);
        console.log(`${nombre} bebió sake y aumentó su salud a ${salud}`);
    };

    return (
        <div>
            <h2>Sensei: {nombre}</h2>
            <button onClick={speakWisdom}>Decir sabiduría</button>
            <p>Salud: {salud}, Velocidad: {velocidad}, Fuerza: {fuerza}, Sabiduría: {sabiduria}</p>
        </div>
    );
};

export default Sensei;
