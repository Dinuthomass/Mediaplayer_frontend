import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import  Category from '../Components/Category'

function Home() {
  const [uploadVideoResponse,setUploadVideoResponse]=useState({})
  const [dropVideoResponse,setDropVideoResponse]=useState({})
  return (
    <div>
      <div className="container mt-5 mb-5 d-flex justify-content-between">
        <div className="add-videos">
          <Add setUploadVideoResponse={setUploadVideoResponse} />
        </div>
        <Link to={'/watch-history'} style={{textDecoration:"none", color:"orange",fontSize:"30px"}}>
        Watch-History
        <i class="fa-solid fa-arrow-right-to-bracket fa-beat-fade"></i>
        </Link>
      </div>
      <div className="coontainer-fluid w-100 mt-5 mb-5 row">
        <div className="all-videos col-lg-9">
          <h1>All Videos</h1>
          <View uploadVideoResponse={uploadVideoResponse} setDropVideoResponse={setDropVideoResponse}/>
        </div>
        <div className="all-videos col-lg-3">
          <Category dropVideoResponse={dropVideoResponse}/>

        </div>
      </div>
    </div>
  )
}

export default Home
