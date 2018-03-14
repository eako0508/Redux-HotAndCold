

export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = () => ({
	type: RESTART_GAME
});


export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guess, correctAnswer) => {	
	guess = parseInt(guess, 10);
    if (isNaN(guess)) {
    	return {
    		type: MAKE_GUESS,
			guess,
			feedback: 'Please enter a valid number'
		}
    }
    const difference = Math.abs(guess - correctAnswer);
	let feedback;
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.';
    } else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'You got it!';
    }    
    return {
    	type: MAKE_GUESS,
    	guess,
    	feedback
    }
};

export const AURAL_UPDATE = 'AURAL_UPDATE';
export const generateAuralUpdate = (guess, guesses, feedback) => {
	const pluralize = guesses.length !== 1;
	let auralStatus = `Here's the status of the game right now: 
	 ${feedback} You've made ${guesses.length} 
	 ${pluralize ? 'guesses' : 'guess'}.`;

	if (guesses.length > 0) {
	  auralStatus += ` 
	  ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: 
	  ${guesses.reverse().join(', ')}`;
	}

	return {
		type: AURAL_UPDATE,
		auralStatus
	}
};
