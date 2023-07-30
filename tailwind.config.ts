/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';
import { shadcnPreset } from './lib/shadcn-preset';

const config = {
  presets: [shadcnPreset],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './utils/**/*.{ts,tsx}',
  ],
} satisfies Config;
export default config;
