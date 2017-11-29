import React, { Component } from 'react';
import CodeMirror from 'react-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/addon/runmode/runmode.js'
import SyntaxColorInputContainer from './components/syntaxColorInputContainer.js'
import ColorInput from './components/colorInput.js'
import { syntaxThemeTemplate } from './constants/syntaxThemeTemplate.js'
import { d3ExampleSnippet } from './constants/codeSnippets.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { bgColor: '#3D2C40' };
  }
  updateBgColor = (value) => {
     this.setState({ bgColor: value })
  }
  render() {
    const options = {
      lineNumbers: true,
      readOnly: false,
      mode: 'javascript'
    };
    return (
      <div className='ph4 pv4'>
      <style jsx>{`
      .CodeMirror { padding: 6px 0px; border-radius: 6px; background: ${this.state.bgColor} !important; }
      .CodeMirror-gutters { background: #000 !important; opacity: 0.2 !important; border: 4px solid transparent !important }
      .cm-comment, .CodeMirror-linenumber { opacity: 0.5; }
      .cm-operator { opacity: 0.8; }
    `}</style>
        <CodeMirror 
          ref='editor' 
          value={d3ExampleSnippet}
          options={options} />
        <form className='mt2 flex flex-wrap'>
          <div className='w30 dib mr4 mt3'>
          <ColorInput
            value={this.state.bgColor} 
            label={'Background'}
            onChange={this.updateBgColor} />
          </div>
          {syntaxThemeTemplate.map((s, i) => 
            <div key={i}  className='w30 mr4 dib mt3'>
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
