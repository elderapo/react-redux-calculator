import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import KeyHandler, { KEYPRESS, KEYDOWN } from 'react-key-handler';

import { digitButtonClickAction, signButtonClickAction } from '../actions';

class CalcButton extends Component {
    static propTypes = {
        disabled: PropTypes.bool
    };

    static defaultProps = {
        disabled: false
    };

    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleKeyEvent = this.handleKeyEvent.bind(this);
    }

    handleOnClick() {
        if (!this.props.disabled && this.onClick)
            this.onClick();
    }

    handleKeyEvent(event) {
        this.onClick();
    }

    render() {
        // onClick={ () => this.props.handleClick(this.props.action) }
        const keyValues = this.getKeyValues && this.getKeyValues();
        return (
            <div className={"button " + (this.props.disabled && "disabled-button")} onClick={this.handleOnClick}>
                {
                    keyValues && keyValues.map((keyValue, i) => {
                        return <KeyHandler keyEventName={KEYDOWN} key={i} keyValue={keyValue} onKeyHandle={this.handleKeyEvent} />
                    })
                }
                {this.getText()}
            </div>
        );
    }
}

let CalcButtonDigit_ = class extends CalcButton {
    static propTypes = {
        digit: PropTypes.number
    };

    onClick() {
        const { handleClick, digit } = this.props;
        return handleClick(digit);
    }

    getText() {
        return this.props.digit;
    }

    getKeyValues() {
        return [this.props.digit.toString()];
    }
}

const CalcButtonSign_ = class extends CalcButton {
    static propTypes = {
        sign: PropTypes.string,
        keyValues: PropTypes.array
    };

    onClick() {
        const { handleClick, sign } = this.props;
        return handleClick(sign);
    }

    getText() {
        return this.props.sign;
    }

    getKeyValues() {
        return this.props.keyValues;
    }
}

export const CalcButtonDigit = connect(null, (dispatch, ownProps) => {
    return {
        handleClick: (digit) => {
            dispatch(digitButtonClickAction(digit))
        }
    }
})(CalcButtonDigit_)

export const CalcButtonSign = connect(null, (dispatch, ownProps) => {
    return {
        handleClick: (sign) => {
            dispatch(signButtonClickAction(sign))
        }
    }
})(CalcButtonSign_)


// export default {
    // CalcButtonDigit: connect(null, (dispatch, ownProps) => {
    //     return {
    //         handleClick: (digit) => {
    //             dispatch(digitButtonClickAction(digit))
    //         }
    //     }
    // })(CalcButtonDigit),
    // CalcButtonSign: connect(null, null)(CalcButtonDigit)
// };


// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         handleClick: (action) => {
//             dispatch(buttonClickAction(action))
//         }
//     }
// };

// export default connect(null, mapDispatchToProps)(CalcButton);

// export default CalcButton;
