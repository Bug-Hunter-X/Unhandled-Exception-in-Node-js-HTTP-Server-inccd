const http = require('http');

const server = http.createServer((req, res) => {
  try {
    //Improved error handling
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (error) {
    console.error('Request handling error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

const port = 3000;

//Handle errors appropriately
server.on('error', (err) => {
  console.error('Server error:', err);
  if (err.code === 'EADDRINUSE') {
    console.error('Address in use, pick a different port.');
    process.exit(1);
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});