const http = require('http');
const cal1 = require("./calc1");
const cal2 = require("./calc2");
const cal3 = require("./calc3");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`1 + 1 = ${cal1.add(1, 1)}\n` + 
            `2 - 10 = ${cal2.sub(2, 10)}\n` +
            `3 * 7 = ${cal3.mul(3, 7)}\n` +
            `2 / 10 = ${cal3.div(2, 10)}\n` +
            `10 % 3 = ${cal1.mod(10, 3)}\n` +
            `5 % 2 = ${cal2.mod(5, 2)}\n` + 
            `16 % 2 = ${cal3.mod(16, 2)}\n`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});