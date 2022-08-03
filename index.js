const http = require('http');
const axios = require('axios');
const puppeteer = require('puppeteer');


const port = 8090;

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('time--out--\n')
});

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://example.com');
//   await page.screenshot({path: 'example.png'});

//   await browser.close();
// })();


async function getWindow() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');


  const aHtml = await page.$('a');

  if (aHtml) {
    console.log('----click----')
    const [response] = await Promise.all([
      page.waitForNavigation(),
      page.click('a'),
    ]);
    if (response) {
      console.log('response:', response)
      await page.screenshot({path: 'newImg.png'});
    }
  }

  // const pages = await browser.pages()

  // console.log('pages:', pages)


  await browser.close();
};

getWindow();

// axios.get('https://sctapi.ftqq.com/SCT139165TckU4uUruV1kYAmZhSIEYyUk9.send?title=hellomengyuan')
//   .then(response => {
//     console.log('success push')
//   })
//   .catch(error => {
//     console.log(error);
//   });



server.listen(port, () => {
  console.log(`运行port---: ${port}`)
});