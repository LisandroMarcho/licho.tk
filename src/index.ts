import { createWriteStream } from 'fs';
import { join } from 'path';
import listLinks from './listLinks';
import parseLink from './parseLink';

const _redirectsPath = join(__dirname, '..', 'public', '_redirects');
const _redirects = createWriteStream(_redirectsPath, { flags: 'w' });

const linksToRead = listLinks();

linksToRead.forEach(file => {
  const shortcut = parseLink(file);
  if(!shortcut) return;
  _redirects.write(`/${shortcut.from} ${shortcut.to} ${shortcut.status} \n`);
});

_redirects.close();
