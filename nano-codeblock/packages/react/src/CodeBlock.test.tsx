import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { CodeBlock } from './CodeBlock';
import * as core from '@nano-codeblock/core';

vi.mock('@nano-codeblock/core', async () => {
  const actual = await vi.importActual<typeof core>('@nano-codeblock/core');
  return { ...actual, copyToClipboard: vi.fn() };
});

describe('CodeBlock', () => {
  it('renders highlighted code', () => {
    const { container } = render(<CodeBlock code="const x = 1;" lang="javascript" />);
    expect(container).toMatchSnapshot();
  });

  it('copies code when button clicked', () => {
    const spy = core.copyToClipboard as unknown as vi.Mock;
    render(<CodeBlock code="foo" lang="javascript" />);
    screen.getByRole('button', { name: /copy code/i }).click();
    expect(spy).toHaveBeenCalledWith('foo');
  });
});
