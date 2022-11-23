import React, { Component } from 'react'
import "./App.css"
export default class App extends Component {
  state = {
    subscribed: false,
    text: "Click"
  };
 
  clickHandler = () => {
    this.setState({ text: "Clicked", subscribed: true });
  };
 
  render() {
    const { text, subscribed } = this.state;
    let className = "subscribe-button";
 
    if (!subscribed) {
      className += " subscribe-button_red";
    } else {
      className += " subscribe-button_grey";
    }
 
    return (
      <button className={className} type="button"      
              onClick={this.clickHandler}>
        {text}
      </button>
    );
  }
 }

