import React, { useState, useEffect} from "react";

import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';

const FinishPage = ({ value }) => {

  const [myNote, setMyNote] = useState(1);
  const [stop, setStop] = useState('STOP');
  const [open, setOpen] = useState(false);

  const getNote = (value) => {
    setOpen(true)
    setTimeout(() => {
      setMyNote(value)
      setStop('fini')
      setOpen(false)
    }, 3000);
  }

  if(!myNote) {
    return null
  }

  console.log(open)
  return (
    <div className="blockCards">
      <div>
        {
          stop === 'STOP' ? 
        <Button variant="contained" className="stopButton" onClick={() => getNote(3)} >
          {stop}
      </Button>
      :
      <div className="finishDiv">
        <p>
        <span style={{ marginTop: '0px !important', fontSize: '24px'}}>
          Total : 3,2 €
        </span>
        </p>
          <p>
          <i className="fas fa-check-circle" style={{ color: "#ffdc34", fontSize: "100px" }}></i>
          </p>
      </div>
        }


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
      <Dialog open={open}>
      <DialogContent>
        <p>
        Nous calculons le tarif
        </p>
        <p style={{ textAlign: 'center' }}>
        <CircularProgress />
        </p>
      </DialogContent>
      </Dialog>
    </div>
  )
}

export default FinishPage;