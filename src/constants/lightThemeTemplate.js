export const lightThemeSyntaxTemplate = [
  {
    lable: 'Default Text',
    value: '#3D2C40',
    className: ['CodeMirror', 'CodeMirror-linenumber', 'cm-property', 'cm-operator', 'cm-comment']
  },
  {
    lable: 'Keyword',
    value: '#8D84E5',
    className: ['cm-keyword']
  },
  {
    lable: 'Variable Defination',
    value: '#3D2C40',
    className: ['cm-atom', 'cm-def']
  },
  {
    lable: 'Variable',
    value: '#4B93E3',
    className: ['cm-variable', 'cm-variable-2']
  },
  {
    lable: 'Number',
    value: '#34B277',
    className: ['cm-number']
  },
  {
    lable: 'String',
    value: '#DD6547',
    className: ['cm-string', 'cm-string-2']
  }
]

export const lightThemeDerivatives = `
  .CodeMirror-gutters { 
    background: #000 !important; 
    opacity: 0.03 !important; 
    border: 4px solid transparent !important ;
  }
  
  .CodeMirror-linenumber { 
    opacity: 0.5; 
  }
  .cm-comment {
    opacity: 0.6;
  }
  .cm-operator { 
    opacity: 0.8; 
  }
`