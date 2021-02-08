var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { signout, signup, signin, isSignedIn } = require("../controllers/auth");

router.get("/signout", signout);
router.post(
  "/signup",
  [
    check("name", "name should be atlesat 3 char").isLength({ min: 3 }),
    check("email", "emial is require").isEmail(),
    check("password", "password should be 3 char").isLength({ min: 3 }),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email", "emial is require").isEmail(),
    check("password", "password is required").isLength({ min: 3 }),
  ],
  signin
);

module.exports = router;
