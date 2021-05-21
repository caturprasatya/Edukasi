import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './main.css'
import Header from '../components/Header'
import Card from '../components/UseCardMain'
import CardQuestion from '../components/CardQuestion'

import { fetchQuestions } from '../store/action'

export default function Main() {
  const dispatch = useDispatch()
  const { questions } = useSelector(state => state)
  
  useEffect(() => {
    dispatch(fetchQuestions('all'))
  }, [dispatch])
  
  return (
    <>
      <Header />
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-9">
            <div className="card bord">
            {
              questions ?
              questions.map((question, i) => 
              <CardQuestion
                key={ question.id }
                ques={ question }
                no={ i }
              />
              ) 
              : <></>
            }
            </div>
          </div>
          <Card />
        </div>
      </div>
    </>
  )
}
