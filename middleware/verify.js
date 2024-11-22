const fs = require("fs");
function verify(req, res, next) {
  const hours = new Date().getHours();
  const day = new Date().getDay();
  if (hours > 9 && hours <= 17 && day <= 5 ) {
    next();
  } else {
    fs.readFile("./public/pages/error.html", (err, data) => {
      err ? console.log(err) : res.end(data);
    });
  }
}

module.exports = verify;
