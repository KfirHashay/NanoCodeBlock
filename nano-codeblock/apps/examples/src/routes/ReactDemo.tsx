import React from 'react';
import { CodeBlock } from '@nano-codeblock/react';
import { motion } from 'framer-motion';

export default function ReactDemo() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="text-2xl font-bold">React</div>
      <CodeBlock code={`console.log('React!')`} lang="javascript" />
    </motion.div>
  );
}
