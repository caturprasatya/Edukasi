import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './Header.css'
import Quiz from '../assets/undraw_Questions_re_1fy7 (1).png'
import { setQuestions, fetchQuestions } from '../store/action'


export default function Header() {
  const dispatch = useDispatch()
  const { questions } = useSelector(state => state)

  function handleButton(event, category) {
    event.preventDefault()
    switch (category) {
      case 'kelas_10':
        dispatch(fetchQuestions('kelas_10'))
        break;
      case 'kelas_11':
        dispatch(fetchQuestions('kelas_11'))
        break;
      case 'kelas_12':
        dispatch(fetchQuestions('kelas_12'))
        break;
      default:
        dispatch(fetchQuestions('all'))
        break;
    }
  }
  return (
    <div className="container-fluid header shadow p-0">
      <div className="row">
        <div className="col-md-9 p-0">
          <div className="container-fluid upper">
            <div className="d-flex justify-content-center">
              <div className="row">
              <p>Bank Soal SMA / SMK</p>
              </div>
            </div>
          </div>
          <div className="board">
          <div className="row">
            <div className="d-flex justify-content-center">
              <div className="m-2"><button onClick={event => handleButton(event, 'all')} type="submit" className="btn btn-primary">Semua Soal</button></div>
              <div className="m-2"><button onClick={event => handleButton(event, 'kelas_10')} type="submit" className="btn btn-primary">Soal Kelas 10</button></div>
              <div className="m-2"><button onClick={event => handleButton(event, 'kelas_11')} type="submit" className="btn btn-primary">Soal Kelas 11</button></div>
              <div className="m-2"><button onClick={event => handleButton(event, 'kelas_12')} type="submit" className="btn btn-primary">Soal Kelas 12</button></div>
            </div>
          </div>
          </div>
        </div>
        <div className="col-md-3">
          <img src={ Quiz } height="150"></img>
        </div>
      </div>
    </div>
  )
}
