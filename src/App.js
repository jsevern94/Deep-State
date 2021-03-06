import React, { Component } from 'react';
import VizSensor from 'react-visibility-sensor';
import './App.css';
import Title from './Title';
import Arrow from './Arrow';
import Navbar from './Navbar';
import Listen from './Listen';
import Events from './Events';
import Booking from './Booking';
// import Merch from './Merch';
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
        <Events events={[{month: 'Every', day: 'Monday', title: 'Twitch Stream', description: "Join deepstate. on Twitch every Monday from 7-9", location: 'twitch.tv/deepstatedj', link: 'https://www.twitch.tv/deepstatedj', button: "Watch"}]} />
        {/* <Merch /> */}
        <div class="globe-container">
                <img class="globe" src="DeepstateGlobe-02.png" alt=""></img>
                <img class="globe" src="DeepstateGlobe-02.png" alt=""></img>
                <img class="globe" src="DeepstateGlobe-02.png" alt=""></img>
                <img class="globe" src="DeepstateGlobe-02.png" alt=""></img>
                <img class="globe" src="DeepstateGlobe-02.png" alt=""></img>
                <img class="globe" src="DeepstateGlobe-02.png" alt=""></img>
                <img class="globe" src="DeepstateGlobe-02.png" alt=""></img>
                <img class="globe" src="DeepstateGlobe-02.png" alt=""></img>
                <img class="globe" src="DeepstateGlobe-02.png" alt=""></img>
                <img class="globe" src="DeepstateGlobe-02.png" alt=""></img>
                <img class="globe" src="DeepstateGlobe-02.png" alt=""></img>
                <img class="globe" src="DeepstateGlobe-02.png" alt=""></img>
                <img class="globe" src="DeepstateGlobe-02.png" alt=""></img>
        </div>
        <Booking />
        <VizSensor
          partialVisibility
          onChange={(isVisible) => {
            this.setState({ navDisplay: !isVisible })
          }}
        >
        <About />
        </VizSensor>
        <Footer />
      </div>
    );
  }
}
export default App;