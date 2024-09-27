import React from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { uploadVideoAPI } from '../../service/allAPI';

function Add({setUploadVideoResponse}) {

  const [uploadVideo,setUploadVideo]=useState({
    id:"",
    caption:"",
    url:"",
    link:""
  })


  // https://www.youtube.com/watch?v=kkS3TaWaqR8  - youtube link
  // https://www.youtube.com/embed/kkS3TaWaqR8    - embed code link

  const getYoutubeLink=(e)=>{
    const {value}=e.target
    if(value.includes("v=")){
      let vID = value.split("v=")[1].slice(0,11)
      console.log(`https://www.youtube.com/embed/${vID}`);
      setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`})
    }
    else{
      setUploadVideo({...uploadVideo,link:""})
    }
  }

  const handleAdd=async()=>{
    const{id,caption,url,link}=uploadVideo

    if(!id || !caption || !url || !link){
      alert("Please fill the missing fileds")
    }
    else{
      // store video details to the json server
      const result = await uploadVideoAPI(uploadVideo)
      console.log(result)

      if(result.status > 199 && result.status <=300){
        // success
        handleClose()
        // alert
        alert("Uploaded Successfully")
        // after getting success response field should be empty
        setUploadVideo({
          id:"",
          caption:"",
          url:"",
          link:""
        })

        setUploadVideoResponse(result.data)
      }
      else{
        console.log(result.message);
        
      }
    }
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-flex align-item-center">
        <h5 className='text fw-bold'>Upload Videos</h5>
        <button onClick={handleShow} className='ms-2 bg-warning'><i className="fa-solid fa-arrow-up-from-bracket fa-beat mb-2" style={{color:"white"}}></i></button>
      </div>

      {/* modal */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <FloatingLabel
        controlId="floatingInput"
        label="Video Id"
        className="mb-3"
      >
        <Form.Control type="input" placeholder="Video Id" onChange={(e)=>setUploadVideo({...uploadVideo,id:e.target.value})} />
      </FloatingLabel>

      <FloatingLabel 
      controlId="floatingTitle" 
      label="Video Title" 
      className='mb-3'>
        <Form.Control type="input" placeholder="Video Title" onChange={(e)=>setUploadVideo({...uploadVideo,caption:e.target.value})} />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Image Url"
        className="mb-3"
      >
        <Form.Control type="input" placeholder="Image Url" onChange={(e)=>setUploadVideo({...uploadVideo,url:e.target.value})} />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Video Url"
        className="mb-3"
      >
        <Form.Control type="input" placeholder="Video Url" onChange={getYoutubeLink} />
      </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
