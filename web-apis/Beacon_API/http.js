const http = require('http');
const qs = require('querystring');

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/log') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const postBody = qs.parse(body);
            console.log('body:', postBody);
            res.end('Received POST request body');
        });
    }
});

server.listen(8888, () => {
    console.log('Server listening');
});
