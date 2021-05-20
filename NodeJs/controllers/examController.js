const { Exam } = require('../models/')

class ExamController {

  static async fetchQuestion(req, res, next){
    try {
      const exam = await Exam.findAll()

      res.status(200).json(exam)
    } catch (error) {
      console.log(error);
    }
  }
  static async addQuestion(req, res, next){
    const { question, type, category, sub_category, answer_essay, answer_a, answer_b, answer_c, answer_d, image } = req.body

    await Exam.create()

    res.status(201).json({ message: 'Success add new question' })
  }
  static async editQuestion(req, res, next){
    const { question, type, category, sub_category, answer_essay, answer_a, answer_b, answer_c, answer_d, image } = req.body
    const { id } = req.params

    await Exam.update({where: id})

    res.status(200).json({ message: 'Success edit question' })
  }
  static async deleteQustion(req, res, next){
    const { id } = req.params

    await Exam.delete({ where: id })

    res.status(200).json({ message: 'Success delete question' })
  }

}

module.exports = ExamController