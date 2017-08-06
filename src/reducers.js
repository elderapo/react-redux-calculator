import { CALCULATOR_DIGIT_BUTTON_CLICK, CALCULATOR_SIGN_BUTTON_CLICK } from './constants';
import math from 'mathjs';

const initState = {
    topText: 'Your first calculation!',
    bottomText: '',
    isErrored: false,
    justCalculated: false,
    blockSigns: true,
    canExecuteCalculation: false
};

const mapStringToSign = (inputValue) => {
    const stringSign = inputValue.toString().toLowerCase();

    const mappedSigns = {
        "x": "*",
        "−": "-"
    };

    return mappedSigns[stringSign] || stringSign;
};

const formatSign = (sign) => {
    return sign === "." ? "." : ` ${sign} `;
};

export const calculator = (state = initState, action) => {
    switch (action.type) {
        case CALCULATOR_DIGIT_BUTTON_CLICK:
            const digit = action.digit;
            let bottomText = state.bottomText;
            if (state.justCalculated) {
                bottomText = "";
            }
            return {
                ...state,
                justCalculated: false,
                blockSigns: false,
                bottomText: bottomText + digit
            };
        case CALCULATOR_SIGN_BUTTON_CLICK: // gdzie ogarniac każdy z innych kliknięć??? np jak action.action === 'C' to clear jak "+" to ogarnij dodawanie itp..
            const sign = mapStringToSign(action.sign);
            const expr = state.bottomText.toString().replace(/ /g,'');
            const lastSignInExpression = expr[expr.length - 1];

            if (lastSignInExpression === sign) {
                return {
                    ...state
                };
            }

            if (state.blockSigns) {
                return {
                    ...state,
                    blockSigns: true
                };
            }
            if (sign === "=") {
                const lastExpressionSignIsDot = expr.indexOf('.') === expr.length - 1;

                if (state.justCalculated || lastExpressionSignIsDot) {
                    return {
                        ...state
                    };
                }

                try {
                    return {
                        ...state,
                        topText: state.bottomText + " =",
                        bottomText: math.eval(expr),
                        justCalculated: true
                    }
                } catch (err) {
                    console.log(`Evaluated expression: ${expr}`);
                    console.error(err);
                    return {
                        ...state,
                        isErrored: true,
                        justCalculated: false,
                        topText: "Error yo xD"
                    }
                }
            }

            if (sign === "c") {
                return {
                    ...state,
                    justCalculated: false,
                    blockSigns: true,
                    topText: "Cleared!",
                    bottomText: ""
                }
            }
            return {
                ...state,
                justCalculated: false,
                bottomText: state.bottomText + formatSign(sign)
            };
        default:
            return state;
    }
}
//musisz to rozbic na osobne akcje np CALCULATOR_CLICK_PLUS, CALCULATOR_CLICK_MINUS etc
