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
        <Events events={[{month: 'February', day: '27', title: 'Prefunk the Figure Show', description: "Anyone attending the Figure event is cordially invited to Joey Rebbe's apartment for some pre-festivity libations.", location: "Joey's Apartment", link: 'https://www.facebook.com/events/829194894208818/'}, {month: 'February', day: '27', title: 'DSTRTION w/ Figure, Carbin and AKOMA', description: 'deepstate. plays at 9:45 as an opening act for Figure, Carbin, and Akoma. Their most prominent gig to date, this show promises to be a legendary night that will be etched in the annals of Seattle lore.', location: 'Trinity Nightclub, Seattle, 107 Occidental Ave', link: 'https://www.facebook.com/events/2476042302722765/'}]} />
        <Merch />
        <Booking />
        <About />
        <Footer />
      </div>
    );
  }
}
export default App;