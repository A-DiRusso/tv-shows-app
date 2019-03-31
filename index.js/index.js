const http = require('http');
const WorstTvShows = require('../models/tv-shows');

const hostname = '127.0.0.1';
const port = 3000;

const server =  http.createServer( async (req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/worst') {
        const worstTv = await WorstTvShows.getAll();
        const worstTvJSON = JSON.stringify(worstTv);
        res.end(worstTvJSON);
    } else {
        res.end(`{message: "They can't all be Seinfeld" }`);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});