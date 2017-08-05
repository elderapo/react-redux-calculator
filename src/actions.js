import { CALCULATOR_BUTTON_CLICK } from './constants';

export const buttonClickAction = (action) => {
    return {
        type: CALCULATOR_BUTTON_CLICK,
        action
    };
};
