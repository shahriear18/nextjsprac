console.log("Hello world");

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello");
    res.end();
  }

  if(req.url === "/about"){
    res.setHeader("content-type","text/html")
    res.write("<h1 className = 'text-[red]'>This is an about page...</h1>");
    res.end();
  }else{
    res.end("404")
  }
});

let port = 3000;
server.listen(port, () => {
  console.log("Server is running");
});
