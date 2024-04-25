const path = require("path");
const { dirname } = require("path");
module.exports = (req, res) => {
  console.log(231);
  const rawPath = dirname(require.main.path) + `src/` + req.query.filename;
  console.log(rawPath);
  const options = {
    root: path.join(path.resolve()),
    dotfiles: "deny",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true,
    },
  };
  res.sendFile(rawPath, options, (err) => {
    if (err) {
      console.error(err);
      res.status(err.status).end();
    }
  });
};
