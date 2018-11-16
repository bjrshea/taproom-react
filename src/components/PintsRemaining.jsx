import React from 'react';
import PropTypes from 'prop-types';
import pint from '../assets/images/pint.png';

function PintsRemaining(props) {
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
          background-color: #FFF;
        }
        .remaining-beer {
          border-radius: 25px;
          width: 90%;
          height: 100%;
          background-color: #BF583F;
          float: left;
        }
      `}</style>
      <div className="total-beer">
        <div className="remaining-beer"></div>
      </div>
    </div>
  );
}

export default PintsRemaining;
