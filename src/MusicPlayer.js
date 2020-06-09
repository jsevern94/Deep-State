import React, { Component } from 'react';
import './MusicPlayer.css';



class MusicPlayer extends Component {
    state = {
        anarchyPlay: false,
        panicButtonPlay: false,
        rumbaPlay: false,
        whiteHousePlay: false,
    }

    anarchyAudio = new Audio('anarchy.mp3')
    panicButtonAudio = new Audio('panic-button.mp3')
    rumbaAudio = new Audio('rumba-no-5.mp3')
    whiteHouseAudio = new Audio('white-house.mp3')

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
            <div className="music-player-content">
                <ul className="list-group">
                    <li className="list-group-item list-group-item-action list-group-item-danger d-flex justify-content-between align-items-center"> Anarchy:
                        <span>
                            <button type="button" className="btn btn-dark" onClick={this.toggleAnarchy}>{this.state.anarchyPlay ? <span className="oi oi-media-pause" title="media pause" aria-hidden="true"></span> : <span className="oi oi-media-play" title="media play" aria-hidden="true"></span> }</button>
                            <a href="anarchy.mp3" download>
                                Download
                            </a>
                        </span>
                    </li>
                    <li className="list-group-item list-group-item-action list-group-item-danger d-flex justify-content-between align-items-center"> Panic Button:
                        <span>
                            <button type="button" className="btn btn-dark" onClick={this.togglePanic}>{this.state.panicButtonPlay ? <span className="oi oi-media-pause" title="media pause" aria-hidden="true"></span> : <span className="oi oi-media-play" title="media play" aria-hidden="true"></span> }</button>
                            <a href="panic-button.mp3" download>
                                Download
                            </a>
                        </span>
                    </li>
                    <li className="list-group-item list-group-item-action list-group-item-danger d-flex justify-content-between align-items-center"> Rumba No. 5:
                        <span>
                            <button type="button" className="btn btn-dark" onClick={this.toggleRumba}>{this.state.rumbaPlay ? <span className="oi oi-media-pause" title="media pause" aria-hidden="true"></span> : <span className="oi oi-media-play" title="media play" aria-hidden="true"></span> }</button>
                            <a href="rumba-no-5.mp3" download>
                                Download
                            </a>
                        </span>
                    </li>
                    <li className="list-group-item list-group-item-action list-group-item-danger d-flex justify-content-between align-items-center"> White House:
                        <span>
                            <button type="button" className="btn btn-dark" onClick={this.toggleWhiteHouse}>{this.state.whiteHousePlay ? <span className="oi oi-media-pause" title="media pause" aria-hidden="true"></span> : <span className="oi oi-media-play" title="media play" aria-hidden="true"></span> }</button>
                            <a href="white-house.mp3" download>
                                Download
                            </a>
                        </span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default MusicPlayer;

