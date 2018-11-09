import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return(
    <div>
      <h1>{props.name}</h1>
      <h2>{props.brewer}</h2>
      <h3>{props.type}</h3>
      <h3>{props.abv}</h3>
      <h3>{props.price}</h3>
      <h3>{props.pints}</h3>
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
