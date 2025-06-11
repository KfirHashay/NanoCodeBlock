export async function copyToClipboard(text: string): Promise<void> {
  if (typeof globalThis.navigator === 'undefined' || !globalThis.navigator.clipboard) {
    return;
  }

  await globalThis.navigator.clipboard.writeText(text);
}
