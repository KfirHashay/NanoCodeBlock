<template>
  <pre :class="`cb ${appliedTheme}`">
    <button type="button" class="cb-copy" @click="handleCopy" aria-label="Copy code">Copy</button>
    <code ref="codeEl">
      <span v-for="(line, i) in lines" :key="i" class="cb-line">
        <span v-for="(token, j) in line" :key="j" :class="`cb-${token.type}`">{{ token.content }}</span><template v-if="i < lines.length - 1">\n</template>
      </span>
    </code>
  </pre>
</template>

<script setup lang="ts">
import { highlight, Theme, copyToClipboard, Token } from '@nano-codeblock/core';
import { computed, ref, onMounted } from 'vue';

const props = defineProps<{ code: string; lang: string; theme?: Theme }>();

const lines = computed<Token[][]>(() => highlight(props.code, props.lang));
const appliedTheme = computed(() => props.theme ?? Theme.dracula);
const codeEl = ref<HTMLElement | null>(null);

onMounted(() => {
  codeEl.value?.classList.add('cb-fade-in');
});

function handleCopy() {
  void copyToClipboard(props.code);
}
</script>
