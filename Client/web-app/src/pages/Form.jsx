import React from 'react'
import { useSelector } from 'react-redux'

import './form.css'
import EssayForm from '../components/UseEssayForm'
import MulChoiceForm from '../components/useMulChoiceForm'

export default function Form() {
  const { question } = useSelector(state => state)
  const onEdit = false
  return (
    
    <div className="mt-4 d-flex justify-content-center">
    <div className="col-9">
    <div className="card question">
     {/* <!-- Pills navs --> */}
     <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            id="tab-login"
            data-bs-toggle="pill"
            href="#pills-login"
            role="tab"
            aria-controls="pills-login"
            aria-selected="true"
            >Multiple Choice
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="tab-register"
            data-bs-toggle="pill"
            href="#pills-register"
            role="tab"
            aria-controls="pills-register"
            aria-selected="false"
            >Essay
          </a>
        </li>
      </ul>
      {/* <!-- Pills navs --> */}

      {/* <!-- Pills content --> */}
      <div className="tab-content p-3">
        <div
          className="tab-pane fade show active"
          id="pills-login"
          role="tabpanel"
          aria-labelledby="tab-login"
        >
          <MulChoiceForm 
            onEdit={ onEdit }
            question={ question }
          />
        </div>
        <div
          className="tab-pane fade"
          id="pills-register"
          role="tabpanel"
          aria-labelledby="tab-register"
        >
          <EssayForm 
            onEdit={ onEdit }
            question={ question }
          />          
        </div>
      </div>
      {/* <!-- Pills content --> */}
    </div>
    </div>
    </div>
  )
}
