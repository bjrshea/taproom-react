import React from 'react';
import PropTypes from 'prop-types';

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
      `}</style>
      <div className="total-beer">
        <div className="remaining-beer"></div>
      </div>
    </div>
  );
}

export default PintsRemaining;
