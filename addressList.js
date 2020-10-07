const fs = require('fs');

function gatherInfo() {
    fs.readFile('addressList.json', 'utf-8', (err, info) => {
        if(err) throw err;
        else if(!info.data) {
            console.log('There is no data in the file!!!');
        }
    })
}