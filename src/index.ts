import * as fs from 'fs';
import * as path from 'path';
import Redirect from './schemas/Redirect.interface';

const originRedirect = path.join(__dirname, '_redirect');
const resultRedirect = path.join(__dirname, '..', 'public', '_redirect');

fs.mkdirSync('public');
// Copy template _redirect file to public dir
fs.copyFileSync(originRedirect, resultRedirect);

// Create write stream and get list of links
const _redirect = fs.createWriteStream(resultRedirect, { flags: 'a' });
const shortcuts = fs.readdirSync(path.join(__dirname, 'links'));

// Append links to file
shortcuts.forEach(file => {
    const shContent = fs.readFileSync(
        path.join(__dirname, 'links', file), 
        { encoding: 'utf8' }
    );
    const sh: Redirect = JSON.parse(shContent);
    _redirect.write(`${sh.from} ${sh.to} ${sh.status ? sh.status : 301 } \n`);
});

// Finish write
_redirect.close();
