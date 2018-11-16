import React from 'react';
import PropTypes from 'prop-types';
import pint from '../assets/images/pint.png';

function PintsRemaining(props) {
  return (
    <div className="beer-container">
      <style>{`
        .beer-container {
          height: 50px;
          width: 100px;
        }
        .total-beer {
          width: 100%;
          height: 20px;
          background-color: #FFF;
        }
        .remaining-beer {
          width: 90%;
          height: 100%;
          background-color: #BF583F;
          float: left;
        }
        .image-size {
          height: 100px;
          width: 60px;
        }
      `}</style>
    <img className="image-size" src={pint}/>
    </div>
  );
}

export default PintsRemaining;
