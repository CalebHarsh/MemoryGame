import React from 'react'
import './Stats.css'

const Stats = props => (

      <div className="stats">
        <div>
          <span>Guesses: {props.guesses}</span>
          <span>Correct Matches: {props.correct}</span>
        </div>
      </div>
)

export default Stats