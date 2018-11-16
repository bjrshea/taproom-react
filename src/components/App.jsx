import React from 'react';
import Header from './Header';
import KegList from './KegList';
import Admin from './Admin';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      masterKegList: [
        {
          name: 'Not Irish',
          brewer: 'Old Town',
          location: 'Portland, OR',
          type: 'Red Ale',
          abv: '5.6%',
          price: 5,
          pints: 124,
          url: 'https://www.thegrowlerguys.com/wp-content/uploads/taphandles/OldTownPauliesNotIrish.png'
        },
        {
          name: 'What Rough Beast',
          brewer: 'Breakside',
          location: 'Portland, OR',
          type: 'IPA',
          abv: '6.8%',
          price: 5,
          pints: 124,
          url: 'https://www.thegrowlerguys.com/wp-content/uploads/taphandles/BreaksideWhatRoughBeast.png'
        },
        {
          name: 'Turmoil',
          brewer: 'Barley Brown',
          location: 'Baker City, OR',
          type: 'Cascadian Dark Ale',
          abv: '7.8%',
          price: 7,
          pints: 124,
          url: 'https://www.thegrowlerguys.com/wp-content/uploads/taphandles/BarleyBrownsTurmoil.png'
        },
        {
          name: 'Bodhizafa',
          brewer: 'Georgetown',
          location: 'Seattle, WA',
          type: 'IPA',
          abv: '6.9%',
          price: 6,
          pints: 124,
          url: 'https://www.thegrowlerguys.com/wp-content/uploads/taphandles/GeorgetownBodhizafa.png'
        },
        {
          name: 'Straight Outta Portland',
          brewer: 'Migration',
          location: 'Portland, OR',
          type: 'IPA',
          abv: '7.3%',
          price: 6,
          pints: 124,
          url: 'https://www.thegrowlerguys.com/wp-content/uploads/taphandles/MigrationStraightOuttaPortland.png'
        },
        {
          name: 'Chocolate Shake',
          brewer: 'Boulder Beer',
          location: 'Boulder, CO',
          type: 'Porter',
          abv: '5.9%',
          price: 5,
          pints: 124,
          url: 'https://www.thegrowlerguys.com/wp-content/uploads/taphandles/BoulderBeerChocolateShake.png'
        }
      ]
    };
    this.handlePintSale = this.handlePintSale.bind(this);
  }

  handlePintSale(position) {
    let newMasterKegList = this.state.masterKegList.slice();
    let sellPint = Object.assign({}, newMasterKegList[position]);
    let newPintAmount = sellPint.pints - 1;
    sellPint.pints = newPintAmount;
    newMasterKegList[position] = sellPint;
    this.setState({
      masterKegList: newMasterKegList
    });
  }

  render() {
    return (
      <div>
        <style jsx global>{`
            body {
              margin: 0;
              padding: 0;
              background-color: #F7F3E3;
            }
        `}</style>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><KegList kegList={this.state.masterKegList} />} />
          <Route path='/admin' render={()=><Admin kegList={this.state.masterKegList} onPintSale={this.state.handlePintSale}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
