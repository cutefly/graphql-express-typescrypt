import express from 'express'
import kafka from '../kafka'

const router = express.Router();
router.get("/", (req, res) => {
    res.send("Hello kafka");
});

let respond: string;
let topic: string;
router.get('/:topic/:event', function (req, res, next) {
    topic = req.params.topic;
    next();
}, function (req, res) {
    respond = `message event : ${req.params.event}`;
    kafka.producer.send({
        topic: topic,
        messages: [
            { value: respond }
        ]
    })
    res.send(respond)
})

let reqMessage: string;

router.post('/:topic/', function (req, res, next) {
    topic = req.params.topic;
    reqMessage = req.body;
    console.log(`topic: ${topic}, message: ${reqMessage}`);
    next();
}, function (req, res) {
    kafka.producer.send({
        topic: topic,
        messages: [
            {
                key: "palrago",
                value: JSON.stringify(reqMessage)
            }
        ]
    })
    res.send(reqMessage)
})

module.exports = router;