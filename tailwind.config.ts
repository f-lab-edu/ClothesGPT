/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';
import { shadcnPreset } from './lib/shadcn-preset';

const config = {
  presets: [shadcnPreset],
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './modules/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
} satisfies Config;
export default config;
