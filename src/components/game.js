import React from 'react';
import {connect} from 'react-redux';
import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

import {restartGame, makeGuess, generateAuralUpdate} from '../actions';

export class Game extends React.Component {
  //document.title = props.feedback ? `${props.feedback} | Hot or Cold` : 'Hot or Cold';
  restartGame(){
    this.props.dispatch(restartGame());
  }
  makeGuess(number, correctAnswer){
    this.props.dispatch(makeGuess(number, correctAnswer));
  }
  generateAuralUpdate(){
    this.props.dispatch(generateAuralUpdate(this.props.guess, this.props.guesses,this.props.feedback));
  }

  render() {
    const { feedback, guesses, auralStatus } = this.props;
    const guessCount = guesses.length;

    return (
      <div>
        <Header
          onRestartGame={() => this.restartGame()}
          onGenerateAuralUpdate={() => this.generateAuralUpdate()}
        />
        <main role="main">
          <GuessSection
            feedback={feedback}
            guessCount={guessCount}
            onMakeGuess={guess => this.makeGuess(guess, this.props.correctAnswer)}
          />
          <StatusSection guesses={guesses} 
            auralStatus={auralStatus}
          />
          <InfoSection />
        </main>
      </div>
    );
  }
}

Game.defaultProps = ({
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: ''  
});

const mapStateToProps = state => ({
  guesses: state.guesses,
  feedback: state.feedback,
  auralStatus: state.auralStatus,
  correctAnswer: state.correctAnswer
});

export default connect(mapStateToProps)(Game);