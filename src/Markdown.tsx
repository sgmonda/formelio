import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const LinkRenderer = (props: any) => (
  <a href={props.href} target="_blank" rel="noopener noreferrer">
    {props.children}
  </a>
);

const Markdown = (props: { text: string; inline?: boolean }) => (
  <ReactMarkdown
    disallowedElements={props.inline ? ['p'] : []}
    unwrapDisallowed
    rehypePlugins={[rehypeRaw]}
    components={{ a: LinkRenderer }}
  >
    {props.text}
  </ReactMarkdown>
);

export default Markdown;
