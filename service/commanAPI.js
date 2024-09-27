import axios from 'axios'

export const commanAPI = async(httpMethod,url,reqBody)=>{
    let regConfig={
        method:httpMethod,
        url,
        headers:{
            "Content-Type":"application/json"
        },
        data:reqBody
    }
    return await axios(regConfig).then((res)=>{
        return res
    }).catch(err=>{
        return err
    })
}