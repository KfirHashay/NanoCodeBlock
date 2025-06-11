'use client';
import React from 'react';
import { CodeBlock } from '@nano-codeblock/react';

export default function Playground() {
  const code = `console.log('Hello, world!')`;
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Playground</h2>
      <CodeBlock code={code} lang="ts" />
    </div>
  );
}
