import React, { Component } from 'react';
import './MusicPlayer.css';



class MusicPlayer extends Component {
    state = {
        anarchyPlay: false,
        panicButtonPlay: false,
        rumbaPlay: false,
        whiteHousePlay: false,
        phantasmPlay: false
    }

    anarchyAudio = new Audio('https://deepstate-assets.s3.us-east-2.amazonaws.com/Anarchy.mp3')
    panicButtonAudio = new Audio('https://deepstate-assets.s3.us-east-2.amazonaws.com/Panic-Button.mp3')
    rumbaAudio = new Audio('https://deepstate-assets.s3.us-east-2.amazonaws.com/Rumba-No-5.mp3')
    whiteHouseAudio = new Audio('https://deepstate-assets.s3.us-east-2.amazonaws.com/White-House.mp3')
    phantasmAudio = new Audio('https://deepstate-assets.s3.us-east-2.amazonaws.com/Phantasm.mp3')

    componentDidMount() {
        this.anarchyAudio.addEventListener('ended', () => this.setState({ anarchyPlay: false }));
        this.panicButtonAudio.addEventListener('ended', () => this.setState({ panicButtonPlay: false }));
        this.rumbaAudio.addEventListener('ended', () => this.setState({ rumbaPlay: false }));
        this.whiteHouseAudio.addEventListener('ended', () => this.setState({ whiteHousePlay: false }));
        this.phantasmAudio.addEventListener('ended', () => this.setState({ phantasmPlay: false }));
    }

    componentWillUnmount() {
        this.anarchyAudio.removeEventListener('ended', () => this.setState({ anarchyPlay: false }));
        this.panicButtonAudio.removeEventListener('ended', () => this.setState({ panicButtonPlay: false }));
        this.rumbaAudio.removeEventListener('ended', () => this.setState({ rumbaPlay: false }));
        this.whiteHouseAudio.removeEventListener('ended', () => this.setState({ whiteHousePlay: false }));
        this.phantasmAudio.removeEventListener('ended', () => this.setState({ phantasmPlay: false }));
    }

    toggleAnarchy = () => {
        this.setState({ panicButtonPlay: false, rumbaPlay: false, whiteHousePlay: false, phantasmPlay: false, anarchyPlay: !this.state.anarchyPlay }, () => {
            this.panicButtonAudio.pause();
            this.panicButtonAudio.currentTime = 0;
            this.rumbaAudio.pause();
            this.rumbaAudio.currentTime = 0;
            this.whiteHouseAudio.pause();
            this.whiteHouseAudio.currentTime = 0;
            this.phantasmAudio.pause();
            this.phantasmAudio.currentTime = 0;
            this.state.anarchyPlay ? this.anarchyAudio.play() : this.anarchyAudio.pause();
        });
    }
    togglePanic = () => {
        this.setState({ anarchyPlay: false, rumbaPlay: false, whiteHousePlay: false, phantasmPlay: false, panicButtonPlay: !this.state.panicButtonPlay }, () => {
            this.anarchyAudio.pause();
            this.anarchyAudio.currentTime = 0;
            this.rumbaAudio.pause();
            this.rumbaAudio.currentTime = 0;
            this.whiteHouseAudio.pause();
            this.whiteHouseAudio.currentTime = 0;
            this.phantasmAudio.pause();
            this.phantasmAudio.currentTime = 0;
            this.state.panicButtonPlay ? this.panicButtonAudio.play() : this.panicButtonAudio.pause();
        });
    }
    toggleRumba = () => {
        this.setState({ anarchyPlay: false, panicButtonPlay: false, whiteHousePlay: false, phantasmPlay: false, rumbaPlay: !this.state.rumbaPlay }, () => {
            this.anarchyAudio.pause();
            this.anarchyAudio.currentTime = 0;
            this.panicButtonAudio.pause();
            this.panicButtonAudio.currentTime = 0;
            this.whiteHouseAudio.pause();
            this.whiteHouseAudio.currentTime = 0;
            this.phantasmAudio.pause();
            this.phantasmAudio.currentTime = 0;
            this.state.rumbaPlay ? this.rumbaAudio.play() : this.rumbaAudio.pause();
        });
    }
    toggleWhiteHouse = () => {
        this.setState({ anarchyPlay: false, panicButtonPlay: false, rumbaPlay: false, phantasmPlay: false, whiteHousePlay: !this.state.whiteHousePlay }, () => {
            this.anarchyAudio.pause();
            this.anarchyAudio.currentTime = 0;
            this.panicButtonAudio.pause();
            this.panicButtonAudio.currentTime = 0;
            this.rumbaAudio.pause();
            this.rumbaAudio.currentTime = 0;
            this.phantasmAudio.pause();
            this.phantasmAudio.currentTime = 0;
            this.state.whiteHousePlay ? this.whiteHouseAudio.play() : this.whiteHouseAudio.pause();
        });
    }
    togglePhantasm = () => {
        this.setState({ anarchyPlay: false, panicButtonPlay: false, rumbaPlay: false, whiteHousePlay: false, phantasmPlay: !this.state.phantasmPlay }, () => {
            this.anarchyAudio.pause();
            this.anarchyAudio.currentTime = 0;
            this.panicButtonAudio.pause();
            this.panicButtonAudio.currentTime = 0;
            this.rumbaAudio.pause();
            this.rumbaAudio.currentTime = 0;
            this.whiteHouseAudio.pause();
            this.whiteHouseAudio.currentTime = 0;
            this.state.phantasmPlay ? this.phantasmAudio.play() : this.phantasmAudio.pause();
        });
    }

    render() {
        return (
            <div className="music-player-content">
                <ul className="list-group">
                    <li className="list-group-item list-group-item-action list-group-item-danger d-flex justify-content-between align-items-center"> Anarchy:
                        <span>
                            <button type="button" className="btn btn-dark" onClick={this.toggleAnarchy}>{this.state.anarchyPlay ? <span className="oi oi-media-pause" title="media pause" aria-hidden="true"></span> : <span className="oi oi-media-play" title="media play" aria-hidden="true"></span>}</button>
                            <a href="https://deepstate-assets.s3.us-east-2.amazonaws.com/Anarchy.mp3" download>
                                Download
                            </a>
                        </span>
                    </li>
                    <li className="list-group-item list-group-item-action list-group-item-danger d-flex justify-content-between align-items-center"> Panic Button:
                        <span>
                            <button type="button" className="btn btn-dark" onClick={this.togglePanic}>{this.state.panicButtonPlay ? <span className="oi oi-media-pause" title="media pause" aria-hidden="true"></span> : <span className="oi oi-media-play" title="media play" aria-hidden="true"></span>}</button>
                            <a href="https://deepstate-assets.s3.us-east-2.amazonaws.com/Panic-Button.mp3" download>
                                Download
                            </a>
                        </span>
                    </li>
                    <li className="list-group-item list-group-item-action list-group-item-danger d-flex justify-content-between align-items-center"> Rumba No. 5:
                        <span>
                            <button type="button" className="btn btn-dark" onClick={this.toggleRumba}>{this.state.rumbaPlay ? <span className="oi oi-media-pause" title="media pause" aria-hidden="true"></span> : <span className="oi oi-media-play" title="media play" aria-hidden="true"></span>}</button>
                            <a href="https://deepstate-assets.s3.us-east-2.amazonaws.com/Rumba-No-5.mp3" download>
                                Download
                            </a>
                        </span>
                    </li>
                    <li className="list-group-item list-group-item-action list-group-item-danger d-flex justify-content-between align-items-center"> White House:
                        <span>
                            <button type="button" className="btn btn-dark" onClick={this.toggleWhiteHouse}>{this.state.whiteHousePlay ? <span className="oi oi-media-pause" title="media pause" aria-hidden="true"></span> : <span className="oi oi-media-play" title="media play" aria-hidden="true"></span>}</button>
                            <a href="https://deepstate-assets.s3.us-east-2.amazonaws.com/White-House.mp3" download>
                                Download
                            </a>
                        </span>
                    </li>
                    <li className="list-group-item list-group-item-action list-group-item-danger d-flex justify-content-between align-items-center"> Phantasm:
                        <span>
                            <button type="button" className="btn btn-dark" onClick={this.togglePhantasm}>{this.state.phantasmPlay ? <span className="oi oi-media-pause" title="media pause" aria-hidden="true"></span> : <span className="oi oi-media-play" title="media play" aria-hidden="true"></span>}</button>
                            <a href="https://deepstate-assets.s3.us-east-2.amazonaws.com/Phantasm.mp3" download>
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

