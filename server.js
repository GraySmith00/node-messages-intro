const http = require('http');
const url = require('url');
const server = http.createServer();

let messages = [
  { id: 1, user: 'brittany storoz', message: 'hi there!' },
  { id: 2, user: 'bob loblaw', message: 'check out my law blog' },
  { id: 3, user: 'lorem ipsum', message: 'dolor set amet' }
];
