import React from 'react';
import { highlight, Theme, copyToClipboard, Token } from '@nano-codeblock/core';

export interface CodeBlockProps {
  code: string;
  lang: string;
  theme?: Theme;
}

export function CodeBlock({ code, lang, theme = Theme.dracula }: CodeBlockProps) {
  const lines = React.useMemo<Token[][]>(() => highlight(code, lang), [code, lang]);

  const handleCopy = React.useCallback(() => {
    void copyToClipboard(code);
  }, [code]);

  return (
    <pre className={`cb ${theme}`}> 
      <button type="button" onClick={handleCopy} aria-label="Copy code" className="cb-copy">
        Copy
      </button>
      <code>
        {lines.map((line, i) => (
          <span key={i} className="cb-line">
            {line.map((token, j) => (
              <span key={j} className={`cb-${token.type}`}>{token.content}</span>
            ))}
            {i < lines.length - 1 && '\n'}
          </span>
        ))}
      </code>
    </pre>
  );
}
