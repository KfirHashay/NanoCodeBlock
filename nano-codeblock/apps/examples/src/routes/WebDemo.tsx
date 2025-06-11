import React from 'react';
import '@nano-codeblock/web';
import { motion } from 'framer-motion';

export default function WebDemo() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <code-block code="console.log('Web Component!')" lang="javascript"></code-block>
    </motion.div>
  );
}
