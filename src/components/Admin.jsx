import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';

function Admin(props) {
  return(
    <div>
      <KegList
        kegList={props.kegList}
        onPintSale={props.onPintSale}
        onPriceIncrease={props.onPriceIncrease}
        onPriceDecrease={props.onPriceDecrease}
        currentRouterPath={props.currentRouterPath}/>
    </div>
  );
}

Admin.propTypes = {
  ticketList: PropTypes.array,
  onPintSale: PropTypes.func,
  onPriceIncrease: PropTypes.func,
  onPriceDecrease: PropTypes.func,
  currentRouterPath: PropTypes.string.isRequired
};

export default Admin;
