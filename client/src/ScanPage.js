import React from "react";
import { Link } from "react-router-dom";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Icon from '@material-ui/core/Icon';

const ScanPage = () => {
  return (
    <div className="blockCards">
      <div className="selected">
        <span>Scannez le QR code de votre trottinette</span>
      </div>
      <Card className="card">
        <CardActionArea>
          <Link to="/finish-page">
            <CardContent>
              <Icon className="fas fa-qrcode" classes={{ root: "iconScan" }} />
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </div>
  )
}

export default ScanPage;