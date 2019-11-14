import React, { useState, useEffect} from "react";

import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const FinishPage = ({ value }) => {

  const [myNote, setMyNote] = useState(1);

  const getNote = (value) => {
    setTimeout(() => {
      setMyNote(value)
    }, 1000);
  }

  if(!myNote) {
    return null
  }

  return (
    <div className="blockCards">
      <div>
        <Button variant="contained" className="stopButton" onClick={() => getNote(3)} >
          STOP
      </Button>
        <div className="scoreBlock">
          Ma note moyenne <span className="price">{myNote}</span>
        </div>
        <ExpansionPanel className="panel">
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p>Voir mon score et mes courses</p>

          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <div style={{ width: '100%' }}>
            Course du 12 novembre
          </div>
          <Divider />
          <div>
            Course du 10 novembre
          </div>
          <Divider />
          <div>
            Course du 8 novembre
          </div>

        </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </div>
  )
}

export default FinishPage;