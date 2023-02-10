const mongoose = require('mongoose');

const coursesSchema = new mongoose.Schema({
    courseId: {
        type: String
    },
    courseName: {
        type: String
    },
    courseUnit: {
        type: String
    },
    courseSection: {
        type: String
    },
    coursePrerequisites: {
        type: String
    },
    courseDescription: {
        type: String
    },
    courseInstructor: {
        type: String
    },
    courseDateTime: {
        type: String
    },
    courseFinalExam: {
        type: String
    },
    courseStatus: {
        type: Boolean
    },
    courseReviews: {
        type: String
    }
}, { timestamps: true });

module.exports = Courses = mongoose.model('Courses', coursesSchema);