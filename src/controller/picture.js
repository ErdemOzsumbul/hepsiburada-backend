const path = require("path");

module.exports = (req, res) => {
  const rawPath = `src/` + req.query.filename;
  const options = {
    root: path.join(path.resolve()),
    dotfiles: "deny",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true,
    },
  };
  const fileName = req.query.filename;
  res.sendFile(rawPath, options, err => {
    if (err) {
      console.error(err);
      res.status(err.status).end();
    }
  });
};