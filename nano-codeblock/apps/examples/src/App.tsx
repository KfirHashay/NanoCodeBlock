import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Layout } from '@nano-codeblock/ui';
import ReactDemo from './routes/ReactDemo';
import VueDemo from './routes/VueDemo';
import SvelteDemo from './routes/SvelteDemo';
import SolidDemo from './routes/SolidDemo';
import WebDemo from './routes/WebDemo';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <nav className="bg-gray-100 p-4 space-x-4">
          <Link to="/react">React</Link>
          <Link to="/vue">Vue</Link>
          <Link to="/svelte">Svelte</Link>
          <Link to="/solid">Solid</Link>
          <Link to="/web">Web</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ReactDemo />} />
          <Route path="/react" element={<ReactDemo />} />
          <Route path="/vue" element={<VueDemo />} />
          <Route path="/svelte" element={<SvelteDemo />} />
          <Route path="/solid" element={<SolidDemo />} />
          <Route path="/web" element={<WebDemo />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
