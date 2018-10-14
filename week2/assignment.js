const fs = require('fs');

function fs_writeFile(fileName, data)
{
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, (err) => {
            if (err)
            {
                reject(err);
            }
            else
            {
                console.log(fileName + " created.");
                resolve(data);
            }
        });
    });
}
function fs_readFile(fimeName, type)
{
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, type, (err, data) => {
            err ? reject(err) : resolve(data);
        });
    });
}

fs.readFile('./1.txt','UTF-8', function(err,data1) {
    fs.writeFile('./2.txt',data1 + '22222', function(err) {
        console.log('2.txt created');
        fs.readFile('./2.txt','UTF-8', function(err,data2) {
            fs.writeFile('./3.txt',data2 + '33333', function(err) {
                console.log('3.txt created');
                fs.readFile('./3.txt','UTF-8', function(err,data3) {
                    console.log(data3);
                });
            });
        });
    });
});

fs_writeFile('./1.txt', '11111')
    .then(() => { return fs_readFile('./1.txt', "UTF-8") })
    .catch((err) => { console.log("Error!") })

    .then((data1) => { return fs_writeFile('./2.txt', data1 + '22222') })
    .catch((err) => { console.log("Error") })
    
    .then(() => { return fs_readFile('./2.txt', 'UTF-8')})
    .catch((err) => { console.log("Error") })

    .then((data2) => { return fs_writeFile('./3.txt', data2 + '33333') })
    .catch((err) => { console.log("Error") })

    .then (() => { return fs_readFile('./3.txt', "UTF-8") })
    .catch((err) => { console.log("Error") });