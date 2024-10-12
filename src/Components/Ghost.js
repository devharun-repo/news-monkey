import React from 'react';
import ghost from './Ghost.gif';

const Spinner = () => {
    return (
        <div className='spinner-container text-center'>
            <img className="spinner-image" src={ghost} alt="Loading" />
        </div>
    );
}

export default Spinner;
