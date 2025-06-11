import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-800 p-4 text-white mt-auto text-sm text-center">
      <p>&copy; {new Date().getFullYear()} NanoCodeBlock</p>
    </footer>
  );
}
