import React from 'react';

function Admin() {
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
        .admin-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 380px;
          height: 450px;
          border: 2px solid #2B303A;
          border-radius: 5px;
          background-color: #7A7265;
          color: #F7F3E3;
        }
      `}</style>
      <div className="admin-info">
        
      </div>
    </div>
  );
}

export default Admin;
