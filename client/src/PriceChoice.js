import React from "react";
import { Link } from "react-router-dom";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

const companies = [
  {
    id: 1,
    name: "Axa",
    image: '/images/axa.png',
    basicPrice: 0.1,
    showPrice: 0.8
  },
  {
    id: 2,
    name: "April",
    image: '/images/april.png',
    basicPrice: 0.2,
    showPrice: 0.6
  }
]

const PriceChoice = () => {
  return (
    <div className="blockCards">
      <div className="selected">
        <span>Vous avez choisi : </span>
        <img src="/images/lime.png" alt="assurance trottinett" className="selectedOperator" />
      </div>
      {
        companies.map((company) => {
          return (
            <Card key={Card.key} className="card">
              <CardActionArea>
              <Link to="/scan-page">
              <CardContent className="cardCompanyContent">
                <img src={company.image} alt="" className="companyImage" />
                <span>{company.showPrice} €/min</span>
              </CardContent>
              </Link>
              </CardActionArea>
            </Card>
          )
        })
      }
    </div>
  )
}

export default PriceChoice;