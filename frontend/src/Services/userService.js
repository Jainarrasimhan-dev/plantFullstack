import React from 'react';
import axios from 'axios';

export const registerUser=(userDetails)=>{

return new Promise((resolve,reject)=>{

    return axios.post('http://localhost:5001/api/user/register',userDetails).then((res)=>{
        
        if(res.data.email){
            resolve(res)
        }
        reject()

    }).catch(err=>{
        reject(err)
    })


})

}