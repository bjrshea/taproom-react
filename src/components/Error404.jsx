import React from 'react';
import busey from '../assets/images/busey.gif';

function Error404(){
  return (
    <div className="busey-box">
      <style>{`
        .busey-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 10%;
        }
        .busey {
          width: 200px;
          height: 200px;
        }
        .text {
          font-family: helvetica;
        }
      `}</style>
      <img className="busey" src={busey}/>
      <h3 className="text">Whoops, this is probably not where you want to be.</h3>
      <h3 className="text">Why do you trink that search again?</h3>
    </div>
  );
}

export default Error404;
