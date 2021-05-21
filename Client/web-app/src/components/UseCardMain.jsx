import React from 'react'
import { useHistory } from 'react-router-dom'

import './card.css'
import InputImage from '../assets/undraw_usability_testing_2xs4.png'

export default function UseCardMain() {
  const history = useHistory()
  function handleToAddQuestion(event) {
    event.preventDefault()
    history.push('/question')
  }
  return (
    <div className="col-3">
      <div className="card question">
        <div className="card-body">
          <div className="d-flex justify-content-center">
            <div className="row">
            <img src={InputImage} className="card-img" width="60%" height="60%"></img>
            <div className="card">
              <div className="card-body">
              <div className="d-flex justify-content-center">
                <h5 className="card-title">Tambah Data Soal Baru</h5>
              </div>
              </div>
              <div className="d-flex justify-content-center mb-3">
                <button onClick={ handleToAddQuestion } type="submit" className="btn btn-primary">Tambah Soal</button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
