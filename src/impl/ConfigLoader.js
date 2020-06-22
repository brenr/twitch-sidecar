import fs from 'fs';
import ini from 'ini';

export default class ConfigLoader {

    static get() {
        return ini.parse(fs.readFileSync('config.ini', 'utf-8'));
    }
}