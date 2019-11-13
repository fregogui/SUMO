import React from "react";

import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

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
        <ExpansionPanel className="panel">
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p>Voir mon score et mes courses</p>

          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </div>
  )
}

export default FinishPage;