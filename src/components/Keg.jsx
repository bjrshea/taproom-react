import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return(
    <div>
      <style>{`
        .keg-box {
          width: 400px;
          height: 400px;
          border: 1px solid black;
          border-radius: 5px;
          background-color: #7A7265;
          color: #F7F3E3;
        }
      `}</style>
    <div className="keg-box">
        <h1>{props.name}</h1>
        <h2>{props.brewer}</h2>
        <h3>{props.type}</h3>
        <h3>ABV: {props.abv}</h3>
        <h3>${props.price}</h3>
        <h3>Pints remaining: {props.pints}</h3>
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
