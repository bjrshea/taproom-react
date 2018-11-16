import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';

function KegList(props) {
  return(
    <div className="box-container">
      <style>{`
        .box-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 7%;
          margin-bottom: 5%;
        }
      `}</style>
      {props.kegList.map((keg, index) =>
        <Keg
          name={keg.name}
          brewer={keg.brewer}
          location={keg.location}
          type={keg.type}
          abv={keg.abv}
          price={keg.price}
          pints={keg.pints}
          key={index}/>
      )}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;
