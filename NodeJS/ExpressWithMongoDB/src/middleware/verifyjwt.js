const jwt = require("jsonwebtoken");
function VerifyToken(header, SECRET_KEY) {
  const token = header.split(" ")[1];
  let username = null;
  let err = null;
  // verify the token (jwt.verify())
  jwt.verify(token, SECRET_KEY, (err, decodedToken) => {
    console.log(decodedToken);
    if (err) {
      err = err;
    }
    username = decodedToken.username;
    // send success response if user is authenticated & (token is also valid)
  });
  if (err) return err.message;
  return { msg: "success", username };
}

module.exports = { VerifyToken };
