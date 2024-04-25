const path = require("path");
const fs = require("fs");

module.exports = (req, res) => {
  console.log(231);
  const rawPath = `src/` + req.query.filename;
  const filePath = path.join(process.cwd(), rawPath);
  const imageBuffer = fs.readFileSync(filePath);
  res.setHeader("Content-Type", "image/jpg");
  res.send(imageBuffer);
};
