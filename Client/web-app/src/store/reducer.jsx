const initialState = {
  questions: [],
  question: {},
  loading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "fetch/questions":
    return { ...state, questions: payload }
  
  case "fetch/question":
    return { ...state, question: payload }
  
  case "set/loading":
    return { ...state, loading: payload }
  default:
    return state
  }
}
