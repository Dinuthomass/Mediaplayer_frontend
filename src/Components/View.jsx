import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getAllUploadedVideosAPI, getCategoryAPI, updateCategoryAPI } from '../../service/allAPI'

function View({uploadVideoResponse,setDropVideoResponse}) {
  const[allvideos,setAllvideos]=useState([])
  const [deleteVideoResponse,setDeleteVideoResponse]=useState([])

  useEffect(()=>{
    getAllUploadedVideos()
    setDeleteVideoResponse(false)
  },[uploadVideoResponse,deleteVideoResponse])


  const getAllUploadedVideos= async()=>{
    const result = await getAllUploadedVideosAPI()
    console.log(result);
    if(result.status==200){
      setAllvideos(result.data)

    }
    else{
      setAllvideos([])
      console.log("API Failed");
      
    }
  }
  // console.log(allvideos);

  const VideodragOver = (e)=>{
   e.preventDefault()
    
  }
  const videoDrop = async (e)=>{
    const {VideoId,categoryId}=JSON.parse(e.dataTransfer.getData("data"))
    console.log(VideoId,categoryId);
    const {data} = await getCategoryAPI()
    // console.log(data);
    const selectedCategory = data.find(item =>item.id==categoryId)
    let result = selectedCategory.allVideos.filter(video=>video.id!==VideoId)
    // console.log(result);
    let {id,categoryName} = selectedCategory
    let newCategory = {id,categoryName,allVideos:result}
    console.log(newCategory);
    const res = await updateCategoryAPI(categoryId,newCategory)
    setDropVideoResponse(res)
    
  }
  
  return (
    <>
      <Row droppable="true" onDragOver={(e)=>VideodragOver(e)} onDrop={e=>videoDrop(e)}>
       {
        allvideos?.length>0?allvideos.map(video=>(
          <Col sm={12} md={6} lg={4} xl={3} className='ms-3 mb-3'>
          <VideoCard video={video} setDeleteVideoResponse={setDeleteVideoResponse} />
          </Col>
        )):<p>Nothing To Display</p>
        
       }
      </Row>
    </>
  )
}

export default View
