import express, { Router } from 'express';

const router: Router = express.Router();
router.use('/kafka', require('./kafka'));

module.exports = router;