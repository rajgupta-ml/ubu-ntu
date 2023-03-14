import React from 'react';
import CtaIcon from '../../Assets/Image/CtaIcon.svg';
import '../../Css/HomeCss/HomeHeroSection.css';
import Arrow from '../../Assets/Image/Arrow.svg';

function HeroSection() {
  return (
    <>
      <section className="max-width-container">
        <div className="Hero-Section-Container">

          <div className="Hero-Section-Heading">
            <h1>
              <span>Let&apos;s Make </span>
              it easy to Visualize Your Insights
            </h1>
          </div>
          <div className="Hero-Section-Sub-Heading">

            <p>

              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vivamus vitae orci vitae tellus laoreet pellentesque.
              Morbi eu venenatis dui, suscipit condimentum sem. Nullam cursus est
              {' '}
            </p>
          </div>

          <div className="Hero-Section-Cta-Container">

            <button className="Hero-Section-Cta" type="button">
              Get Started
              <img src={CtaIcon} alt="Cta Arrow " />
            </button>

          </div>
        </div>

        <button type="button" className="Middle-Section-Button">
          <div className="Middle-Section-Smaller-Button">
            <img src={Arrow} alt="Arrow" />
          </div>
        </button>

      </section>

      <div className="Desktop-Hero-Section-Counter">
        <div className="Counter">
          <h3>70 MILLION</h3>
          <p>CONSUMER</p>
        </div>
        <div className="Counter">
          <h3>70 MILLION</h3>
          <p>CONSUMER</p>
        </div>
        <div className="Counter">
          <h3>70 MILLION</h3>
          <p>CONSUMER</p>
        </div>
        <div className="Counter">
          <h3>70 MILLION</h3>
          <p>CONSUMER</p>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
