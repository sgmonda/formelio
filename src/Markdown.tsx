import React from "react";
import ReactMarkdownWithHtml from 'react-markdown/with-html';

const LinkRenderer = (props: any) => (
  <a href={props.href} target='_blank' rel='noreferrer'>
    {props.children}
  </a>
);

const Markdown = (props: { text: string }) => (
  <ReactMarkdownWithHtml
    disallowedTypes={['paragraph']}
    allowDangerousHtml
    unwrapDisallowed
    renderers={{ link: LinkRenderer }}
  >
    {props.text}
  </ReactMarkdownWithHtml>
);

export default Markdown;
