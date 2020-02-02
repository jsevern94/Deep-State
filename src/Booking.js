import React from 'react';
import './Booking.css';

function Booking() {
    return (
        <div id="booking" className="booking-content">
            <div className="booking-title">Booking</div>
            <div>
                <div className="follow">
                    Contact us for bookings:
                        </div>

                <div className="links">
                    <div className="card custom-card">
                        <a href="https://www.facebook.com/thereisnodeepstate/" target="_blank" rel="noopener noreferrer">
                            <img src="./facebook.png" className="card-img-top" alt="..." />
                        </a>
                    </div>
                    <div className="card custom-card">
                        <a href="https://twitter.com/DeepStateDJ" target="_blank" rel="noopener noreferrer">
                            <img src="./twitter.png" className="card-img-top" alt="..." />
                        </a>
                    </div>
                    <div className="card custom-card">
                        <a href="https://www.instagram.com/deepstate.dj/" target="_blank" rel="noopener noreferrer">
                            <img src="./instagram.jpg" className="card-img-top" alt="..." />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Booking;