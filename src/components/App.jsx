import React from 'react';
import Header from './Header';
import KegList from './KegList';

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
      <KegList/>
    </div>
  );
}

export default App;
