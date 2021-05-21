const route = require('express').Router()
const ExamController = require('../controllers/examController')

route.get('/exam', ExamController.fetchQuestion)

route.post('/exam', ExamController.addQuestion)

route.get('/exam/:id', ExamController.getQuestion)

route.put('/exam/:id', ExamController.editQuestion)

route.delete('/exam/:id', ExamController.deleteQustion)

module.exports = route
