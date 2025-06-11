import { describe, it, expect } from 'vitest';
import { highlight } from './highlight';

const snippets: Record<string, string> = {
  javascript: 'const x = 1;\nconsole.log(x);',
  typescript: 'const x: number = 1;\nconsole.log(x);',
  bash: 'echo "hello"',
  json: '{"a":1}',
};

describe('highlight', () => {
  for (const [lang, code] of Object.entries(snippets)) {
    it(`tokenizes ${lang}`, () => {
      expect(highlight(code, lang)).toMatchSnapshot();
    });
  }
});
