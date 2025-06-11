/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('./nano-codeblock/packages/ui/tailwind.preset.js')],
  content: [
    './nano-codeblock/apps/**/*.{js,ts,jsx,tsx}',
    './nano-codeblock/packages/ui/src/**/*.{js,ts,jsx,tsx}'
  ]
};
