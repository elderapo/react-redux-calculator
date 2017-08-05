import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import './Calculator.css';

import CalcBody from './CalcBody';
import CalcScreen from './CalcScreen';
import CalcButton from './CalcButton';
import CalcButtonRow from './CalcButtonRow';


export class Calculator extends Component {
  render() {
    const { topText, bottomText } = this.props;
    return (
      <CalcBody>
        <CalcScreen calcTopText={topText} calcBottomText={bottomText} />
        <CalcButtonRow>
          <CalcButton action="C" />
          <CalcButton action="≠" />
          <CalcButton action="%" />
          <CalcButton action="/" />
        </CalcButtonRow>
        <CalcButtonRow>
          <CalcButton action="7" />
          <CalcButton action="8" />
          <CalcButton action="9" />
          <CalcButton action="x" />
        </CalcButtonRow>
        <CalcButtonRow>
          <CalcButton action="4" />
          <CalcButton action="5" />
          <CalcButton action="6" />
          <CalcButton action="−" />
        </CalcButtonRow>
        <CalcButtonRow>
          <CalcButton action="1" />
          <CalcButton action="2" />
          <CalcButton action="3" />
          <CalcButton action="+" />
        </CalcButtonRow>
        <CalcButtonRow>
          <CalcButton action="." />
          <CalcButton action="0" />
          <CalcButton action="<" />
          <CalcButton action="=" />
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
