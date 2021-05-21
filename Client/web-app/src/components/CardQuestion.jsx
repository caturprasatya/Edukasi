import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from "react-redux"
import Swal from 'sweetalert2'

import './card.css'
import { deleteQuestion } from '../store/action'

export default function CardQuestion({ ques, no }) {
  const history = useHistory()
  const dispatch = useDispatch()

  function handleDeleteQuestion(event) {
    event.preventDefault()
    Swal.fire({
      title: 'Are you sure?',
      text: 'You can\'t revert your action',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes Delete it!',
      cancelButtonText: 'No, Keep it!',
      showCloseButton: true,
      showLoaderOnConfirm: true
    }).then((result) => {
      if (result.value) {
        dispatch(deleteQuestion({Swal: Swal, id: ques.id}))
      } else {
        Swal.fire('Cancelled', 'Your file is still intact', 'info')
      }
    })
  }

  function handleEditQuestion(event) {
    event.preventDefault()
    history.push('/question/'+ques.id)
  }

  return (
    <div className="card mb-1">
      <div className="card-body">
      {
        ques?.image ? 
        <img src={ ques.image }></img>
        :
        <></> 
      }
        <p className="card-text">{ ques.question }</p>
        {
          ques.type === 'essay' ? 
          <div>
            <h5>Jawaban: </h5>
            <p className="card-text"> { ques.answer_esay }</p>
          </div>
          :
          <>
            <h5>Jawaban: </h5>
            <ul>
              <li><p className="card-text">{ ques.answer_a }</p></li>
              <li><p className="card-text">{ ques.answer_b }</p></li>
              <li><p className="card-text">{ ques.answer_c }</p></li>
              <li><p className="card-text">{ ques.answer_d }</p></li>
            </ul>
          </>
        }
      </div>
      <div className="card-footer d-flex justify-content-between">
        <button className="btn btn-info" disabled>Type: { ques.type }, Category: { ques.category }</button>
        <div>
          <button onClick={ handleEditQuestion } className="btn btn-warning m-2">Edit</button>
          <button onClick={ handleDeleteQuestion } className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  )
}
