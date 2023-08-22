import React, { Component } from "react";
import "./Homepage.css";
import PreloaderGif from "./Assets/preloader.gif";

class Preloader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    // Start the animation
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 5000);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div className="preloader">
        {isLoading ? <img src={PreloaderGif} alt="Loading" /> : null}
      </div>
    );
  }
}

export default Preloader;
