import React from "react";
import { Link } from "react-router-dom";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import "./App.js"

const cards = [
  {
    id: 1,
    operator: 'Lime',
    image: '/images/lime.png'
  },
  {
    id: 2,
    operator: 'Bolt',
    image: '/images/bolt.png'
  },
  {
    id: 3,
    operator: 'MyOwn',
    image: null
  }
]

const CardsList = ({value}) => {

  return (
    <div className="blockCards">
      {
        cards.map((card) => {
          return (
            <Card key={card.key} className="card">
              <CardActionArea>
                <Link to="/price-choice">
                  {
                    card.image != null ?
                      <CardContent>
                        <img src={card.image} alt="logo partenaire" className="imageCard" />
                        <p>
                          Location à partir de <span className="price">{getPrice(value,card.operator,"ert").toFixed(2)} €/min</span>
                        </p>
                        <p>
                          Location + assurance à partir de <span className="price">{Math.min(getPrice(value,card.operator,"Axa"),getPrice(value,card.operator,"April")).toFixed(2)} €/min</span>
                        </p>
                      </CardContent>
                      :
                      <CardContent>
                        <div className="myScooterBlock">
                          <img src="/images/scooter.png" alt="scooter to rent" className="myScooterImage" />
                          <span>J'ai ma propre trottinette</span>
                        </div>
                        <p>
                          Assurance à partir de <span className="price">{Math.min(getPrice(value,"aa","Axa"),getPrice(value,"aa","April")).toFixed(2)} €/min</span>
                        </p>
                      </CardContent>
                  }
                </Link>
              </CardActionArea>
            </Card>
          )
        })
      }
    </div>
  )
}

function getPrice(note, brand, insurance){
  if (brand == "Lime" && insurance == "Axa"){
    return (5-note+1)*0.12
  }
  if (brand == "Lime" && insurance == "April"){
    return (5-note+1)*0.15
  }
  if (brand == "Bolt" && insurance == "Axa"){
    return (5-note+1)*0.20
  }
  if (brand == "Bolt" && insurance == "April"){
    return (5-note+1)*0.25
  }
  else{
    if (brand == "Bolt"){
      return (5-note+1)*0.09
    }
    if (brand == "Lime"){
      return (5-note+1)*0.08
    }
    if (insurance == "April"){
      return (5-note+1)*0.20
    }
    if (insurance == "Axa"){
      return (5-note+1)*0.28
    }
  }
}

export default CardsList
