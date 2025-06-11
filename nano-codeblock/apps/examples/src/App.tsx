import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Layout } from '@nano-codeblock/ui';
import ReactDemo from './routes/ReactDemo';
import VueDemo from './routes/VueDemo';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <nav className="bg-gray-100 p-4 space-x-4">
          <Link to="/react">React</Link>
          <Link to="/vue">Vue</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ReactDemo />} />
          <Route path="/react" element={<ReactDemo />} />
          <Route path="/vue" element={<VueDemo />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
