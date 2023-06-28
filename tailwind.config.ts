/** @type {import('tailwindcss').Config} */
import { shadcnPlugin } from './lib/shadcn-plugin';
import type { Config } from 'tailwindcss';
import { shadcnPreset } from './lib/shadcn-preset';
const config = {
  presets: [shadcnPreset],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],

  // plugins: [require('tailwindcss-animate'), shadcnPlugin],
} satisfies Config;
export default config;
