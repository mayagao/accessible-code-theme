import React, { Component } from 'react';
import CodeMirror from 'react-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/addon/runmode/runmode.js'
import SyntaxColorInputContainer from './components/syntaxColorInputContainer.js'
import ColorInput from './components/colorInput.js'
import { darkThemeSyntaxTemplate, darkThemeDerivatives } from './constants/darkThemeTemplate.js'
import { lightThemeSyntaxTemplate, lightThemeDerivatives } from './constants/lightThemeTemplate.js'
import { d3ExampleSnippet } from './constants/codeSnippets.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      bgColor: '#FBFAF9',
      theme: 'light'
    };
  }
  updateBgColor = (value) => {
    this.setState({ bgColor: value })
  }
  switchThemeLight = () => {
    this.setState({ theme: 'light', bgColor: '#FBFAF9' })
  }
  switchThemeDark = () => {
    this.setState({ theme: 'dark', bgColor: '#3D2C40' })
  }
  render() {
    const options = {
      lineNumbers: true,
      readOnly: false,
      mode: 'javascript'
    };
    const colorInputColumnClasses = 'w30 dib mr4 mt3';
 
    return (
      <div className='ph4 pv4'>
      <style jsx>{`
      .CodeMirror { padding: 0px; border-radius: 6px; background: ${this.state.bgColor} !important; }
      ${this.state.theme === 'light' ? lightThemeDerivatives : darkThemeDerivatives}
    `}</style>
        <div className='mb3'>
          <a className={`${this.state.theme === 'light' ? '': 'o-50'} pointer mr3`} onClick={this.switchThemeLight}>Light</a>
          <a className={`${this.state.theme === 'dark' ? '': 'o-50'} pointer `} onClick={this.switchThemeDark}>Dark</a>
        </div>
        <CodeMirror 
          ref='editor' 
          value={d3ExampleSnippet}
          options={options} />
        <form className='mt2 flex flex-wrap'>
          <div className={`${colorInputColumnClasses}`}>
          <ColorInput
            value={this.state.bgColor} 
            label={'Background'}
            onChange={this.updateBgColor} />
          </div>         
          {this.state.theme === 'light' && lightThemeSyntaxTemplate.map((s, i) => 
            <div key={i}  className={`${colorInputColumnClasses}`}>
              <SyntaxColorInputContainer 
                label={s.lable} 
                value={s.value} 
                background={this.state.bgColor}
                className={s.className} 
              />
            </div>)}
          {this.state.theme === 'dark' && darkThemeSyntaxTemplate.map((s, i) => 
            <div key={i}  className={`${colorInputColumnClasses}`}>
              <SyntaxColorInputContainer 
                label={s.lable} 
                value={s.value} 
                background={this.state.bgColor}
                className={s.className} 
              />
            </div>)}
        </form>
      </div>
    );
  }
}

export default App;
