import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { highlight, copyToClipboard, Theme, Token } from '@nano-codeblock/core';

@customElement('code-block')
export class CodeBlock extends LitElement {
  @property({ type: String }) code = '';
  @property({ type: String }) lang = '';
  @property({ type: String }) theme: Theme = Theme.dracula;
  @property({ type: Boolean }) private fade = false;

  private get lines(): Token[][] {
    return highlight(this.code, this.lang);
  }

  private handleCopy() {
    void copyToClipboard(this.code);
  }

  connectedCallback() {
    super.connectedCallback();
    this.fade = true;
  }

  render() {
    const lines = this.lines;
    return html`<pre class="cb ${this.theme}">
      <button type="button" class="cb-copy" @click=${this
      .handleCopy} aria-label="Copy code">Copy</button>
      <code class=${this.fade ? 'cb-fade-in' : ''}>
        ${lines.map(
      (line, i) =>
        html`<span class="cb-line">
          ${line.map((t) => html`<span class="cb-${t.type}">${t.content}</span>`)}${i <
          lines.length - 1
            ? '\n'
            : ''}
        </span>`
    )}
      </code>
    </pre>`;
  }
}

export type { Token } from '@nano-codeblock/core';
