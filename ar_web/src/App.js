import React, { Component } from "react";
import "./App.css";
import defaultHIROMarker from "./markers/HIRO.jpg";
import squareHIROMarker from "./markers/pattern-square1.png";
import circleHIROMarker from "./markers/pattern-circle.png";
import triangleHIROMarker from "./markers/pattern-triangle.png";

class App extends Component {
  state = {
    shape: "default"
  };

  changeShape = shape => {
    switch (shape) {
      case "square":
        return squareHIROMarker;
      case "circle":
        return circleHIROMarker;
      case "triangle":
        return triangleHIROMarker;
      default:
        return defaultHIROMarker;
    }
  };

  render() {
    return (
      <div className="App">
        <div className="header bg-dark p-2">
          <span className="navbar-brand" href="#">
            ARWEBAPP
          </span>
        </div>
        <div className="container-fluid pl-2 pr-2">
          <div className="card mt-2">
            <div className="row">
              <div className="col-3 mt-2">
              <h4>Shape for choose</h4>
                <hr />
                <div className="btn-container">
                <button
                  className="btn btn-outline-secondary m-2 btn-block"
                  onClick={() => this.setState({ shape: "default" })}
                >
                  Default
                </button>
                <button
                  className="btn btn-outline-secondary m-2 btn-block"
                  onClick={() => this.setState({ shape: "circle" })}
                >
                  Sphere
                </button>
                <button
                  className="btn btn-outline-secondary m-2 btn-block"
                  onClick={() => this.setState({ shape: "square" })}
                >
                  Qube
                </button>
                <button
                  className="btn btn-outline-secondary m-2 btn-block"
                  onClick={() => this.setState({ shape: "triangle" })}
                >
                  Pyramid
                </button>
                </div>
              </div>
              <div className="col-9 mt-2">
                <h4>Marker</h4>
                <hr />
                <div className="w-100"></div>
                <img
                  className="hiro-marker"
                  src={this.changeShape(this.state.shape)}
                  alt="HIRO marker"
                />
              </div>
            </div>
          </div>
        </div>
        <br/>
        <h4 align='center'>Mobile AR webapp: <a href="https://onionknight621.github.io/ar_mobile/">HERE</a></h4>
      </div>
    );
  }
}

export default App;
