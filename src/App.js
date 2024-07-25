import React from 'react';
import Ninja from './components/ninja';
import Sensei from './components/sensei';

const App = () => {
    return (
        <div>
            <Ninja nombre="Hyabusa" />
            <Sensei nombre="Master Splinter" />
        </div>
    );
};

export default App;
