import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { digitButtonClickAction, signButtonClickAction } from '../actions';

class CalcButton extends Component {
    static propTypes = {
        // text: PropTypes.string
    };

    render() {
        // onClick={ () => this.props.handleClick(this.props.action) }
        return (
            <div className="button" onClick={() => this.onClick && this.onClick()}>
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
}

const CalcButtonSign_ = class extends CalcButton {
    static propTypes = {
        sign: PropTypes.string
    };

    onClick() {
        const { handleClick, sign } = this.props;
        return handleClick(sign);
    }

    getText() {
        return this.props.sign;
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
