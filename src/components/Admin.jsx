import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';

function Admin(props) {
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
