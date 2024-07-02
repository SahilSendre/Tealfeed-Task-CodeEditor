import React, { useState, useRef, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import '../CodeEditor.css'; 

const CodeEditor = () => {
  const [code, setCode] = useState(
`import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <h1>Hello world</h1>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
`);
  const codeInputRef = useRef(null);

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <>
    <div className="code-editor-container">
      <textarea
        ref={codeInputRef}
        value={code}
        onChange={handleCodeChange}
        className="code-input"
      />
      <pre className="code-highlight" style={{padding:"0px",fontSize:'15px',borderRadius:'none'}}>
        <code className="language-js">{code}</code>
      </pre>
    </div>
    <div>
      <h1 style={{fontWeight:'500',fontSize:"20px"}}>Code editor using TextArea</h1>
    </div>
    
    </>
  );
};


export default CodeEditor;
