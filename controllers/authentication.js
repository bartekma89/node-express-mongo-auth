const User = require("../model/user");
const isEmpty = require("lodash/isEmpty");
const jwt = require("jsonwebtoken");
const config = require("../config");

function tokenUser(user) {
  const timestamp = new Date().getTime();
  return jwt.sign({ sub: user._id, iat: timestamp }, config.secretKey.key);
}

exports.signup = (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then(user => {
      if (user) {
        return res.status(422).json({
          error: "The user exist"
        });
      }

      if (isEmpty(email) || isEmpty(password)) {
        return res.status(422).json({
          error: "You must provide emial and password"
        });
      }

      const newUser = new User({
        email,
        password
      });

      newUser
        .save()
        .then(() =>
          res.status(200).json({ success: true, token: tokenUser(newUser) })
        )
        .catch(err => next(err));
    })
    .catch(err => next(err));
};
