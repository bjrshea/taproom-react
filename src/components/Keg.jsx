import React from 'react';
import WebFont from 'webfontloader';
import PropTypes from 'prop-types';

WebFont.load({
  google: {
    families: ['Roboto Slab']
  }
});

function Keg(props) {
  return(
    <div className="keg-box">
      <style>{`
        .keg-box {
          margin-right: 2%;
          margin-bottom: 2%;
        }
        .keg-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 380px;
          height: 380px;
          border: 2px solid #2B303A;
          border-radius: 5px;
          background-color: #7A7265;
          box-shadow: 5px 5px 25px #2B303A;
          font-family: helvetica;
          color: #F7F3E3;
        }
        .align-text {
          text-align: center;
        }
        .beer-name {
          font-family: 'Roboto Slab';
          color: #DE9151
        }
        .abv {
          font-style: italic;
        }
        .pints-remaining {
          border-top: 1px solid black;
          padding-top: 30px;
        }
      `}</style>
      <div className="keg-info">
        <div className="align-text">
          <h2 className="beer-name">{props.name}</h2>
          <h3 className="abv">{props.type}</h3>
        </div>
        <div className="align-text location">
          <h3>{props.brewer}</h3>
          <h4>{props.location}</h4>
        </div>
        <h4>ABV: {props.abv} | Price: ${props.price}</h4>
        <h4 className="pints-remaining">Pints remaining: {props.pints}</h4>
      </div>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  type: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.number,
  pints: PropTypes.number
};

export default Keg;
