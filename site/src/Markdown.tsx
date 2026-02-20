import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const Markdown = (props: { text: string; inline?: boolean }) => (
  <ReactMarkdown
    rehypePlugins={[rehypeRaw]}
    unwrapDisallowed
    disallowedElements={props.inline ? ['p'] : []}
    components={{
      a: ({ href, children }) => (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
    }}
  >
    {props.text}
  </ReactMarkdown>
);

export default Markdown;
