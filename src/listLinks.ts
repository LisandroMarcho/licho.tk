import { readdirSync } from 'fs';
import { join } from 'path';

function listLinks(): string[] {
  return readdirSync(join(__dirname, 'links'));
}

export default listLinks;