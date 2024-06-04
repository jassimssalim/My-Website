import "./Common_Style.css";
import React, { Component } from 'react';

class Common extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: "",
      currentIndex: 0
    };
  }

  componentDidMount() {
    this.typeText();
  }

  typeText = () => {
    const { text } = this.props;
    const { typedText, currentIndex } = this.state;

    if (currentIndex < text.length) {
      this.setState({
        typedText: typedText + text[currentIndex],
        currentIndex: currentIndex + 1
      });
      setTimeout(this.typeText, 5); // Adjust the delay as needed
    }
  };

  render() {
    return (
      <div className="common-img">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.state.typedText}</p>
        </div>
      </div>
    );
  }
}

export default Common;
