import Prism from 'prismjs';

// ensure Prism is attached to global scope for language modules
if (typeof globalThis !== 'undefined') {
  (globalThis as unknown as { Prism: typeof Prism }).Prism = Prism;
}

// load only required languages
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';

export type Token = {
  content: string;
  type: string;
};

function normalizeTokens(tokens: (string | Prism.Token)[]): Token[] {
  return tokens.map((token) => {
    if (typeof token === 'string') {
      return { content: token, type: 'plain' };
    }
    return { content: String(token.content), type: token.type };
  });
}

function splitTokens(tokens: (string | Prism.Token)[]): Token[][] {
  const lines: Token[][] = [[]];

  for (const token of tokens) {
    if (typeof token === 'string') {
      const parts = token.split(/\n/);
      lines[lines.length - 1].push({ content: parts[0], type: 'plain' });
      for (let i = 1; i < parts.length; i++) {
        lines.push([]);
        if (parts[i]) {
          lines[lines.length - 1].push({ content: parts[i], type: 'plain' });
        }
      }
    } else {
      const value = token.content;
      const content = typeof value === 'string' ? value : String(value);
      lines[lines.length - 1].push({ content, type: token.type });
    }
  }

  return lines.map(normalizeTokens);
}

export function highlight(code: string, lang: string): Token[][] {
  const grammar = Prism.languages[lang] ?? Prism.languages.javascript;
  const rawTokens = Prism.tokenize(code, grammar);
  return splitTokens(rawTokens);
}
