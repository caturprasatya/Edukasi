import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import './form.css'
import { storage } from '../configs/firebase';
import { editQuestion, addQuestion, setQuestion } from '../store/action'

export default function useMulChoiceForm({ onEdit, question:isQuestion }) {
  const [data, setData] = useState({
    category: "numerasi",
    sub_category: "kelas_10",
    type: "multiple_choice",
    question: "",
    answer_a: "",
    answer_b: "",
    answer_c: "",
    answer_d: "",
    id: 0
  })
  const [file, setFile] = useState('')
  const [image, setImage] = useState('')
  const [hasDelete, setHasDelete] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (isQuestion?.type) {
      const { category, sub_category, question, answer_a, answer_b, answer_c, answer_d, id} = isQuestion
      setData({
       ...data, 
       category: category,
       sub_category: sub_category,
       question: question,
       answer_a: answer_a,
       answer_b: answer_b,
       answer_c: answer_c,
       answer_d: answer_d,
       id: id
     })
      console.log({ category, sub_category, question, answer_a, answer_b, answer_c, answer_d});
      if (isQuestion?.image) {
       setImage(isQuestion?.image)
     }
    }
  }, [isQuestion])

  function handleChange(event) {
    const { value, name, files } = event.target
    if (name === 'file') {
      setFile(files[0])
    } else {
      setData({
        ...data, [name]:value
      })
    }
  }

  function handleButtonBack(event) {
    event.preventDefault()
    dispatch(setQuestion({}))
    history.push('/')
  }

  function deleteImage(event) {
    event.preventDefault()
    setImage('')
    setHasDelete(true)
  }

  function handleToUpdate(event) {
    event.preventDefault()
    if (hasDelete) {
      handleUpload()
    } else {
      if (file?.name) {
        handleUpload()
      } else {
        const allData = { ...data, image: image, history: history}
        dispatch(editQuestion(allData))
      }
    }
  }

  function handleToSubmit(event) {
    event.preventDefault()
    if (file?.name) {
      handleUpload()
    } else {
      const allData = { ...data, image: image, history: history}
      dispatch(addQuestion(allData))
    }
  }

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // const progress = Math.round(
        //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        // );
        // setProgress(progress);
        console.log(snapshot);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(file.name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            const allData = { ...data, image: url, history: history}
            if (onEdit) {
              dispatch(editQuestion(allData))
            } else {
              dispatch(addQuestion(allData))
            }
          });
      }
    );
  };

  return (
    <form>
      <div className="row">
      <div className="form-group col-md-6">
          <label htmlFor="inputCategory">Category</label>
          <select id="inputCategory" className="form-control" name="category" value={ data.category } onChange={ handleChange }>
            <option value="numerasi" >Numerasi</option>
            <option value="literasi" >Literasi</option>
          </select>
        </div>
        <div className="form-group col-md-6">
        <label htmlFor="inputSubCtg">Sub Category</label>
          <select id="inputSubCtg" className="form-control" name="sub_category" value={ data['sub_category'] } onChange={ handleChange }>
            <option value="kelas_10" >Kelas 10</option>
            <option value="kelas_11">Kelas 11</option>
            <option value="kelas_12">Kelas 12</option>
          </select>
        </div>
      </div>
      
      {
          image.length ? 
          <>
            <img className="text-center" src={ image } height="250" width="80%"></img>
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
              <strong>Tekan (x) jika kamu mau hapus photo</strong> 
              <button onClick={ deleteImage } type="button" className="close" data-bs-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </>
          :
            <></>
      }
      <div className="row">
        <div className="form-group">
          <label htmlFor="inputQuestion">Upload Gambar *Jika diperlukan</label>
          <input type="file" className="form-control" id="inputQuestion" placeholder="..." name="file" value={ file } onChange={ handleChange }/>
        </div>
      </div>
    
      <div className="form-group">
        <label htmlFor="inputQuestion">Soal</label>
        <textarea type="text" className="form-control" value={ data.question } id="inputQuestion" placeholder="..." name="question" onChange={ handleChange } />
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="inputAddress2">Pilihan A</label>
          <textarea type="text" className="form-control" id="inputAddress2" placeholder="a. ..." name="answer_a" value={ data['answer_a'] } onChange={ handleChange }/>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputAddress2">Pilihan B</label>
          <textarea type="text" className="form-control" id="inputAddress2" placeholder="b. ..." name="answer_b" value={ data['answer_b'] } onChange={ handleChange }/>
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="inputAddress2">Pilihan C</label>
          <textarea type="text" className="form-control" id="inputAddress2" placeholder="c. ..." name="answer_c" value={ data['answer_c'] } onChange={ handleChange }/>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputAddress2">Pilihan D</label>
          <textarea type="text" className="form-control" id="inputAddress2" placeholder="d. ..." name="answer_d" value={ data['answer_d'] } onChange={ handleChange }/>
        </div>
      </div>
      <br />
      <div className="d-flex footer justify-content-center">
        <div>
          <button className="btn btn-default m-2" onClick={ handleButtonBack }>Back</button>
          {
            onEdit ?
              <button onClick={ handleToUpdate } type="submit" className="btn btn-primary">Update</button>
            :
              <button onClick={ handleToSubmit } type="submit" className="btn btn-primary">Submit</button>
          }
        </div>
      </div>
    </form>
  )
}
