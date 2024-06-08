import { defineConfig } from 'vite';
import { resolve } from 'path';

// Define the root directory for ease of reference
const rootDir = resolve(__dirname, "starter-code");

export default defineConfig({
    root: rootDir,  // This should be the directory, not the file
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg', '**/*.json'],
    server: {
        open: 'index.html',  // Opens the root of the server, usually index.html
    },

    build: {
        outDir: resolve(rootDir, "dist"),
        publicDir: resolve(rootDir, "public"),
        rollupOptions: {
            input: resolve(rootDir, "index.html"),
        }
    }
});