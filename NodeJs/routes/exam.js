const route = require('express').Router()
const ExamController = require('../controllers/examController')

route.get('/exam', ExamController.fetchQuestion)

route.post('/exam', ExamController.addQuestion)

route.put('/exam', ExamController.editQuestion)

route.delete('/exam', ExamController.deleteQustion)

module.exports = route
