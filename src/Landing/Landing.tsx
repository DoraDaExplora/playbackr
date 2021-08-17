import React from 'react';
import { Link } from 'react-router-dom';

import s from './Landing.module.scss';

export const Landing = () => {
  return (
    <div className={s.Landing}>
      <div className={s.LandingContainer}>
        <h1>
          Playbackr<span className={s.LandingHighlight}>.</span>
        </h1>
        <h2>Generate dynamic Spotify playback pages for your stream.</h2>
        {/*TODO: add the "Login with Spotify" button here.*/}
        <Link to="/now-playing">Test link</Link>
      </div>

      <div className={s.LandingContainer}>
        <h2>
          What is it<span className={s.LandingHighlight}>?</span>
        </h2>
        <p>
          Playbackr<span className={s.LandingHighlight}>.</span> allows you to create web pages that display your
          current Spotify playback in real-time.
        </p>
        <p>
          The main Playbackr<span className={s.LandingHighlight}>.</span> use case is creating a placeholder or "pause"
          page for your stream viewers in case you are AFK.
        </p>
      </div>

      <div className={s.LandingContainer}>
        <h2>
          How does it work<span className={s.LandingHighlight}>?</span>
        </h2>
        <p>
          Playbackr<span className={s.LandingHighlight}>.</span> uses public Spotify APIs to fetch your current playback
          and then uses that data.
        </p>
        <p>
          We do not store your data in between sessions. We also can't access your data without your own consent, so
          don't worry about that.
        </p>
      </div>

      <div className={s.LandingContainer}>
        <h2>
          Usage<span className={s.LandingHighlight}>.</span>
        </h2>
        <p>Simply login to Spotify here, create a browser-type source in your broadcasting source and navigate here.</p>
        <p>
          Playbackr<span className={s.LandingHighlight}>.</span> works best if you match your stream resolution to your
          browser source resolution.
        </p>
      </div>
    </div>
  );
};
