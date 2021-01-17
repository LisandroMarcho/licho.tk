import { createWriteStream, readdirSync, readFileSync } from 'fs';
import * as path from 'path';
import { Redirect, validate } from './validator/Redirect.validator';

const _redirectsPath = path.join(__dirname, '..', 'public', '_redirects');

// Create write stream and get list of links
const _redirects = createWriteStream(_redirectsPath, { flags: 'w' });
const shortcuts = readdirSync(path.join(__dirname, 'links'));

// Append links to file
shortcuts.forEach(file => {
  const shContent = readFileSync(
    path.join(__dirname, 'links', file),
    { encoding: 'utf8' }
  );

  const sh: Redirect = JSON.parse(shContent);
  if(validate(sh))
    _redirects.write(`${sh.from} ${sh.to} ${sh.status ?? 301} \n`);
  else throw new Error(`Syntax error in ${file}`);
});

// Finish write
_redirects.close();
