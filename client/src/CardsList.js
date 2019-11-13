import React from "react";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
    <div>
      List des cards
      {
        cards.map((card) => {
          return (
            <Card key={card.key}>
              <CardActionArea>
              {/* <CardMedia image={card.image} className="imageCard"/> */}
              <CardContent>
                <img src={card.image} alt="logo partenaire" className="imageCard" />
              </CardContent>
              <p>
                Location à partir de 
              </p>
              <p>
                Location + assurance à partir de 
              </p>
              </CardActionArea>
            </Card>
          )
        })
      }
    </div>
  )
}

export default CardsList