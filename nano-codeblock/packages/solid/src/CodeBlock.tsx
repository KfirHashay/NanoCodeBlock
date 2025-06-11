import { For, Component, createMemo, createSignal, onMount } from 'solid-js';
import { highlight, Theme, copyToClipboard, Token } from '@nano-codeblock/core';

export interface CodeBlockProps {
  code: string;
  lang: string;
  theme?: Theme;
}

export const CodeBlock: Component<CodeBlockProps> = (props) => {
  const lines = createMemo<Token[][]>(() => highlight(props.code, props.lang));
  const [fadeIn, setFadeIn] = createSignal(false);

  onMount(() => setFadeIn(true));

  const handleCopy = () => {
    void copyToClipboard(props.code);
  };

  return (
    <pre class={`cb ${props.theme ?? Theme.dracula}`}>
      <button type="button" onClick={handleCopy} aria-label="Copy code" class="cb-copy">
        Copy
      </button>
      <code classList={{ 'cb-fade-in': fadeIn() }}>
        <For each={lines()}>{(line, i) => (
          <span class="cb-line">
            <For each={line}>{(token) => <span class={`cb-${token.type}`}>{token.content}</span>}</For>
            {i() < lines().length - 1 && '\n'}
          </span>
        )}</For>
      </code>
    </pre>
  );
};
