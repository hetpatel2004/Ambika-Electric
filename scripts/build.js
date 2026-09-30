import { build } from 'vite';
import fs from 'fs';
import path from 'path';

console.log('⚡ Starting Ambika Electric production build via Vite API...');

try {
  // Run Vite build programmatically (zero shell or cmd.exe dependencies)
  await build();

  // Ensure both 'dist' and 'build' exist for universal hosting compatibility
  const distDir = path.resolve('dist');
  const buildDir = path.resolve('build');

  if (fs.existsSync(distDir)) {
    if (!fs.existsSync(buildDir)) {
      fs.mkdirSync(buildDir, { recursive: true });
    }
    fs.cpSync(distDir, buildDir, { recursive: true, force: true });
    console.log('✅ Mirrored build artifacts to both "dist/" and "build/".');
  }

  console.log('🚀 Ambika Electric build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error);
  process.exit(1);
}
