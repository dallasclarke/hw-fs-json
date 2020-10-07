const axios = require('axios');
const fs = require('fs');
const url = 'https://jsonplaceholder.typicode.com/users';

async function getData(url) {
    try {
        const response = await axios.get(url);
        const data = await response.data;
        const newData = await JSON.stringify(data);
        fs.writeFile('addressList.json', newData, (err) => {
            if(err) throw(err);
            console.log('addressList.json created successfully');
        })
    }
    catch(err) {
        console.log('Something went wrong!');
    }
};
getData(url);