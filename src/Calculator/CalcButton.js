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
        const {dispatch} = this.props;
        dispatch(buttonClickAction(this.props.action));
    // dispatch this.props.action ???
    //tutaj nie dispatchujesz akcji zobacz nizej odpowiedz
    }

    render() {
        return (
            <div className="button" onClick={ this.onClickHandler }>
              { this.props.action }
            </div>
            );
    }
}

// Mogę tak używać samego connect(), żeby mieć możliwość dispatchowania?
/*
connect sluzy do podlaczenia componentu do store by nasluchiwal na zmiany state oraz by dispatchowal akcje
jego pierwsze wykonanie przyjmuje 2 argumenty:
    mapStateToProps - czyli tutaj mowisz store jakie kawalki state chcesz nasluchiwac
    mapDispatchToProps - tutaj mowisz jakie funkcje dispatchuja akcje

***********
PRZYKŁAD

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.account.user,
        error: state.errors.message
    }
}
i teraz mozesz sie odwolac w komponencie do tego poprzez this.props.user i gdy tylko gdziekolwiek indziej sie zmieni w state user tutaj tez sie zmieni


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleClick: () => {
            dispatch(myAction())
        }
    }
}

tutaj dispatchujesz swoje akcje, odwolujesz sie do niego poprzez props czyli this.props.handleClick()

laczysz to wszystko i masz
export default connect(mapStateToProps,mapDispatchToProps)(CalcButton);



*/



export default connect()(CalcButton);
