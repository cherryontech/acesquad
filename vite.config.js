import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'

// ! will need to update when we add BE

export default defineConfig({
    plugins: [react()],
    root: "src"
});