import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return(
    <div className="keg-box">
      <style>{`
        .keg-box {
          margin: 2%;
        }
        .keg-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 380px;
          height: 600px;
          border: 2px solid #2B303A;
          border-radius: 5px;
          background-color: #7A7265;
          color: #F7F3E3;
        }
        .pints-remaining {
          border-top: 1px solid black;
          padding-top: 10px;
        }
      `}</style>
      <div className="keg-info">
        <h1>{props.name}</h1>
        <h2>{props.brewer}</h2>
        <h3>{props.type}</h3>
        <h3>ABV: {props.abv}</h3>
        <h3>${props.price}</h3>
        <h3 className="pints-remaining">Pints remaining: {props.pints}</h3>
        <button>Sell Pint</button>
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
