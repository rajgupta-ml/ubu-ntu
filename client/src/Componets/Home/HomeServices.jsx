import React from 'react';
import '../../Css/HomeCss/HomeServicesSection.css';
import Diamond from '../../Assets/Image/diamond.svg';
import GrowthGraph from '../../Assets/Image/growth-graph.svg';
import Notes from '../../Assets/Image/notes.svg';
import BarGraph from '../../Assets/Image/bar-graph.svg';

const HomeServiceCardData = [
  {
    Id: 1,
    Icon: Diamond,
    Heading: 'sampling tool developmet',
    SubHeading: 'our fully integrated, end-to-end repertoire of research .',
  },
  {
    Id: 2,
    Icon: GrowthGraph,
    Heading: 'Survey design',
    SubHeading: 'our fully integrated, end-to-end repertoire of research .',
  },
  {
    Id: 3,
    Icon: Notes,
    Heading: 'Survey Hosting',
    SubHeading: 'our fully integrated, end-to-end repertoire of research .',
  },
  {
    Id: 4,
    Icon: BarGraph,
    Heading: 'Market Research Solution',
    SubHeading: 'our fully integrated, end-to-end repertoire of research .',
  },
];

function HomeServices() {
  return (
    <div className="Home-Services-Main-Container | max-width-container">
      <div className="Home-Services-Title">
        <div className="Home-Service-Heading">
          <h1>OUR BEST SERVICES</h1>
          <div className="Home-Service-Divider" />
        </div>
        <div className="Home-Service-Sub-Heading">
          <p>
            our fully integrated,
            end-to-end repertoire of
            research services helps you to take
            crucial strategic decisions,giving
            you the competitive edge to drive
            your business’ success.

          </p>
        </div>
      </div>

      <div className="Home-Service-Cards">
        {HomeServiceCardData.map((value) => (
          <div className="Card" key={value.Id}>
            <div className="Icon">
              <img src={value.Icon} alt="" />
            </div>
            <div className="Title">
              <div className="Heading">
                <h1>{value.Heading}</h1>
              </div>
              <div className="Sub-Heading">
                <p>{value.SubHeading}</p>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default HomeServices;
