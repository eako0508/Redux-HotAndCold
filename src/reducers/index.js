
import {RESTART_GAME, MAKE_GUESS, AURAL_UPDATE} from '../actions';

const initialState = {
	guesses: [],
	feedback: 'Make your guess!',
	auralStatus: '',
	correctAnswer: Math.round(Math.random() * 100) + 1
};

export const gameReducer = (state=initialState, action) => {
	if(action.type === RESTART_GAME){		
		return Object.assign({}, state, initialState);
	} else if(action.type === MAKE_GUESS){		
		return Object.assign({}, state, {
			guesses: [...state.guesses, action.guess],
			feedback: action.feedback,
			auralStatus: state.auralStatus,
			correctAnswer: state.correctAnswer
		});
	} else if(action.type === AURAL_UPDATE){
		return Object.assign({
			guesses: state.guesses,
			feedback: state.feedback,
			auralStatus: action.auralStatus,
			correctAnswer: state.correctAnswer
		});
	}
	return state;
}