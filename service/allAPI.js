import { server_url } from "./server_url";
import { commanAPI } from "./commanAPI";



// upload a video
export const uploadVideoAPI = async(video)=>{
    return await commanAPI("POST",`${server_url}/allVideos`,video)
}

// get all video
export const getAllUploadedVideosAPI = async()=>{
    return await commanAPI("GET",`${server_url}/allVideos`,"")
}

// get a video
export const getAVideoAPI = async(id)=>{
    return await commanAPI("GET",`${server_url}/allVideos/${id}`,"")
}

// delete a video
export const deleteAVideoAPI = async(id)=>{
    return await commanAPI("DELETE",`${server_url}/allVideos/${id}`,{})
}

// add history
export const addHistoryAPI = async(video)=>{
    return await commanAPI("POST",`${server_url}/history`,video)
}

// get History
export const getHistoryAPI = async()=>{
    return await commanAPI("GET",`${server_url}/history`,"")
}

// delete a history
export const deleteHistoryAPI = async(id)=>{
    return await commanAPI("DELETE",`${server_url}/history/${id}`,{})
}

// add Category
export const addCategoryAPI = async(category)=>{
    return await commanAPI("POST",`${server_url}/category`,category)
}

// get Category
export const getCategoryAPI = async()=>{
    return await commanAPI("GET",`${server_url}/category`,"")
}

// delete Category
export const deleteCategoryAPI = async(id)=>{
    return await commanAPI("DELETE",`${server_url}/category/${id}`,{})
}

// update Category
export const updateCategoryAPI = async(id,categoryDetails)=>{
    return await commanAPI("PUT",`${server_url}/category/${id}`,categoryDetails)
}