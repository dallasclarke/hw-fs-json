// const { EEXIST } = require('constants');
const fs = require('fs');

function gatherInfo() {
    console.log('*****Address List*****')
    fs.readFile('addressList.json', 'utf-8', (err, info) => {
        // console.log(info)
        if(err) return console.log(err);
        else if(!info) {
            console.log('There is no data in the file!!!');
        }
        else {
            fs.readFile('addressList.json', 'utf-8', (err, info) => {
                if(err) return console.log(err);
                const data = JSON.parse(info);
                // console.log(data)
                let newData = '';
                data.forEach((info) => {
                    let {
                        name,
                        email,
                        address: {street, suite, city, zipcode},
                        phone
                    } = info

                    newData += 
                    `\n${name}\n
                    Address: ${street}, ${suite}
                    ${city}, ${zipcode}
                    Phone: ${phone}
                    Email: ${email}`
                    
                })
                fs.writeFile('addressList.txt', newData, (err) => {
                    if (err) return console.log(err);
                    console.log('Data saved to file')
                })
            })
            
        }
        
    })
}
gatherInfo()