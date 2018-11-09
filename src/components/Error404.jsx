import React from 'react';
import busey from '../assets/images/busey.gif';
import { Link } from 'react-router-dom';

function Error404(){
  return (
    <div className="busey-box">
      <style>{`
        .busey-box {
          display: flex;
          justify-content: center;
        }
        .busey {
          width: 200px;
          height: 200px;
        }
      `}</style>
    <img className="busey" src={busey}/>
    </div>
  );
}

export default Error404;
