import { register } from 'node:module';
import { pathToFileURL } from 'node:url';

// Register ts-node ESM loader
register('ts-node/esm', pathToFileURL('./'));

// Now import your main server
import('./src/server.ts');
