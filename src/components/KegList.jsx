import React from 'react';
import Keg from './Keg';

const kegList = {
  masterKegList: [
    {
      name: 'Vaporizer',
      brewer: 'Double Mountain',
      type: 'IPA',
      abv: '7.2%',
      price: '6',
      remaining: '124'
    },
    {
      name: 'What Rough Beast',
      brewer: 'Breakside',
      type: 'IPA',
      abv: '6.8%',
      price: '$5',
      remaining: '124'
    },
    {
      name: 'Turmoil',
      brewer: 'Barley Brown',
      type: 'Cascadian Dark Ale',
      abv: '7.8%',
      price: '7',
      remaining: '124'
    },
    {
      name: 'Bodhizafa',
      brewer: 'Georgetown',
      type: 'IPA',
      abv: '6.9%',
      price: '6',
      remaining: '124'
    },
    {
      name: 'Straight Outta Portland',
      brewer: 'Migration',
      type: 'IPA',
      abv: '7.3%',
      price: '6',
      remaining: '124'
    },
    {
      name: 'Chocolate Shake',
      brewer: 'Boulder Beer',
      type: 'Porter',
      abv: '5.9%',
      price: '5',
      remaining: '124'
    }
  ]
};

function KegList() {
  return(
    <div>
      <Keg/>
    </div>
  );
}

export default KegList;
