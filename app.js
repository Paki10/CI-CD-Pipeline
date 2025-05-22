const http = require('http');
const port = 4586;

const requestHandler = (req, res) => {
  res.end('Een klein berichtje voor te testen');
};

const server = http.createServer(requestHandler);
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});