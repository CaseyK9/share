const express = require('express');
const passport = require('passport');

const router = express.Router();

/**
 * Load MongoDB models.
 */
const Users = require('../models/User');
const Upload = require('../models/Upload');
const Links = require('../models/Links');

/**
 * Load middlewares
 */
const isSessionValid = require('../middleware/isSessionValid');
const isAdmin = require('../middleware/isAdmin');

/**
 * Require authentication middleware.
 */
const requireAuth = passport.authenticate('jwt', {
  session: false
});

/**
 * @route /analytics/admin/counts
 * @method GET
 * @description Allow a admin list of analytics counts
 * @access Private
 */
router.get(
  '/admin/counts',
  requireAuth,
  isSessionValid,
  isAdmin,
  async (req, res) => {
    try {
      const uploads = Upload
      res.status(200).json({ code: 200, counts: {} });
    } catch (err) {
      console.log(err);
      res.status(500).json({ code: 500, error: 'Internal Server Error' });
    }
  }
);

module.exports = router;
