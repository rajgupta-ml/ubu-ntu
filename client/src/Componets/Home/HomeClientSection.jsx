import React from 'react';
import '../../Css/HomeCss/HomeClientSection.css';
import ClientImage from '../../Assets/Image/ClientImage.svg';
import tick from '../../Assets/Image/tick.svg';

function HomeClientSection() {
  return (
    <section className="Client-Main-Container">
      <div className="Client-Main-Wrapper | max-width-container">

        <div className="Client-Heading-Container">
          <h1>Why client Choose Us?</h1>
        </div>
        <div className="Wrapper">
          <div className="Client-Left-Column">
            <div className="Client-Row">
              <div className="Arrow-Container">
                <img src={tick} alt="" />
              </div>
              <div className="Client-Text-Container">
                <p>
                  Client Satisfaction Is Our Motive,
                  Carrying Out Full-Service Market Research Projects
                  In Almost Every Industry Vertical
                  Providing Us A Powerful Cross-Industry Experience
                </p>
              </div>
            </div>
            <div className="Client-Row">
              <div className="Arrow-Container Arrow-Container-Border">
                <img src={tick} alt="" />
              </div>
              <div className="Client-Text-Container">
                <p>
                  Client Satisfaction Is Our Motive,
                  Carrying Out Full-Service Market Research Projects
                  In Almost Every Industry Vertical
                  Providing Us A Powerful Cross-Industry Experience
                </p>
              </div>
            </div>
          </div>
          <div className="Client-Right-Column">
            <img src={ClientImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeClientSection;
