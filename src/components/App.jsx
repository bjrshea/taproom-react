import React from 'react';
import Header from './Header';

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
    </div>
  );
}

export default App;
