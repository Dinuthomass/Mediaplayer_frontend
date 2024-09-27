import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { addHistoryAPI, deleteAVideoAPI } from '../../service/allAPI';



function VideoCard({video,setDeleteVideoResponse,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true)
    const{caption,link}=video

    let today = new Date()

    // console.log(new Intl.DateTimeFormat('en-US',{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(today));

    let timeStamp = new Intl.DateTimeFormat('en-US',{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(today)

    let videoHistory = {caption,link,timeStamp}
    
    await addHistoryAPI(videoHistory)
    
  }
  const removeVideo = async(id)=>{
    await deleteAVideoAPI(id)
    setDeleteVideoResponse(true)
  }

  const dragStarted=(e,id)=>{
    console.log("Drag Started...VideoId:"+id);
    e.dataTransfer.setData("videoId",id)
    
  }
  return (
    <div>
       <Card style={{ width: '18rem', backgroundColor:"white",borderRadius:"20px"}} draggable onDragStart={e=>dragStarted(e,video?.id)}>
      <Card.Img variant="top" src={video.url} style={{borderTopRightRadius:"20px",height:'12rem',}}
      onClick={handleShow} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h5>{video.caption}</h5>
          {insideCategory?null:<button onClick={()=>removeVideo(video?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>}
        </Card.Title>
        
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={`${video.link}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen ></iframe>
        </Modal.Body>
      </Modal>
    
    </div>
  )
}

export default VideoCard
