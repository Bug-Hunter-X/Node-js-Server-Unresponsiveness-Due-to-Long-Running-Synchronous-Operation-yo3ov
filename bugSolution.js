const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running task using setImmediate to avoid blocking
  let count = 0;
  function longRunningTask(){
    for (let i = 0; i < 1000000000; i++) {
      count++;
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
  }
  setImmediate(longRunningTask);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});