import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const dataPath = fileURLToPath(new URL('./swagger.json', import.meta.url));
export const swagger = JSON.parse(await readFile(dataPath, 'utf-8'));
