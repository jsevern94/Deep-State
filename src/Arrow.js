import React from 'react';
import './Arrow.css';

function Arrow() {
    return (
        <div className="box">
            <a className="delayed-fade" href="#listen">
                <div className="arrow">Enter</div>
            </a>
            <div className="tagline">The government is your friend</div>
        </div>
    );
}

export default Arrow;