import {defineConfig, resolveEnvPrefix} from "vite";
import react from  '@vitejs/plugin-react'
import envCompatible from 'vite-plugin-env-compatible';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
export default defineConfig(
    {
      envPrefix: 'REACT_APP_',
      resolve: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
        },
      },
        plugins: [
            react(),
            envCompatible(),
           tsconfigPaths(),
          ],
        build:{
            sourcemap:true,
            outDir: 'build',
        }
        ,server:{
            port: 4200,
        }
    }
)