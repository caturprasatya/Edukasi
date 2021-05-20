'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Exam.init({
    question: DataTypes.STRING,
    type: DataTypes.STRING,
    category: DataTypes.STRING,
    sub_category: DataTypes.STRING,
    answer_esay: DataTypes.STRING,
    answer_a: DataTypes.STRING,
    answer_b: DataTypes.STRING,
    answer_c: DataTypes.STRING,
    answer_d: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Exam',
  });
  return Exam;
};