import React from 'react'
import {calcContrast} from '../utils/calcContrast'
import { isTooBright } from '../utils/isTooBright'

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
          style={{ 
            width: 5, 
            height: 10, 
            background: `${foreground}`, 
            borderColor:`${isTooBright(foreground) ? 'rgba(0,0,0,0.1)' : foreground }` 
          }} 
          className={`bl bt bb dib br--left br-pill`} />
        <span 
          style={{ 
            width: 5, 
            height: 10, 
            background: `${background}`, 
            borderColor:`${isTooBright(background) ? 'rgba(0,0,0,0.1)' : background }` 
          }} 
          className={`br bt bb dib br--right br-pill`} />
        </div>
        <span className='o-60 code'>{s[0]}</span>
        <span className={`${s[1] === 'Low' ? 'orange o-80' : 'o-60' } code pt1 fr`}>
          {s[1]}
        </span>
      </div>
    )
  }
}


export default ContrastWidget;