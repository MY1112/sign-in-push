const http = require('http');
const axios = require('axios');

const port = 8090;

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('time--out--\n')
})

axios.get('https://sctapi.ftqq.com/SCT139165TckU4uUruV1kYAmZhSIEYyUk9.send?title=hellomengyuan')
  .then(response => {
    console.log('success push')
  })
  .catch(error => {
    console.log(error);
  });



server.listen(port, () => {
  console.log(`运行port---: ${port}`)
})