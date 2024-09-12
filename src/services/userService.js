import axios from '../axios';
const handleLoginApi = (userEmail,userPassword) =>{
    return axios.post('/api/login',{email : userEmail, password : userPassword })
}   

const getAllUser = (inPutId) => {
    //template string
    return axios.get(`/api/get-all-users?id=${inPutId}`)
}

const createNewUserService = (data) =>{
    console.log('check api data from service ', data);
    return axios.post(`/api/create-new-user`,data)
}
 export{
    handleLoginApi,
    getAllUser,
    createNewUserService,
 }  