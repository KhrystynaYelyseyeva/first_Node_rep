const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/'){
        res.setHeader("Content-Type","text/html");
        res.write('<html>')
        res.write('<head><title>Enter message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>')
        res.write('</html>')
        return res.end()
    }

    if (url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end()
            });
        });
    }

    res.setHeader("Content-Type","text/html");
    res.write('<html>')
    res.write('<head><title>Node</title></head>')
    res.write('<body><hi>Hello from YLT server</hi></body>')
    res.write('</html>')
    res.end()
}

module.exports = requestHandler;
