import express, { Router } from 'express'

const router : Router = express.Router();
router.get("/", (req, res) => {
    res.send("Hello kafka");
});

export default router