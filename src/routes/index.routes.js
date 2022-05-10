const router = require('express').Router();
const usersRouter = require('./user.routes');
const quotesRouter = require('./quotes.routes');
const myProfileRouter = require('./myprofile.routes');
const authRouter = require('./auth.routes');

const session = require('express-session');


router.use(session({
    secret: "secret",
    resave: true,
  saveUninitialized: true
  }));

router.use(function (req, res, next) {
    req.session.test = "test";
    next();
  });

router.use('/users', usersRouter);
router.use('/quotes', quotesRouter);
router.use('/myprofile', myProfileRouter);
router.use('/auth', authRouter);


module.exports = router;