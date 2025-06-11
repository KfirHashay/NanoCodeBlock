import React, { useEffect, useRef } from 'react';
import { render } from 'solid-js/web';
import { CodeBlock } from '@nano-codeblock/solid';
import { motion } from 'framer-motion';

export default function SolidDemo() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    render(() => <CodeBlock code={`console.log('Solid!')`} lang="javascript" />, ref.current!);
  }, []);

  return <motion.div ref={ref} initial={{ opacity: 0 }} animate={{ opacity: 1 }} />;
}
