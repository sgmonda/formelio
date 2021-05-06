import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark, github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import 'formelio/dist/index.css';
import { TForm } from 'formelio';
import stringify from 'json-stringify-pretty-compact';
import cl from 'classnames';

import Login from './Login';
import Basic from './Basic';
import Other from './Other';
import Dynamic from './Dynamic';
import Markdown from '../Markdown';

const EXAMPLES = [Login, Basic, Other, Dynamic];

const Examples = () => {
  return (
    <div className="container">
      {EXAMPLES.map((props, i) => (
        <Example key={i} {...props} />
      ))}
    </div>
  );
};

const Example = (props: any) => {
  const [isValid, setIsValid] = useState(false);
  const [value, setValue] = useState(props.source.initialState);
  const [theme, setTheme] = useState(props.tileClass || 'is-light');

  const onChange: TForm<any>['onChange'] = async (value, isValid) => {
    setValue(value);
    setIsValid(isValid);
  };

  return (
    <div className="content" style={{ marginBottom: '5em' }}>
      {props.title && (
        <h3>
          <Markdown text={props.title} />
        </h3>
      )}
      {props.description && (
        <p>
          <Markdown text={props.description} />
        </p>
      )}
      <div className="columns">
        <div className="column" style={{ display: 'flex', overflow: 'auto' }}>
          <div className={`notification ${theme} is-light`} style={{ flex: 1 }}>
            <div style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ flex: 1 }}>
                <div className="tabs is-centered">
                  <ul style={{ margin: 0 }}>
                    {['light', 'dark'].map((the) => (
                      <li key={the} className={cl({ 'is-active': theme === `is-${the}` })}>
                        <a style={{ textDecoration: 'none' }} onClick={() => setTheme(`is-${the}`)}>
                          {the}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <props.Component onChange={onChange} value={value} />
              </div>
              <div style={{ overflow: 'auto', marginTop: '2em' }}>
                <SyntaxHighlighter language="javascript" style={theme === 'is-dark' ? dark : github}>
                  {'// State\n\n' + stringify({ isValid, value }, { indent: 2, maxLength: 50 })}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
        <div className="column" style={{ overflow: 'auto', display: 'flex' }}>
          <SyntaxHighlighter language="javascript" style={{ ...github, flex: 1 }}>
            {`// Source code\n\n` + genSource(props.source)}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

const genSource = ({ fields, initialState }: typeof Basic.source) =>
  `
import React, { useState } from 'react';
import { Form } from 'formelio';

const MyForm = () => {
  const [isValid, setIsValid] = useState(false);
  const [value, setValue] = useState(${indent(stringify(initialState, { indent: 2, maxLength: 120 }), 2).trim()});
  const onChange = (value, isValid) => {
    setValue(value);
    setIsValid(isValid);
  };
  const fields = ${indent(stringify(fields, { indent: 2, maxLength: 120 }), 2).trim()};
  return (
    <Form {...{fields, value, onChange}} />
  );
}`.trim();

const indent = (code: string, level: number) =>
  code
    .split('\n')
    .map((l) => `${' '.repeat(level)}${l}`)
    .join('\n')
    .trimEnd();

export default Examples;
