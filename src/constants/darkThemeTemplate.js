export const darkThemeSyntaxTemplate = [
  {
    lable: 'Default Text',
    value: '#F8F6F5',
    className: ['CodeMirror', 'CodeMirror-linenumber', 'cm-property', 'cm-operator', 'cm-comment']
  },
  {
    lable: 'Keyword',
    value: '#EBAD3B',
    className: ['cm-keyword']
  },
  {
    lable: 'Variable Defination',
    value: '#7CB4F0',
    className: ['cm-atom', 'cm-def']
  },
  {
    lable: 'Variable',
    value: '#B6AFF7',
    className: ['cm-variable', 'cm-variable-2']
  },
  {
    lable: 'Number',
    value: '#35C380',
    className: ['cm-number']
  },
  {
    lable: 'String',
    value: '#F08165',
    className: ['cm-string', 'cm-string-2']
  }
]

export const darkThemeDerivatives = `
  .CodeMirror-gutters { 
    background: #000 !important; 
    opacity: 0.2 !important; 
    border: 4px solid transparent !important ;
  }
  .cm-comment, 
  .CodeMirror-linenumber { 
    opacity: 0.5; 
  }
  .cm-operator { 
    opacity: 0.8; 
  }
`