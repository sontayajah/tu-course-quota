const express = require('express')
const router = express.Router()
const Courses = require('../models/courses')

router.get('/', async (req, res) => {
    try {
        const course = await Courses.find()
        res.json(course)
    }
    catch (err) {
        console.log(err)
        res.status(500).send('Server error')
    }
})

router.post('/create', (req, res) => {
    try {
        res.send('Hello World! Courses Create')
    }
    catch (err) {
        console.log(err)
        res.status(500).send('Server error')
    }
})

module.exports = router