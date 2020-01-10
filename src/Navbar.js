import React, { PureComponent } from 'react';
import './Navbar.css';

class Navbar extends PureComponent {
    render() {
        return (
            <div className={this.props.start ? 'invisible' : this.props.display ? 'slide-in-top' : 'slide-out-top'}>
                <a href="#listen" className="navbar-item">
                    <div>
                        Listen
                </div>
                </a>
                <div className="navbar-item">|</div>
                <a href="#events" className="navbar-item">
                    <div>
                        Events
                </div>
                </a>
                <div className="navbar-item">|</div>
                <a href="#merch" className="navbar-item">
                    <div>
                        Merch
                </div>
                </a>
                <div className="navbar-item">|</div>
                <a href="#booking" className="navbar-item">
                    <div>
                        Booking
                </div>
                </a>
                <div className="navbar-item">|</div>
                <a href="#about" className="navbar-item">
                    <div>
                        About
                </div>
                </a>
            </div>
        );
    }
}

export default Navbar;