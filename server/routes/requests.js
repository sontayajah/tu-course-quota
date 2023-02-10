const express = require('express');
const router = express.Router();
const Requests = require('../models/requests');

router.get('/', async (req, res) => {
    try {
        const request = await Requests.find()
        res.json(request)
    }
    catch (err) {
        console.log(err)
        res.status(500).send('Server error')
    }
})

router.post('/create', (req, res) => {
    try {
        const { title, description, courseId } = req.body;

        const request = new Requests({
            title,
            description,
            courseId,
        })

        request.save()
        res.send('Hello World! Requests Create')
    }
    catch (err) {
        console.log(err)
        res.status(500).send('Server error')
    }
})

module.exports = router