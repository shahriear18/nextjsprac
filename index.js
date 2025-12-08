// const fs = require("fs");

// // let result = fs.writeFileSync("text.txt","This is an txt file");
// // let result1 = fs.
// // console.log(result);
// // fs.readFile("./text.txt", "utf-8", (err, data) => {
// //     console.log(data)
// // });

// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     fs.readFile("./index.html", "utf-8", (err, data) => {
//       if (err) {
//         res.write("Errr");
//         return res.end();
//       }
//       res.write(data);
//       res.end();
//     });
//   } else {
//     res.write("404 Not Found");
//     res.end();
//   }

// //   if (req.url === "/about") {
// //     res.setHeader("content-type", "text/html");
// //     res.write("<h1 className = 'text-[red]'>This is an about page...</h1>");
// //     res.end();
// //   } else {
// //     res.end("404");
// //   }
// });

// let port = 3000;
// server.listen(port, () => {
//   console.log("Server is running");
// });




// const express = require("express");
// const app = express();
// const port = 3030;
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// app.get("/about", (req, res) => {
//   res.send("About us!");
// });
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
// app.get("/about/:slug", (req, res) => {
//   res.send(`This is ${req.params.slug} page`);
// });



const express = require('express');
const app = express();
const port = 3000;

// উদাহরণস্বরূপ, একটি সিম্পল ডেটা স্টোর
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
];

// DELETE মেথড দিয়ে আইটেম মুছে ফেলা
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  items = items.filter(item => item.id !== id);
  res.send({ message: `Item with id ${id} deleted.` });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
