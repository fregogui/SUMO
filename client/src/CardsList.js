import React from "react";
import { Link } from "react-router-dom";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

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

const CardsList = () => {
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
                          Location à partir de <span className="price">1€</span>
                        </p>
                        <p>
                          Location + assurance à partir de <span className="price">1€</span>
                        </p>
                      </CardContent>
                      :
                      <CardContent>
                        <div className="myScooterBlock">
                          <img src="/images/scooter.png" alt="scooter to rent" className="myScooterImage" />
                          <span>J'ai ma propre trottinette</span>
                        </div>
                        <p>
                          Assurance à partir de <span className="price">1€</span>
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

export default CardsList