import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';

function Admin(props) {
  return(
    <div>
      <KegList kegList={props.kegList} />
    </div>
  );
}

Admin.propTypes = {
  ticketList: PropTypes.array
};

export default Admin;

// <button onClick={props.onPintSale}>Sell a pint</button>
// <button>Edit pint's price</button>
