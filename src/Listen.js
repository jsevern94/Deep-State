import React, { PureComponent } from 'react';
import './Listen.css';

class Listen extends PureComponent {
    state = {
        clicked: false
    }

    click = () => {
        this.setState({clicked: true})
    }
    
    render() {
        return (
            <div id="listen" className="listen-content">
                <div className="listen-title">Listen</div>
                {this.state.clicked ?
                    <div>Music!</div>
                    :
                    <div>
                        <div>
                            Follow or subscribe on one of the following for free downloads:
                        </div>

                        <div className="links">
                            <div className="spotify-link">
                                <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fopen.spotify.com%2Fartist%2F7m9Y8GQKH6hoONkgXKgUt9%3Fsi%3DKGr3XJvRSK6XpssrIfcavg%26fbclid%3DIwAR1-qEOyj5498ibZBC8AKZj84u0VhGKArLeA86aCej7fpe1YFkadKSt7EIs&h=AT3XO1sL6fBRlkowjPwFxYXjOYkEYFllm7T0IA0ESTvHDBjp_-koDQybXp3mro89x9WqxKkyoaJyhgJnH_xnMZ1iTMwFm_76hctw5NhAg-fEszN6DXA2YDYD3eNk4ZPaUQ" target="_blank" rel="noopener noreferrer" onClick={this.click}>Check us out on Spotify</a>
                            </div>
                            <div className="soundcloud-link">
                                <a href="https://soundcloud.com/thereisnodeepstate" target="_blank" rel="noopener noreferrer" onClick={this.click}>Check us out on SoundCloud</a>
                            </div>
                            <div className="youtube-link">
                                <a href="https://www.youtube.com/channel/UCHHA79C4WjME0S_7NIIQWvw?disable_polymer=true" target="_blank" rel="noopener noreferrer" onClick={this.click}>Check us out on Youtube</a>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Listen;