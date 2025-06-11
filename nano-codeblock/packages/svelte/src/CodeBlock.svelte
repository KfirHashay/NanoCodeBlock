<script lang="ts">
  import { highlight, Theme, copyToClipboard, Token } from '@nano-codeblock/core';

  export let code: string;
  export let lang: string;
  export let theme: Theme = Theme.dracula;

  let lines: Token[][] = [];
  $: lines = highlight(code, lang);

  function handleCopy() {
    void copyToClipboard(code);
  }
</script>

<pre class={`cb ${theme}`}> 
  <button type="button" class="cb-copy" on:click={handleCopy} aria-label="Copy code">Copy</button>
  <code>
    {#each lines as line, i}
      <span class="cb-line">
        {#each line as token}
          <span class={`cb-${token.type}`}>{token.content}</span>
        {/each}{#if i < lines.length - 1}
        \n{/if}
      </span>
    {/each}
  </code>
</pre>
