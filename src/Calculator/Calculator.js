import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import './Calculator.css';

import CalcBody from './CalcBody';
import CalcScreen from './CalcScreen';
import { CalcButtonDigit, CalcButtonSign } from './CalcButton';
import CalcButtonRow from './CalcButtonRow';


export class Calculator extends Component {
  render() {
    const { topText, bottomText } = this.props;
    return (
      <CalcBody>
        <CalcScreen calcTopText={topText} calcBottomText={bottomText} />
        <CalcButtonRow>
          <CalcButtonSign sign="C" />
          <CalcButtonSign sign="≠" />
          <CalcButtonSign sign="%" />
          <CalcButtonSign sign="/" />
        </CalcButtonRow>
        <CalcButtonRow>
          <CalcButtonDigit digit={7} />
          <CalcButtonDigit digit={8} />
          <CalcButtonDigit digit={9} />
          <CalcButtonSign sign="x" />
        </CalcButtonRow>
        <CalcButtonRow>
          <CalcButtonDigit digit={4} />
          <CalcButtonDigit digit={5} />
          <CalcButtonDigit digit={6} />
          <CalcButtonSign sign="−" />
        </CalcButtonRow>
        <CalcButtonRow>
          <CalcButtonDigit digit={1} />
          <CalcButtonDigit digit={2} />
          <CalcButtonDigit digit={3} />
          <CalcButtonSign sign="+" />
        </CalcButtonRow>
        <CalcButtonRow>
          <CalcButtonSign sign="." />
          <CalcButtonDigit digit={0} />
          <CalcButtonSign sign="<" />
          <CalcButtonSign sign="=" />
        </CalcButtonRow>
      </CalcBody>
    );
  }
}

const mapStateToProps = (state) => {
  const { topText, bottomText } = state;

  return {
    topText,
    bottomText
  }
};

export default connect(mapStateToProps)(Calculator);
