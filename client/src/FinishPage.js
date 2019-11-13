import React from "react";

import Button from '@material-ui/core/Button';

const FinishPage = ({ value }) => {
  return (
    <div className="blockCards">
      <div>
      <Button variant="contained" className="stopButton">
        STOP
      </Button>
      <div className="scoreBlock">
        Ma note moyenne <span className="price">{value}</span> 
      </div>
      </div>
    </div>
  )
}

export default FinishPage;