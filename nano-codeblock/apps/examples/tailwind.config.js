/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../../packages/ui/tailwind.preset.js')],
  content: [
    './index.html',
    './src/**/*.{ts,tsx,vue,svelte,js,jsx}'
  ]
};
