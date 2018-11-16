import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';

function Admin(props) {
  console.log(props.currentRouterPath);
  return(
    <div>
      <KegList
        kegList={props.kegList}
        currentRouterPath={props.currentRouterPath}/>
    </div>
  );
}

Admin.propTypes = {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
};

export default Admin;

// <button onClick={props.onPintSale}>Sell a pint</button>
// <button>Edit pint's price</button>
