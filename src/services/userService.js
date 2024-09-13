import { idText } from 'typescript';
import axios from '../axios';
const handleLoginApi = (userEmail,userPassword) =>{
    return axios.post('/api/login',{email : userEmail, password : userPassword });
}   

const getAllUser = (inPutId) => {
    //template string
    // return axios.get(`/api/get-all-users?id=${inPutId}`);
    return axios.get(`/api/get-all-users`, {
        params :{
            id : inPutId
        }
    });
}

const createNewUserService = (data) =>{
    console.log('check api data from service ', data);
    return axios.post(`/api/create-new-user`,data);
}

const deleteUserService =(userId) =>{
    return axios.delete(`/api/delete-user`,
        {
            data :{
                id : userId
            }
        }
    );
}

const editUserService = (inputData) =>{
    return axios.put(`/api/edit-user`,inputData);
}
 export{
    handleLoginApi,
    getAllUser,
    createNewUserService,
    deleteUserService,
    editUserService
 }  