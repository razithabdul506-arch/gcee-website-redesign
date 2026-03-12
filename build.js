const { execSync } = require('child_process');
try {
  console.log('Starting npm install...');
  execSync('npm install --legacy-peer-deps', { stdio: 'inherit', shell: true });
  console.log('Finished npm install. Starting build...');
  execSync('npm run build', { stdio: 'inherit', shell: true });
  console.log('Build successful.');
} catch (e) {
  console.error('Error during build:', e.message);
}
