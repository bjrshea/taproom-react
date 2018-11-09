import React from 'react';
import keg from '../assets/images/keg.png';

function Header() {
  return(
    <div>
      <img src={keg}/>
      <h2>Barrel House</h2>
    </div>
  )
}

export default Header;
