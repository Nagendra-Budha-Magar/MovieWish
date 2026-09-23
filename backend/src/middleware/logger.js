import {appendFile} from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// This is ESM way to do direname functionality
const _filename = fileURLToPath(import.meta.url);   // Yesley web address lai pc path ma convert garxa
const _direname = dirname(_filename);   // Yesley chai tyo specific file(_filename) jun folder ma located xa tyo folder ko directory dinxa

const logfile = join(_direname, "..", "logs", "server.log") // Yesley final path banauxa

export function logger(req, res) {
    const log = `[${new Date()}] ${req.method} request received at ${req.url} \n `
    appendFile(logfile, log, (err) => {
        if(err) console.log(err);
    });
}
