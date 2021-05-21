import axios from 'axios'

const baseUrl = 'http://localhost:3001/exam/'

export const setQuestions = (payload) => ({
  type: 'fetch/questions',
  payload
})

export const setQuestion = (payload) => ({
  type: 'fetch/question',
  payload
})

export const setLoading = (payload) => ({
  type: 'set/loading',
  payload
})

export const fetchQuestions = (payload) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: baseUrl,
        method: "GET"
      })
      switch (payload) {
        case 'kelas_10':
          const kelas_10 = data.filter(question => question.sub_category === 'kelas_10')
          dispatch(setQuestions(kelas_10))
          break;
        case 'kelas_11':
          const kelas_11 = data.filter(question => question.sub_category === 'kelas_11')
          dispatch(setQuestions(kelas_11))
          break;
        case 'kelas_12':
          const kelas_12 = data.filter(question => question.sub_category === 'kelas_12')
          dispatch(setQuestions(kelas_12))
          break;
        default:
          dispatch(setQuestions(data))
          break;
      }
    } catch (error) {
     console.log(error); 
    }
  }
}

export const fetchQuestion = (payload) => {
  const { id } = payload
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: baseUrl+id,
        method: "GET"
      })
      dispatch(setQuestion(data))
    } catch (error) {
     console.log(error); 
    }
  }
}

export const addQuestion = (payload) => {
  const { category, sub_category, question, answer_esay, answer_a, answer_b, answer_c, answer_d, type, image, history } = payload
  const allData = { category, sub_category, question, answer_esay, type, image, answer_a, answer_b, answer_c, answer_d }
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: baseUrl,
        method: "POST",
        data: allData
      })
      dispatch(setQuestions(data))
      history.push('/')
    } catch (error) {
     console.log(error); 
    }
  }
}

export const editQuestion = (payload) => {
  const { id } = payload
  const { category, sub_category, question, answer_esay, type, image, answer_a, answer_b, answer_c, answer_d, history } = payload
  const allData = { category, sub_category, question, answer_esay, answer_a, answer_b, answer_c, answer_d, type, image }
  return async (dispatch) => {
    try {
      await axios({
        url: baseUrl+id,
        method: "PUT",
        data: allData
      })
      dispatch(fetchQuestions('all'))
      history.push('/')
    } catch (error) {
     console.log(error); 
    }
  }
}

export const deleteQuestion = (payload) => {
  const { id, Swal } = payload

  return async (dispatch) => {
    try {
      await axios({
        url: baseUrl+id,
        method: "DELETE"
      })
      dispatch(fetchQuestions('all'))
      Swal.fire('Deleted', 'You successfully deleted this file', 'success')
    } catch (error) {
     console.log(error); 
    }
  }
}

