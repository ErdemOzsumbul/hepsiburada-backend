const path = require("path");
const fs = require("fs");
module.exports = (req, res) => {
  const rawPath = "/src/" + req.query.filename;
  var filePath = path.join(process.cwd(), rawPath);
  var stat = fs.statSync(filePath);
  res.writeHead(200, {
    "Content-Type": "image/*",
    "Content-Length": stat.size,
  });

  var readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
};
