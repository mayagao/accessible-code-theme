// ColorInput is stateless

import React from 'react'
import { isTooBright } from '../utils/isTooBright'

class ColorInput extends React.Component {
  handleChange = (e) => {
    this.props.onChange(e.target.value);
  };
  render() {
    const {
      value,
      label
    } = this.props;
    let tooBright = isTooBright(value);
    return (
      <div className='mb1'>
        <div className='w4 f5 mt2'>{label}</div>
        <div className='relative'>
          <input className='code w-100 pv1 bb mt0 mb0 b--black-10 ' type='input' value = {value} onChange={this.handleChange} />
          <div className={`${tooBright ? 'ba b--black-10' : ''} mt1 w2 h1 br2 right top-0 right-0 absolute`}  style = {{ background: `${value}`}} />
          <input 
            className='pointer o-0 right top-0 right-0 absolute' 
            type='color' 
            value={value} 
            onChange={this.handleChange} />
        </div>
      </div>
    )
  }
}

export default ColorInput;