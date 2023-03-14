import React from 'react';
import '../../Css/HomeCss/HomeConnectSection.css';
import user from '../../Assets/Image/user.svg';

function HomeConnectSection() {
  return (
    <div className="Home-Connect-Container | max-width-container">
      <div className="Home-Connect-Left-Column">
        <div className="Left-Column-Main-Content">

          <div className="Home-Connect-Titles">
            <div className="Home-Connect-Heading">
              <h1>Connect With Us</h1>
            </div>
            <div className="Home-Connect-Sub-Heading">
              <p>find out how our Data Driven Diligence can help you scale up your business</p>
            </div>
          </div>
          <div className="Home-Connect-Cta-btn">
            <button type="button">Request a Meeting</button>
            <img src={user} alt="" className="Home-Connect-Btn-Icon" />
          </div>
        </div>
      </div>
      <div className="Home-Connect-Right-Column">
        <h1 className="Mobile-Home-Connect-Heading">Connect With Us</h1>
        <div className="Home-Connect-Cards">
          <div className="card card1">
            <p>At Ubun-tu, our mission is to confirm client&apos;s satisfaction and happiness.</p>
          </div>
          <div className="card card2">
            <p>At Ubun-tu, our mission is to confirm client&apos;s satisfaction and happiness.</p>
          </div>
          <div className="card card3">
            <p>At Ubun-tu, our mission is to confirm client&apos;s satisfaction and happiness.</p>
          </div>
          <div className="card card4">
            <p>At Ubun-tu, our mission is to confirm client&apos;s satisfaction and happiness.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeConnectSection;
