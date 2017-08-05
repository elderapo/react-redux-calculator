import { CALCULATOR_DIGIT_BUTTON_CLICK, CALCULATOR_SIGN_BUTTON_CLICK } from './constants';

export const digitButtonClickAction = (digit) => {
    return {
        type: CALCULATOR_DIGIT_BUTTON_CLICK,
        digit
    };
};

export const signButtonClickAction = (sign) => {
    return {
        type: CALCULATOR_SIGN_BUTTON_CLICK,
        sign
    };
};
