const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 8080;

const server = http.createServer((req, res) => {
    const filePath = path.join(
        __dirname,
        req.url === '/' ? 'index.html' : req.url
    );

    console.log("Requested file:", filePath);

    const extName = path.extname(filePath).toLowerCase();

    const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg'
    };

    const contentType = mimeTypes[extName] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404: File not found</h1>');
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
