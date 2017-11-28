// ColorInput is stateless

import React from 'react';

class ColorInput extends React.Component {
  handleChange = (e) => {
    this.props.onChange(e.target.value);
  };
  render() {
    const {
      value,
      label
    } = this.props;
    return (
      <div>
        <label>{label}</label>
        <input type='input' value = {value} onChange={this.handleChange} />
      </div>
    )
  }
}

export default ColorInput;