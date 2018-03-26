import React from 'react'
import './GameCard.css'
import cardSrc from '../../images/cardback.jpg'

const GameCard = props => (
  <div className="card-holder" onClick={props.onClick} >
	  <div className="card" name={props.name} id={props.id} >
		  <div className="front">
      </div>
		  <div className="back" style={ { backgroundImage: `url(${props.img})`} } ></div>
	  </div>
    <img className="placeholder" src={cardSrc} alt="Game-Img"/>
</div>
)

export default GameCard