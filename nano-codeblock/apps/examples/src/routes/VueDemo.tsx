import React, { useEffect, useRef } from 'react';
import { createApp, h } from 'vue';
import { CodeBlock } from '@nano-codeblock/vue';
import { motion } from 'framer-motion';

export default function VueDemo() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const app = createApp({
      render: () => h(CodeBlock, { code: "console.log('Vue!')", lang: 'javascript' })
    });
    app.mount(ref.current!);
    return () => app.unmount();
  }, []);

  return <motion.div ref={ref} initial={{ opacity: 0 }} animate={{ opacity: 1 }} />;
}
