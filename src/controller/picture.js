const path = require("path");
const { dirname } = require("path");
module.exports = (req, res) => {
  console.log(231);
  const rawPath = req.query.filename;
  console.log(rawPath);
  const options = {
    root: path.join(path.resolve(), "src"),
    dotfiles: "deny",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true,
    },
  };
  console.log(options.root, rawPath);
  res.sendFile(rawPath, options, (err) => {
    if (err) {
      console.error(err);
      res.status(err.status).end();
    }
  });
};
