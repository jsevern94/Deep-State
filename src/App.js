import React, { Component } from 'react';
import VizSensor from 'react-visibility-sensor';
import './App.css';
import Title from './Title';
import Arrow from './Arrow';
import Navbar from './Navbar';
import Listen from './Listen';
import Events from './Events';
import Booking from './Booking';
import Merch from './Merch';
import About from './About';
import Footer from './Footer';

class App extends Component {
  state = {
    navDisplay: false,
    start: true
  }
  render() {
    return (
      <div className="App">
        <Title />
        <VizSensor
          partialVisibility
          onChange={(isVisible) => {
            if (!isVisible) {
              this.setState({ start: false })
            }
            this.setState({ navDisplay: !isVisible })
          }}
        >
          <Arrow />
        </VizSensor>
        <Navbar display={this.state.navDisplay} start={this.state.start} />
        <Listen />
        <Events events={[{month: 'January', day: '25', title: 'Party 1', description: 'The first party', location: 'Showbox, Seattle, Some Address', link: 'https://www.facebook.com'}, {month: 'February', day: '10', title: 'Party 2', description: 'The second party', location: 'Portland, Some Place, Some Address', link: 'https://www.name.com'}]} />
        <Merch />
        <Booking />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;