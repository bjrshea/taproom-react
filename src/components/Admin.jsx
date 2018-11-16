import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';

function Admin(props) {
  return(
    <div className="admin-box">
      <style>{`
        .admin-box {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 7%;
          margin-bottom: 7%;
        }
      `}</style>
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
