import React, { Component } from 'react';
import { Textfit } from 'react-textfit';


class CalcScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            opacity: 1
        }
    }

    componentWillMount() {
        this.interval = setInterval(() => this.setState({ opacity: Number(!this.state.opacity) }), 500);
    }

    componenWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="calc-screen">
                <Textfit mode="single">
                    <div className="calc-operation">{this.props.calcTopText}</div>
                </Textfit>
                <div className="calc-typed">
                    <Textfit mode="single" max={45}>
                        <span className="calc-result">{this.props.calcBottomText}</span>
                        <span className="blink-me" style={{ opacity: this.state.opacity, transition: "opacity .5s" }}>_</span>
                    </Textfit>
                </div>
            </div>
        );
    }
}

export default CalcScreen;
