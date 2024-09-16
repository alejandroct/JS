const fs = require('fs');
const http = require('http');
const url = require('url');

//////////////////////////////////////////
////////FILES
//BLOCKING, SYNCHRONOUS WAY


 const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
 console.log(textIn);

 const textOut = `This is what we know about the avocado: ${textIn}. \nCreated on: ${Date.now()}`;
 fs.writeFileSync('./txt/output.txt',textOut);
 console.log('Written!');
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}.`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written!');

//NON-BLOCKING, ASYNCHRONOUS WAY

// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   if (err) return console.log('ERROR!!!');
//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);
//     fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//       console.log(data3);

//       fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf8', err => {
//         console.log('Your file is written!');
//       });
//     });
//   });
// });
// console.log('Will read file!');
//////////////////////////////////////////
////////SERVER................
// const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
// const dataObject = JSON.parse(data);

// const server = http.createServer((req, res) => {
//   const pathName = req.url;
//   if (pathName === '/' || pathName === '/overview') {
//     res.end('Hello from the OVERVIEW');
//   } else if (pathName === '/product') {
//     res.end('Hello from the PRODUCT');
//   } else if (pathName === '/api') {
//     res.writeHead(200, { 'Content-type': 'application/json' });
//     res.end(data);
//   } else if (pathName === '/api/product/0') {
//     res.writeHead(200, { 'Content-type': 'application/json' });
//     res.end(dataObject[0].productName);
//   } else if (pathName === '/api/product/1') {
//     res.writeHead(200, { 'Content-type': 'application/json' });
//     res.end(dataObject[1].productName);
//   } else if (pathName === '/api/product/2') {
//     res.writeHead(200, { 'Content-type': 'application/json' });
//     res.end(dataObject[2].productName);
//   } else if (pathName === '/api/product/3') {
//     res.writeHead(200, { 'Content-type': 'application/json' });
//     res.end(dataObject[3].productName);
//   } else if (pathName === '/api/product/4') {
//     res.writeHead(200, { 'Content-type': 'application/json' });
//     res.end(dataObject[4].productName);
//   } else if (pathName === '/api/client/1') {
//   } else {
//     res.writeHead(404, {
//       'Content-type': 'text/html',
//       'my-own-header': 'hello world',
//     });
//     res.end('<h1>Page not found</h1>');
//   }
// });

// server.listen(8000, '127.0.0.1', () => {
//   console.log('Listening to requests on port 8000');
// });
