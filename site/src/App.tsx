import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark, github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import 'formelio/dist/index.css';
import * as examples from './examples';
import { TForm } from 'formelio';

const App = () => {
  return (
    <div className="container">
      {Object.values(examples).map((props, i) => (
        <Example key={i} {...props} />
      ))}
    </div>
  );
};

const indent = (code: string, level: number) =>
  code
    .split('\n')
    .map((l) => `${' '.repeat(level)}${l}`)
    .join('\n')
    .trimEnd();

const genSource = ({ fields, initialState }: typeof examples.Basic.source) =>
  `
import React, { useState } from 'react';
import { Form } from 'formelio';

const MyForm = () => {
  const [value, setValue] = useState(${JSON.stringify(initialState)});
  const [isValid, setIsValid] = useState(false);
  const onChange = (value, isValid) => {
    setValue(value);
    setIsValid(isValid);
  };
${indent(fields, 2)}
  return (
    <Form {...{fields, value, onChange}} />
  );
}`.trim();

function Example(props: any) {
  const [value, setValue] = useState(props.source.initialState);
  const [isValid, setIsValid] = useState(false);
  const onChange: TForm<any>['onChange'] = async (value, isValid) => {
    setValue(value);
    setIsValid(isValid);
  };

  return (
    <>
      <h3>{props.title}</h3>
      <p>{props.description}</p>

      <div className="tile is-parent">
        <div className={`tile is-child notification ${props.tileClass} content`}>
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <div style={{ flex: 1, marginBottom: '1em' }}>
              <h4 className="subtitle">
                Form
                <div style={{ float: 'right', fontSize: 'x-small' }}>
                  <button onClick={() => setValue({})}>CLEAR</button>
                </div>
              </h4>
              <props.Component onChange={onChange} value={value} />
            </div>
            <div style={{ flex: 0 }}>
              <h4>State</h4>
              <SyntaxHighlighter language="javascript" style={props.tileClass === 'is-dark' ? dark : github}>
                {JSON.stringify({ isValid, value }, null, 2)}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
        <div
          className="tile is-child notification is-light content"
          style={{ borderRadius: 0, overflow: 'hidden', padding: '1em', flexDirection: 'column' }}
        >
          <h4>Source code</h4>
          <SyntaxHighlighter language="javascript" style={github}>
            {genSource(props.source)}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
}

export default App;
