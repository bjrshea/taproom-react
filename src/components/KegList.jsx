import React from 'react';
import Keg from './Keg';

const masterKegList = [
  {
    name: 'Vaporizer',
    brewer: 'Double Mountain',
    location: 'Portland, OR',
    type: 'IPA',
    abv: '7.2%',
    price: 6,
    pints: 124
  },
  {
    name: 'What Rough Beast',
    brewer: 'Breakside',
    location: 'Portland, OR',
    type: 'IPA',
    abv: '6.8%',
    price: 5,
    pints: 124
  },
  {
    name: 'Turmoil',
    brewer: 'Barley Brown',
    location: 'Baker City, OR',
    type: 'Cascadian Dark Ale',
    abv: '7.8%',
    price: 7,
    pints: 124
  },
  {
    name: 'Bodhizafa',
    brewer: 'Georgetown',
    location: 'Seattle, WA',
    type: 'IPA',
    abv: '6.9%',
    price: 6,
    pints: 124
  },
  {
    name: 'Straight Outta Portland',
    brewer: 'Migration',
    location: 'Portland, OR',
    type: 'IPA',
    abv: '7.3%',
    price: 6,
    pints: 124
  },
  {
    name: 'Chocolate Shake',
    brewer: 'Boulder Beer',
    location: 'Boulder, CO',
    type: 'Porter',
    abv: '5.9%',
    price: 5,
    pints: 124
  }
];

function KegList() {
  return(
    <div className="box-container">
      <style>{`
        .box-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 5%;
          margin-bottomp: 5%;
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
