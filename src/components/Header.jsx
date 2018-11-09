import React from 'react';
import WebFont from 'webfontloader';
import keg from '../assets/images/keg.png';
import { Link } from 'react-router-dom';

WebFont.load({
  google: {
    families: ['Bowlby One SC', 'cursive']
  }
});

function Header() {
  return(
    <div className="header-styles">
      <style>{`
        .header-styles {
          display: flex;
          justify-content: center;
          background-color: #2B303A;
          color: #F7F3E3;
          border-bottom: 3px solid #7A7265;
        }
        .logo-styles {
          display: flex;
          align-items: center;
          margin: 10px 0;
        }
        img {
          width: 100px;
          height: 100px;
        }
        .barrel-house {
          font-family: 'Bowlby One SC', cursive;
        }
      `}</style>
      <div className="logo-styles">
        <img src={keg}/>
        <h1 className="barrel-house">Barrel House</h1>
      </div>
      <div>
        <Link to="/">Users</Link> | <Link to="/admin">Administrator</Link>
      </div>
    </div>
  );
}

export default Header;
