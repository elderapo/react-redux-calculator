import { CALCULATOR_BUTTON_CLICK } from './constants';

const initState = {
    topText: 'Your first calculation!',
    bottomText: '',
    actions: []
};

export const calculator = (state = initState, action) => {
    switch (action.type) {
        case CALCULATOR_BUTTON_CLICK: // gdzie ogarniac każdy z innych kliknięć??? np jak action.action === 'C' to clear jak "+" to ogarnij dodawanie itp..
            return {
                ...state,
                bottomText: state.bottomText + action.action
            };
        default:
            return state;
    }
}
//musisz to rozbic na osobne akcje np CALCULATOR_CLICK_PLUS, CALCULATOR_CLICK_MINUS etc
