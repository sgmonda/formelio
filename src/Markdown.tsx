const Markdown = (props: { text: string; inline?: boolean }) => {
  const html = props.text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Markdown;
