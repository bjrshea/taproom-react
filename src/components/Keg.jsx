import React from 'react';
import WebFont from 'webfontloader';
import PropTypes from 'prop-types';
import PintsRemaining from './PintsRemaining';

WebFont.load({
  google: {
    families: ['Roboto Slab']
  }
});

function Keg(props) {
  const styles =
  <style>{`
    .keg-box {
      margin-right: 2%;
      margin-bottom: 2%;
    }
    .keg-info {
      position: relative;
      text-align: center;
      width: 380px;
      height: 280px;
      border: 2px solid #2B303A;
      border-radius: 5px;
      background-color: #7A7265;
      box-shadow: 5px 5px 25px #2B303A;
      font-family: helvetica;
      color: #F7F3E3;
      overflow: hidden;
    }
    .keg-header {
      border-bottom: 2px solid #2B303A;
      height: 80px;
    }
    .beer-name {
      font-family: 'Roboto Slab';
      color: #F7F3E3
    }
    .abv {
      font-style: italic;
    }
    .brewers {
      width: 61px;
      height: 186px;
    }
    .image-container {
      position: absolute;
      top: 34%;
      left: 5%;
    }
    .pints-left {
      position: absolute;
      top: 24%;
      right: 35%;
    }
    .buttons button {
      font-family: helvetica;
      border-radius: 25px;
    }
  `}</style>;
  if (props.currentRouterPath === '/admin') {
    return(
      <div className="keg-box">
        {styles}
        <div className="keg-info">
          <div className="align-text">
            <h2 className="beer-name">{props.name}</h2>
            <h3 className="abv">{props.type}</h3>
          </div>
          <h4>Price: ${props.price}</h4>
          <div className="buttons">
            <button onClick={() => {props.onPriceIncrease(props.id);}}>+</button>
            <button onClick={() => {props.onPriceDecrease(props.id);}}>-</button>
          </div>
          <h4>Pints remaining: {props.pints}</h4>
          <div className="buttons">
            <button onClick={() => {props.onPintSale(props.id);}}>Sell a pint</button>
          </div>
          <div className="image-container">
            <img className="brewers" src={props.url}/>
          </div>
        </div>
      </div>
    );
  } else {
    return(
      <div className="keg-box">
        {styles}
        <div className="keg-info">
          <div className="keg-header">
            <h2 className="beer-name">{props.name}</h2>
            <div className="pints-left">
              <PintsRemaining pints={props.pints} id={props.id}/>
            </div>
          </div>
          <h3 className="abv">{props.type}</h3>
          <h3>{props.brewer}</h3>
          <h4>{props.location}</h4>
          <h4>ABV: {props.abv} | Price: ${props.price}</h4>
          <div className="image-container">
            <img className="brewers" src={props.url}/>
          </div>
        </div>
      </div>
    );
  }
}

Keg.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  type: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.number,
  pints: PropTypes.number,
  currentRouterPath: PropTypes.string,
  onPintSale: PropTypes.func
};

export default Keg;
