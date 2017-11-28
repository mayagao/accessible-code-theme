import React, { Component } from 'react';
import './css/app.css';
import CodeMirror from 'react-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/addon/runmode/runmode.js'

const exampleSnippet = `var canvas = d3.select('canvas'), // Comment here
    width = canvas.property('width'),
    height = canvas.property('height'),
    context = true;

var projection = d3.geoOrthographic()
    .scale((height - 10) / 2)
    .translate([width / 2, height / 2])
    .precision(0.1);

var path = d3.geoPath()
    .projection(projection)
    .context(context);
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      cmBg: '#3D2C40',
      cmDefault: '#F8F6F5',
      cmVariable: '#B6AFF7',
      cmKeyword: '#7CB4F0',
      cmNumber: '#35C380',
      cmAtom: '#EBAD3B',
      cmString: '#F08165'
   }
  }

  handleChange = (field) => (e) => {
    this.setState({ [field]: e.target.value });
  };
  
  render() {
    const options = {
      lineNumbers: true,
      readOnly: false,
      mode: 'javascript'
    };
 
    return (
      <div className='ph4 pv4'>
      <style jsx>{`
      .CodeMirror { padding: 6px 0px; border-radius: 6px; background: ${this.state.cmBg} !important; }
      .CodeMirror-gutters { background: #000 !important; opacity: 0.2 !important; border: 4px solid transparent !important }
      .CodeMirror, .CodeMirror-linenumber, .cm-property, .cm-operator, .cm-comment { color: ${this.state.cmDefault} !important; }
      .cm-comment, .CodeMirror-linenumber { opacity: 0.5; }
      .cm-operator { opacity: 0.8; }
      .cm-variable, .cm-variable-2 { color: ${this.state.cmVariable} !important; }
      .cm-keyword { color: ${this.state.cmKeyword} !important; }
      .cm-number { color: ${this.state.cmNumber} !important; }
      .cm-atom, .cm-def { color: ${this.state.cmAtom} !important; }
      .cm-string, .cm-string-2 { color: ${this.state.cmString} !important; }
    `}</style>
        <p className = 'mb4'>Prototype CodeMirror themes ...</p>
        <CodeMirror 
          ref='editor' 
          value={exampleSnippet}
          options={options} />
        <form className='mt3'>
          <label className='mr2'>
            Background Color: <input type='color' value = {this.state.cmBg} onChange={this.handleChange('cmBg')} />
          </label>
          <label className='mr2'>
            Default: <input type='color' value = {this.state.cmDefault} onChange={this.handleChange('cmDefault')} />
          </label>
          <label className='mr2'>
            Variables: <input type='color' value = {this.state.cmVariable} onChange={this.handleChange('cmDef')} />
          </label>
          <label className='mr2'>
            Keyword: <input type='color' value = {this.state.cmKeyword} onChange={this.handleChange('cmKeyword')} />
          </label>
          <label className='mr2'>
            Number: <input type='color' value = {this.state.cmNumber} onChange={this.handleChange('cmNumber')} />
          </label>
          <label className='mr2'>
            Atom: <input type='color' value = {this.state.cmAtom} onChange={this.handleChange('cmAtom')} />
          </label>
          <label className=''>
            String: <input type='color' value = {this.state.cmString} onChange={this.handleChange('cmString')} />
          </label>
        </form>
        
      </div>
    );
  }
}

export default App;
