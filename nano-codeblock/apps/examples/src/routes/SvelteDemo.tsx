import React, { useEffect, useRef } from 'react';
import { CodeBlock as SvelteCodeBlock } from '@nano-codeblock/svelte';
import { motion } from 'framer-motion';

export default function SvelteDemo() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const component = new SvelteCodeBlock({
      target: ref.current!,
      props: { code: "console.log('Svelte!')", lang: 'javascript' },
    });
    return () => component.$destroy();
  }, []);

  return <motion.div ref={ref} initial={{ opacity: 0 }} animate={{ opacity: 1 }} />;
}
