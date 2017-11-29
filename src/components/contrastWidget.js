import React from 'react';
import {calcContrast} from '../utils/calcContrast';

class ContrastWidget extends React.Component {
  render() {
    let s = calcContrast(this.props.foreground, this.props.background);
    const {
      background,
      foreground
    } = this.props;
    return (
      <div className='f6'>
        <div className='dib mr1 mt1'>
        <span 
          style={{ width: 5, height: 10, background: `${foreground}` }} 
          className='dib bg-red br--left br-pill' />
        <span 
          style={{ width: 5, height: 10, background: `${background}` }} 
          className='dib bg-black br--right br-pill' />
        </div>
        <span className='o-60 code'>{s[0]}</span>
        <span className={`${s[1] === 'Low' && 'orange' } o-80 code pt1 fr`}>{s[1]}</span>
      </div>
    )
  }
}


export default ContrastWidget;