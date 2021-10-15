const util = require('util');
const fs = require('fs');

const read = util.promisify(fs.readFile);

const readAppend = (info, file) => {
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedInfo = JSON.parse(data);
            parsedInfo.push(info);
            writeToFile(file, parsedInfo);
        }
    });
};

const writeToFile = (fin, conts) =>
    fs.writeFile(fin, JSON.stringify(conts, null, 4), (err) =>
        err ? console.error(err) : console.info(`Contents written to ${fin}`)
);

module.exports = {read, readAppend, writeToFile};