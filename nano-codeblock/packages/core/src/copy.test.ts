import { describe, it, expect, vi } from 'vitest';
import { copyToClipboard } from './copy';

describe('copyToClipboard', () => {
  it('writes text to the clipboard', async () => {
    const writeText = vi.fn();
    (
      globalThis as { navigator?: { clipboard: { writeText: (text: string) => Promise<void> } } }
    ).navigator = {
      clipboard: { writeText },
    };

    await copyToClipboard('foo');
    expect(writeText).toHaveBeenCalledWith('foo');
  });
});
