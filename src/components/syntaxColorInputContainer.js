import React from 'react';
import ColorInput from './colorInput.js'

class SyntaxColorInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value };
  }
  handleChange = (value) => {
    this.setState({ value });
  };
  render() {
    const {
      label,
      className
    } = this.props;
    return (
      <div className='mr2'>
        <style jsx>{`
          .${className.length > 1 ? className.join(', .') : className[0]} {
            color: ${this.state.value} !important;
          }
        `}</style>
        <ColorInput
          value={this.state.value} 
          label={label}
          onChange={this.handleChange} />
      </div>
      
    )
  }
}

export default SyntaxColorInputContainer;