const { Exam } = require('../models/')

class ExamController {

  static async fetchQuestion(req, res, next){
    try {
      const exam = await Exam.findAll({order: [['id', 'DESC']]})

      res.status(200).json(exam)
    } catch (error) {
      console.log(error);
    }
  }
  static async getQuestion(req, res, next){
    const { id } = req.params
    try {

      const exam = await Exam.findByPk(id)
      console.log('ini masuk');
      res.status(200).json(exam)
    } catch (error) {
      console.log(error);
    }
  }
  static async addQuestion(req, res, next){
    const { question, type, category, sub_category, answer_esay, answer_a, answer_b, answer_c, answer_d, image } = req.body
    const inputData = { question, type, category, sub_category, answer_esay, answer_a, answer_b, answer_c, answer_d, image }
    
    const data = await Exam.create(inputData)

    res.status(201).json({ message: 'Success add new question', data })
  }
  static async editQuestion(req, res, next){
    const { id } = req.params
    const { question, type, category, sub_category, answer_esay, answer_a, answer_b, answer_c, answer_d, image } = req.body
    const inputData = { question, type, category, sub_category, answer_esay, answer_a, answer_b, answer_c, answer_d, image }
  
    const data = await Exam.update(inputData, { where: { id } })
    
    console.log(data);
    
    res.status(200).json({ message: 'Success edit question' })
  }
  static async deleteQustion(req, res, next){
    const { id } = req.params
    
    await Exam.destroy({ where: { id } })

    res.status(200).json({ message: 'Success delete question' })
  }

}

module.exports = ExamController