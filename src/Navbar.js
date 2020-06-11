import React, { PureComponent } from 'react';
import './Navbar.css';

class Navbar extends PureComponent {
    render() {
        return (
            <div className={this.props.start ? 'invisible' : this.props.display ? 'slide-in-top navbar' : 'slide-out-top'}>
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
                <div className="navbar-item">
                    <div className="title">
                        <p className="animation4">d</p>
                        <p className="animation6">e</p>
                        <p className="animation1">e</p>
                        <p className="animation2">p</p>
                        <p className="animation9">s</p>
                        <p className="animation5">t</p>
                        <p className="animation3">a</p>
                        <p className="animation8">t</p>
                        <p className="animation7">e</p>
                        <p className="animation10">.</p>
                    </div>
                </div>
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