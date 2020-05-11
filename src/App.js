import React from 'react';
import ReactFCCtest from 'react-fcctest';
import marked from 'marked';

import './App.scss';

const initialState = `
# heading
## heading 2

**BOLD TEXT**

[My Website](https://www.yahoo.com)

This is a inline \`<div></div>\`

This is a block of code
\`\`\`
let x = 1;
let y = 2;
let z = 3
\`\`\`

![React](https://goo.gl/Umyytc)
`


class App extends React.Component {
  state = {
    text : initialState
  };

  handleChange = (e) => {
    this.setState({
      text : e.target.value
    })
  }

  render() {
    const {text} = this.state;
    const markdown = marked(text);
    
  return (
    <div className="App">
    <ReactFCCtest />
    <h1>Mardown Preview</h1>
      <div className="App-inner">
        <div className="row">
          <div className="preview" id="preview">
            <div className="preview-header">
              <h2>Preview</h2>
            </div>
            <div className="preview-textarea">
              <textarea name="" id="editor" value={text} onChange={this.handleChange}></textarea>
            </div>
          </div>
          <div className="editor" id="editor">
            <div className="editor-header">
              <h2>Editor</h2>
            </div>
            <div className="editor-textarea">
              <div className="editor-textarea-inner">
                <div dangerouslySetInnerHTML={{__html: markdown}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default App;
