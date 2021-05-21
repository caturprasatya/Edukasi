import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import './form.css'
import EssayForm from '../components/UseEssayForm'
import MulChoiceForm from '../components/useMulChoiceForm'
import { fetchQuestion } from '../store/action'

export default function Edit() {
  const { id } = useParams()
  const onEdit = true
  const dispatch = useDispatch()
  const { question } = useSelector(state => state)

  useEffect(() => {
    dispatch(fetchQuestion({ id }))
    console.log('test');
  }, [id, dispatch])
  return (
    
    <div className="mt-4 d-flex justify-content-center">
      <div className="col-9">
        <div className="card question">
          {/* <!-- Pills content --> */}
          <div className="tab-content p-3">
            {
              question?.type === 'essay' ?
                <EssayForm 
                  onEdit={ onEdit }
                  question={ question }
                />
              : 
                <MulChoiceForm 
                  onEdit={ onEdit }
                  question={ question }
                />
            }
          </div>
        </div>
      </div>
    </div>
  )
}
