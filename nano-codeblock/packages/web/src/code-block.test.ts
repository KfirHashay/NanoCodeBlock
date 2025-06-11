/* eslint-env browser */
/* eslint-disable no-undef */
import { describe, it, expect, vi } from 'vitest';
import { fireEvent } from '@testing-library/dom';
import * as core from '@nano-codeblock/core';
import { CodeBlock } from './code-block';

vi.mock('@nano-codeblock/core', async () => {
  const actual = await vi.importActual<typeof core>('@nano-codeblock/core');
  return { ...actual, copyToClipboard: vi.fn() };
});

describe('CodeBlock', () => {
  it('renders highlighted code', async () => {
    const el = document.createElement('code-block') as CodeBlock;
    el.code = 'const x = 1;';
    el.lang = 'javascript';
    document.body.appendChild(el);
    await el.updateComplete;
    expect(el.shadowRoot?.innerHTML).toMatchSnapshot();
  });

  it('copies code when button clicked', async () => {
    const spy = core.copyToClipboard as unknown as vi.Mock;
    const el = document.createElement('code-block') as CodeBlock;
    el.code = 'foo';
    el.lang = 'javascript';
    document.body.appendChild(el);
    await el.updateComplete;
    const button = el.shadowRoot!.querySelector('button')!;
    await fireEvent.click(button);
    expect(spy).toHaveBeenCalledWith('foo');
  });
});
