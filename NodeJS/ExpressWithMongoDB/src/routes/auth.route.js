const express = require("express");
const router = express.Router();
const SECRET_KEY = "MyJWTToken";
const jwt = require("jsonwebtoken");
const { VerifyToken } = require("../middleware/verifyjwt.js");

router.get("/login", (req, res) => {
  // sign(payload,secret,{expires},callback(err,token)=>{})
  jwt.sign(
    { username: "XYZ" },
    SECRET_KEY,
    { expiresIn: "2 Days" },
    (err, token) => {
      if (err) {
        console.log(err);
      } else if (token) {
        return res.json({ token, success: true });
      }
    },
  );
});

router.post("/authenticate", (req, res) => {
  // read the token from req
  VerifyToken(req.headers.authorization, SECRET_KEY);
});
module.exports = router;
