import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { buttonClickAction } from '../actions';

class CalcButton extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(event) {
        const { dispatch } = this.props;
        dispatch(buttonClickAction(this.props.action));
        // dispatch this.props.action ???
    }

    render() {
        return (
            <div className="button" onClick={this.onClickHandler}>{this.props.action}</div>
        );
    }
}

// Mogę tak używać samego connect(), żeby mieć możliwość dispatchowania?
export default connect()(CalcButton);
