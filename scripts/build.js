import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('⚡ Starting Ambika Electric production build...');

try {
  // 1. Run vite build
  execSync('npx vite build', { stdio: 'inherit' });

  // 2. Ensure both 'dist' and 'build' exist so any deployment platform (Vite or CRA presets) finds the output
  const distDir = path.resolve('dist');
  const buildDir = path.resolve('build');

  if (fs.existsSync(distDir)) {
    if (!fs.existsSync(buildDir)) {
      fs.mkdirSync(buildDir, { recursive: true });
    }
    fs.cpSync(distDir, buildDir, { recursive: true, force: true });
    console.log('✅ Mirrored build artifacts to both "dist/" and "build/" for universal platform compatibility.');
  }

  console.log('🚀 Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error);
  process.exit(1);
}
