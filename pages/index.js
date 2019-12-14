import React, { Component } from 'react';
import TheHead from '../components/TheHead';
import TheNav from '../components/TheNav';
import Matches from '../components/Matches';
import Footer from '../components/Footer';
import { getResults } from '../lib/db';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matchResults: []
    };
  }

  componentDidMount() {
    const matchResults = getResults();
    console.log(matchResults);

    // this.setState({ matchResults: matchResults });

    // getResults().then(obj => {
    //   console.log(obj[0]);
    // });
  }

  render() {
    return (
      <div>
        <TheHead />
        <TheNav />
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <div className="columns is-centered is-vcentered">
                  <div className="column is-4">
                    <center>
                      <img src="static/media/kfcafe.svg" />
                      <br />
                      <p className="title">keyforge.cafe</p>
                      <br />
                      <a href="#" className="button is-large">
                        Join the Discord
                      </a>
                      <p className="help">
                        <br />
                        Playing & streaming Keyforge! <br />
                        Now streaming with select verified players.
                      </p>
                    </center>
                  </div>

                  <div className="column">
                    <img
                      className="is-pulled-right"
                      src="static/media/cards.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="middle-section">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <br />
              <Matches matchResults={this.state.matchResults} />
            </div>
          </div>
          <br />
        </section>
        <Footer />

        {/* <video autoPlay loop id="video-background" muted plays-inline>
          <source src="static/media/kf.webm" type="video/mp4" />
        </video> */}

        <style jsx>{`
          .title,
          .subtitle {
            color: white;
          }
        `}</style>
      </div>
    );
  }
}
