import React from "react";
import chineseName from "../data/chineseName";
import darkColors from "../data/darkColors";

let ColorSelectionOption = (props) => (
  <option
    value={props.color}
    style={{
      backgroundColor: props.color,
      color: darkColors.includes(props.color) ? "white" : "black",
    }}>
    {chineseName[props.color]}
  </option>
);

class ColorSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: Object.keys(this.props.data)[0] };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.onChange(this.props.name, this.props.data[event.target.value]);
  }
  render() {
    const ColorSelectionStyle = {
      backgroundImage: "none",
      backgroundColor: this.state.value,
      color: darkColors.includes(this.state.value) ? "white" : "black",
    };
    return (
      <div>
        <label htmlFor={"#" + this.props.name}>
          {chineseName[this.props.name]}
        </label>
        <select
          className="form-select"
          style={ColorSelectionStyle}
          id={this.props.name}
          value={this.state.value}
          onChange={this.handleChange}>
          {Object.keys(this.props.data).map((x) => (
            <ColorSelectionOption color={x} key={x} />
          ))}
        </select>
      </div>
    );
  }
}

export default ColorSelection;
