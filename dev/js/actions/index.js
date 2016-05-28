import * as types from './types';


//************************************************************************
//									Q U I Z    A C T I O N S
//************************************************************************
export function progressQuiz() {
	return {
		type: types.PROGRESS_QUIZ,
	};
}

export function degressQuiz() {
	return {
		type: types.DEGRESS_QUIZ,
	};
}

export function resetQuiz() {
	return {
		type: types.RESET_QUIZ,
	};
}
