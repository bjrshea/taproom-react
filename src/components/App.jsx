import React from 'react';
import Header from './Header';
import KegList from './KegList';
import Admin from './Admin';
import Links from './Links';
import { Switch, Route } from 'react-router-dom';

function App(){
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
        <Route exact path='/' component={KegList} />
        <Route path='/admin' component={Admin} />
      </Switch>
      <Links/>
    </div>
  );
}

export default App;
