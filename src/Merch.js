import React from 'react';
import './Merch.css';

function Merch() {
    return (
        <div id='merch' className='merch-content'>
            <div className='merch-title'>Merch</div>
            <div className='coming-soon'>Coming Soon!</div>
            <span className="alien-head" role='img' aria-label="alien head">👽</span>
        </div>
    );
}

export default Merch;