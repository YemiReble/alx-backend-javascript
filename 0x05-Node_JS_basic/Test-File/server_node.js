// Read: https://nodejs.org/en/docs/guides/getting-started-guide?utm_medium=email&_hsmi=76273761&_hsenc=p2ANqtz-9-HaUa98mu3ZaeQG85gS9yXl0MpZ4cluomw74k9XGmCLzzilCOk0WR45AZ3mGiQ4geWE1h7emCLC0jvWk_hXINPIUQkOCJDGYT1S24dEZjTgHXpb8&utm_content=76273761&utm_source=hs_automation
const http = require('http');
 
const hostname = '127.0.0.1';
const port = 3000;

const msg = {'message': 'Server is running fine', 'status': 200} 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // res.end('msg': 'somecode');
  res.end('Hello World');
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
