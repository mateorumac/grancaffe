// src/pages/Events.js
import React from 'react';
import './Events.css';
import { Trans } from 'react-i18next';
import jazzNightImg from '../assets/jazz.jpg'; 

function Events() {
  return (
    <div className="events-page">
      <section className="events-hero">
        <div className="events-hero-text">
          <h1 className="fade-in"><Trans>Discover Our Special Events</Trans></h1>
          <p className="fade-in">
            <Trans>
              Join us for exclusive events at Gran Caffè. From festive holiday celebrations to seasonal gatherings,
              there's always something special happening here. Stay tuned and experience unforgettable moments.
            </Trans>
          </p>
        </div>
      </section>

      <section className="event-list">
        {/* Jazz Night Event */}
        <div className="event-item">
          <div className="date-badge"><Trans>Every Saturday</Trans></div>
          <div className="event-image">
            <img src={jazzNightImg} alt="Jazz Night" />
          </div>
          <div className="event-details">
            <h2><Trans>Jazz Night</Trans></h2>
            <p>
              <Trans>
                Join us every Saturday for an unforgettable Jazz Night! Let the smooth sounds and cozy vibes
                sweep you into the weekend. See you there!
              </Trans>
            </p>
          </div>
        </div>

        {/* Halloween Event */}
        <div className="event-item">
          <div className="date-badge">Oct 31</div>
          <div className="event-image-placeholder">
            <p><Trans>Image coming soon</Trans></p>
          </div>
          <div className="event-details">
            <h2><Trans>Halloween Party</Trans></h2>
            <p>
              <Trans>
                Celebrate a spooky Halloween night with us! Enjoy themed cocktails, eerie decorations, and a night full of surprises.
                Come dressed to impress for our costume contest!
              </Trans>
            </p>
          </div>
        </div>

        {/* Christmas Event */}
        <div className="event-item">
          <div className="date-badge">Dec 25</div>
          <div className="event-image-placeholder">
            <p><Trans>Image coming soon</Trans></p>
          </div>
          <div className="event-details">
            <h2><Trans>Christmas Celebration</Trans></h2>
            <p>
              <Trans>
                Join us for a festive Christmas celebration! Indulge in holiday treats, warm drinks, and enjoy the magical ambiance
                with friends and family. Perfect for creating cherished memories.
              </Trans>
            </p>
          </div>
        </div>

        {/* New Year's Eve Event */}
        <div className="event-item">
          <div className="date-badge">Dec 31</div>
          <div className="event-image-placeholder">
            <p><Trans>Image coming soon</Trans></p>
          </div>
          <div className="event-details">
            <h2><Trans>New Year's Eve Bash</Trans></h2>
            <p>
              <Trans>
                Ring in the New Year with us! Dance the night away, enjoy sparkling drinks, and countdown to midnight with your
                loved ones in an unforgettable setting.
              </Trans>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;
