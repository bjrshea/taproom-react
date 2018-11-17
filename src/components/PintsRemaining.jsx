import React from 'react';
import PropTypes from 'prop-types';

function PintsRemaining(props) {
  const remainingBeer = {
    borderRadius: '25px',
    width: `${props.pints}%`,
    height: '100%',
    backgroundColor: '#DE9151'
  }
  return (
    <div className="beer-container">
      <style>{`
        .beer-container {
          height: 50px;
          width: 120px;
        }
        .total-beer {
          border-radius: 25px;
          width: 100%;
          height: 20px;
          background-color: #F7F3E3;
        }
      `}</style>
      <div className="total-beer">
        <div id={props.id} style={remainingBeer}></div>
      </div>
    </div>
  );
}

PintsRemaining.propTypes = {
  id: PropTypes.number,
  pints: PropTypes.number
};

export default PintsRemaining;
