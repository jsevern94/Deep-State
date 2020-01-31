import React, { Component } from 'react';



class MusicPlayer extends Component {
    state = {
        anarchyPlay: false,
        panicButtonPlay: false,
        rumbaPlay: false,
        whiteHousePlay: false,
    }

    anarchyAudio = new Audio(this.props.playlist[0])
    panicButtonAudio = new Audio(this.props.playlist[1])
    rumbaAudio = new Audio(this.props.playlist[2])
    whiteHouseAudio = new Audio(this.props.playlist[3])

    componentDidMount() {
        this.anarchyAudio.addEventListener('ended', () => this.setState({ anarchyPlay: false }));
        this.panicButtonAudio.addEventListener('ended', () => this.setState({ panicButtonPlay: false }));
        this.rumbaAudio.addEventListener('ended', () => this.setState({ rumbaPlay: false }));
        this.whiteHouseAudio.addEventListener('ended', () => this.setState({ whiteHousePlay: false }));
    }

    componentWillUnmount() {
        this.anarchyAudio.removeEventListener('ended', () => this.setState({ anarchyPlay: false }));
        this.panicButtonAudio.removeEventListener('ended', () => this.setState({ panicButtonPlay: false }));
        this.rumbaAudio.removeEventListener('ended', () => this.setState({ rumbaPlay: false }));
        this.whiteHouseAudio.removeEventListener('ended', () => this.setState({ whiteHousePlay: false }));
    }

    toggleAnarchy = () => {
        this.setState({ panicButtonPlay: false, rumbaPlay: false, whiteHousePlay: false, anarchyPlay: !this.state.anarchyPlay }, () => {
            this.panicButtonAudio.pause();
            this.panicButtonAudio.currentTime = 0;
            this.rumbaAudio.pause();
            this.rumbaAudio.currentTime = 0;
            this.whiteHouseAudio.pause();
            this.whiteHouseAudio.currentTime = 0;
            this.state.anarchyPlay ? this.anarchyAudio.play() : this.anarchyAudio.pause();
        });
    }
    togglePanic = () => {
        this.setState({ anarchyPlay: false, rumbaPlay: false, whiteHousePlay: false, panicButtonPlay: !this.state.panicButtonPlay }, () => {
            this.anarchyAudio.pause();
            this.anarchyAudio.currentTime = 0;
            this.rumbaAudio.pause();
            this.rumbaAudio.currentTime = 0;
            this.whiteHouseAudio.pause();
            this.whiteHouseAudio.currentTime = 0;
            this.state.panicButtonPlay ? this.panicButtonAudio.play() : this.panicButtonAudio.pause();
        });
    }
    toggleRumba = () => {
        this.setState({ anarchyPlay: false, panicButtonPlay: false, whiteHousePlay: false, rumbaPlay: !this.state.rumbaPlay }, () => {
            this.anarchyAudio.pause();
            this.anarchyAudio.currentTime = 0;
            this.panicButtonAudio.pause();
            this.panicButtonAudio.currentTime = 0;
            this.whiteHouseAudio.pause();
            this.whiteHouseAudio.currentTime = 0;
            this.state.rumbaPlay ? this.rumbaAudio.play() : this.rumbaAudio.pause();
        });
    }
    toggleWhiteHouse = () => {
        this.setState({ anarchyPlay: false, panicButtonPlay: false, rumbaPlay: false, whiteHousePlay: !this.state.whiteHousePlay }, () => {
            this.anarchyAudio.pause();
            this.anarchyAudio.currentTime = 0;
            this.panicButtonAudio.pause();
            this.panicButtonAudio.currentTime = 0;
            this.rumbaAudio.pause();
            this.rumbaAudio.currentTime = 0;
            this.state.whiteHousePlay ? this.whiteHouseAudio.play() : this.whiteHouseAudio.pause();
        });
    }

    render() {
        return (
            <div>
                <ul>
                    <li> Anarchy:
                        <button onClick={this.toggleAnarchy}>{this.state.anarchyPlay ? 'Pause' : 'Play'}</button>
                    </li>
                    <li> Panic Button: 
                    <button onClick={this.togglePanic}>{this.state.panicButtonPlay ? 'Pause' : 'Play'}</button>
                    </li>
                    <li> Rumba No. 5:
                    <button onClick={this.toggleRumba}>{this.state.rumbaPlay ? 'Pause' : 'Play'}</button>
                    </li>
                    <li> White House:
                    <button onClick={this.toggleWhiteHouse}>{this.state.whiteHousePlay ? 'Pause' : 'Play'}</button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default MusicPlayer;

