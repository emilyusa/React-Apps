const fs=require("fs");
const debug = require('debug')('get-address');

debug('Testing debug');

function readFile(fileName, callback) {
    'use strict';

    return new Promise(function(resolve, reject) {
        fs.readFile(fileName, 'utf8', function(err, fileContents) {
            if (err) {
                reject(err);
            }
            resolve({
                'result': fileContents
            });
        });
    });
}

function getAddress(value, char) {
    'use strict';
    return value.substring(0, value.lastIndexOf(char) -1);
}

function getZip(value, char) {
    'use strict';
    // YOU WRITE IT
    // ITS THE SAME SINGLE CALL AS GET ADDRESS, BUT INDEXES ARE DIFFERENT
    // UNCOMMENT NEXT LINE AND MODIFY IT
    // return value.substring(WHAT GOES HERE?, WHAT GOES HERE?);
}

function getCity(value, char, len) {
    'use strict';
    const start = value.lastIndexOf(char);
    return value.substring(start, start + len);
}

function writeIt(label, value, noComma) {
    const comma = noComma ? '"' : '",';
    console.log('\t\t' + '"' + label + '": ' + '"' + value + comma);
};

readFile('govtrack-address.json')
    .then(function(objectReturned) {
        debug('We don\'t get a string back but an: ', typeof objectReturned);
        debug('The object has a property:', Object.keys(objectReturned));
        debug('The type of the property is:', typeof objectReturned.result);

        var json = JSON.parse(objectReturned.result);
        debug('We were able to parse the JSON.');
        debug('Total records returned:', json.meta.limit);
        debug('First person found', JSON.stringify(json.objects[0].person.name));
        const jsonLength = json.objects.length;
        for (var i = 0; i < jsonLength; i++) {
            const open = (i === 0) ? '[\n\t{' : '\t{';
            console.log(open);
            writeIt('firstName', json.objects[i].person.firstname);
            writeIt('lastName', json.objects[i].person.lastname);
            writeIt('street', getAddress(json.objects[i].extra.address, 'W'));
            writeIt('city', getCity(json.objects[i].extra.address, 'W', 13));
            writeIt('state', json.objects[i].state);
            writeIt('zip', getZip(json.objects[i].extra.address, ' '));
            writeIt('phone', json.objects[i].phone);
            writeIt('website', json.objects[i].website);
            writeIt('email', '');
            writeIt('contact', json.objects[i].extra.contact_form || '', true);
            const close = i < jsonLength - 1 ? '\t},' : '\t}\n]';
            console.log(close);
        }
        debug('all done');
    })
    .catch(function(e) {
        console.log(e);
    });