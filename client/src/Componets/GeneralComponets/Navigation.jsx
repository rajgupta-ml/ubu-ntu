import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CompanyLogo from '../../Assets/Image/logo.svg';
import '../../Css/GeneralCss/navigation.css';
import MobileInstaSocialIcon from '../../Assets/Image/MobileInstagram.svg';
import MobileEmailSocialIcon from '../../Assets/Image/MobileEmail.svg';
import MobileLinkedinSocialIcon from '../../Assets/Image/MobileLinkedin.svg';
import DesktopEmail from '../../Assets/Image/DesktopEmail.svg';
import DesktopInstagram from '../../Assets/Image/DesktopInstagram.svg';
import DesktopLinkedin from '../../Assets/Image/DesktopLinkedin.svg';

function MobileNavigation() {
  const [isMobileNavigationMenuOpen, setMobileNavigationMenuOpen] = useState(false);
  return (
    <div className="Mobile-Navigation-Container | max-width-container">
      <div className="Navigation-Logo-Container">
        <img src={CompanyLogo} alt="Logo" className="Logo" />
      </div>
      <button
        className={isMobileNavigationMenuOpen ? 'Mobile-Hamburger-Menu-Open' : 'Mobile-Hamburger-Menu'}
        onClick={() => setMobileNavigationMenuOpen(!isMobileNavigationMenuOpen)}
        type="button"
      >
        <div className="Menu-First-Rectangle" />
        <div className="Menu-Second-Rectangle" />
      </button>
      {isMobileNavigationMenuOpen
      && (
      <div
        className="Menu-Container | bg-accent"
      >
        <nav className="Mobile-Navigation">
          <ul className="Mobile-Navigation-Items">
            <li className="Mobile-Navigation-Item"><NavLink to="/">Home</NavLink></li>
            <li className="Mobile-Navigation-Item"><NavLink to="/about-us">About Us</NavLink></li>
            <li className="Mobile-Navigation-Item"><NavLink to="/services">Services</NavLink></li>
            <li className="Mobile-Navigation-Item"><NavLink to="/contact-us">Contact Us</NavLink></li>
          </ul>

          <div className="Opened-Menu-Divider" />
          <div className="Opened-Mobile-Menu-Social-icons">
            <img src={MobileInstaSocialIcon} alt="Instagram Social Icon" className="Mobile-Menu_Social-Icon" />
            <img src={MobileEmailSocialIcon} alt="Email Social Icon" className="Mobile-Menu_Social-Icon" />
            <img src={MobileLinkedinSocialIcon} alt="LinkedIn Social Icon" className="Mobile-Menu_Social-Icon" />
          </div>
        </nav>
      </div>
      )}
    </div>
  );
}

function Desktopnavigation() {
  return (
    <div className="Desktop-Navigation-Container | max-width-container">
      <div className="Desktop-Navigation-Left-Column">
        <div className="Navigation-Logo-Container">
          <img src={CompanyLogo} alt="Logo" className="Logo" />
        </div>
        <nav className="Desktop-Navigation">
          <ul className="Desktop-Navigation-items">
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">ABOUT US</NavLink>
            </li>
            <li>
              <NavLink to="/services">SERVICES</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">CONTACT-US</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="Desktop-Navigation-Right-Column">

        <div className="Desktop-Social-items">
          <img src={DesktopEmail} alt="" />
          <img src={DesktopInstagram} alt="" />
          <img src={DesktopLinkedin} alt="" />
        </div>
      </div>
    </div>
  );
}
function Navigation() {
  return (
    <div className="Navigation-Container">
      <MobileNavigation />
      <Desktopnavigation />
    </div>
  );
}

export default Navigation;
