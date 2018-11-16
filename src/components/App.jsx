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
      ]
    };
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
          <Route path='/admin' component={Admin} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
