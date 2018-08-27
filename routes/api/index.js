const router = require('express').Router();
const usersRoutes = require('./users');

// Users Routes
router.use("/books", usersRoutes);

module.exports = router;