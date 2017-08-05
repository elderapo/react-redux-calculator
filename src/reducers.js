import { CALCULATOR_DIGIT_BUTTON_CLICK, CALCULATOR_SIGN_BUTTON_CLICK } from './constants';

const initState = {
    topText: 'Your first calculation!',
    bottomText: '',
    actions: []
};

export const calculator = (state = initState, action) => {
    switch (action.type) {
        case CALCULATOR_DIGIT_BUTTON_CLICK:
            const digit = action.digit;
            return {
                ...state,
                bottomText: state.bottomText + digit
            };
        case CALCULATOR_SIGN_BUTTON_CLICK: // gdzie ogarniac każdy z innych kliknięć??? np jak action.action === 'C' to clear jak "+" to ogarnij dodawanie itp..
            return {
                ...state,
                bottomText: state.bottomText + action.sign
            };
        default:
            return state;
    }
}
//musisz to rozbic na osobne akcje np CALCULATOR_CLICK_PLUS, CALCULATOR_CLICK_MINUS etc
