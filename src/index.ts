import * as fs from 'fs';
import * as path from 'path';
import Redirect from './schemas/Redirect.interface';

const _redirectsPath = path.join(__dirname, '..', 'public', '_redirects');

// Copy template _redirect file to public dir
// Create write stream and get list of links
const _redirects = fs.createWriteStream(_redirectsPath, { flags: 'a' });
const shortcuts = fs.readdirSync(path.join(__dirname, 'links'));

// Append links to file
shortcuts.forEach(file => {
    const shContent = fs.readFileSync(
        path.join(__dirname, 'links', file), 
        { encoding: 'utf8' }
    );
    const sh: Redirect = JSON.parse(shContent);
    _redirects.write(`${sh.from} ${sh.to} ${sh.status ? sh.status : 301 } \n`);
});

// Finish write
_redirects.close();
