import React from 'react';
import Keg from './Keg';

function KegList() {
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
      {masterKegList.map((keg, index) =>
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

export default KegList;
