const http = require("http");
const fs = require("fs");
const PORT = process.env.PORT;

const handlereq = (fileName, staatusCode, req, res) => {
    fs.readFile(fileName, "utf-8", (eer, data) => {
        if (eer) {
            console.log(eer);
        } else {
            res.writeHead(200, { "content-type": "text/html" });
            res.write(data);
            res.end();
        }
    });
}

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        handlereq("index.html", 200, req, res);
    } else if (req.url === "/about") {
        handlereq("about.html", 200, req, res);
    } else if (req.url === "/contact") {
        handlereq("contact.html", 200, req, res);
    } else {
        handlereq("error.html", 404, req, res);
    }
});

server.listen(PORT, () => {
    console.log(`Server is running`);
});
