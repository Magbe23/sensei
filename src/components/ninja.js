import React, { useState } from 'react';

const Ninja = ({ nombre }) => {
    const [salud, setSalud] = useState(100);
    const [velocidad, setVelocidad] = useState(3);
    const [fuerza, setFuerza] = useState(3);

    const sayName = () => {
        console.log(`Mi nombre es ${nombre}`);
    };

    const showStats = () => {
        console.log(`Nombre: ${nombre}, Salud: ${salud}, Velocidad: ${velocidad}, Fuerza: ${fuerza}`);
    };

    const drinkSake = () => {
        setSalud(salud + 10);
        console.log(`${nombre} bebió sake y aumentó su salud a ${salud}`);
    };

    return (
        <div>
            <h2>Ninja: {nombre}</h2>
            <button onClick={sayName}>Decir mi nombre</button>
            <button onClick={showStats}>Mostrar estadísticas</button>
            <button onClick={drinkSake}>Tomar sake</button>
        </div>
    );
};

export default Ninja;
