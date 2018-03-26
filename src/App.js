import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Stats from './components/Stats'
import GameMap from './components/GameMap'
import GameCard from './components/GameCard'
import cards from './cards.js'


class App extends Component {

  state = {
    cards: cards,
    card: {
      name: "",
      id: 0
    },
    guesses: 0,
    correct: 0
  }

  componentDidMount() {
    this.loadGame()
  }

  loadGame = () => {
    const randcards = cards.sort(function() { return 0.5 - Math.random() })
    this.setState({
      cards: randcards
    })
  }

  flipCard = event => {
    const cardTarget = event.target.closest(".card")
    if(cardTarget.classList.contains("match")) return
    cardTarget.classList.add("flip")
    if(this.state.card.name !== "" && this.state.card.id !== cardTarget.id )  setTimeout(() => this.checkCards(cardTarget), 1100)
    else {
      this.setState({
        card: {
          name: cardTarget.getAttribute("name"),
          id: cardTarget.id
        }
      })
    }
  }

  checkCards = card => {
    let correctGuess = false
    if(card.getAttribute('name') === this.state.card.name) {
      Array.from(document.getElementsByClassName("flip")).forEach(elm => elm.classList.add("match"))
      correctGuess = true
    }
    else {
      Array.from(document.getElementsByClassName("flip")).forEach(elm => elm.classList.remove("flip"))
    }
    this.setState({
      card: {
        name: "",
        id: 0
      },
      guesses: this.state.guesses + 1,
      correct: correctGuess ? this.state.correct + 1 : this.state.correct
    })

  }



  render() {
    if(this.state.correct === 4) alert("You Win")
    return (
    <div className="App">
      <Stats guesses={this.state.guesses} correct={this.state.correct} />
      <GameMap>
        {this.state.cards.map(card => (
          <GameCard key={card.id} id={card.id} name={card.name} img={card.src} onClick={this.flipCard} />
        ))}
        
      </GameMap>
    </div>
    )
  }

}


export default App;
