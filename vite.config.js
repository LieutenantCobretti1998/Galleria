import { defineConfig } from 'vite';
import { resolve } from 'path';

// Define the root directory for ease of reference
const rootDir = resolve(__dirname, "starter-code");

export default defineConfig({
    root: "starter-code",  // This should be the directory, not the file
    server: {
        open: '/',  // Opens the root of the server, usually index.html
    },
});