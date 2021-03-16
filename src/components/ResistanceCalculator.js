import React from "react";
import { numberData, multiplierData, toleranceData } from "../data";
import ColorSelection from "./ColorSelection";

class ResistanceCalculator extends React.Component {
  constructor() {
    super();
    this.state = {
      result: 0,
      num1: 0,
      num2: 0,
      num3: 0,
      multiplier: 1,
      tolerance: 1,
      resultTolerance: 1,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name, value) {
    switch (name) {
      case "num1":
        this.setState({
          num1: value,
        });
        break;
      case "num2":
        this.setState({
          num2: value,
        });
        break;
      case "num3":
        this.setState({
          num3: value,
        });
        break;
      case "multiplier":
        this.setState({
          multiplier: value,
        });
        break;
      default:
        this.setState({
          tolerance: value,
        });
        break;
    }
  }

  handleSubmit(event) {
    console.log("submit");
    console.log(this.state);
    this.setState({
      result:
        (this.state.num1 * 100 + this.state.num2 * 10 + this.state.num3) *
        this.state.multiplier,
      resultTolerance: this.state.tolerance,
    });
    event.preventDefault();
  }
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="card my-lg-5 mx-lg-auto w-100">
              <div className="card-header">
                <h1>電阻值計算器</h1>
              </div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="row justify-content-center">
                    <div className="col-12 col-md-6 col-lg-2 mt-1">
                      <ColorSelection
                        name="num1"
                        data={numberData}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-12 col-md-6 col-lg-2 mt-1">
                      <ColorSelection
                        name="num2"
                        data={numberData}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-12 col-md-6 col-lg-2 mt-1">
                      <ColorSelection
                        name="num3"
                        data={numberData}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-12 col-md-6 col-lg-2 mt-1">
                      <ColorSelection
                        name="multiplier"
                        data={multiplierData}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-12 col-md-6 col-lg-2 mt-1">
                      <ColorSelection
                        name="tolerance"
                        data={toleranceData}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="row align-items-center mt-3 mt-lg-5">
                    <div className="offset-2 offset-sm-4 col-4">
                      電阻值: {this.state.result} &Omega; &plusmn;
                      {this.state.resultTolerance}%
                    </div>
                    <div className="offset-1 col-3">
                      <input
                        type="submit"
                        value="submit"
                        class="btn btn-success"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="card-footer">如只有四環請將色環1設為黑</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResistanceCalculator;
