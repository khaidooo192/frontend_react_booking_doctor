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

const getAllCodeService =(inputType) =>{
    return axios.get(`/api/allcode?type=${inputType}`)
}

const getTopDoctorHomeService =(limit) =>{
    return axios.get(`/api/top-doctor-home?limit=${limit}`)
}

const getAllDoctors =() =>{
    return axios.get('/api/get-all-doctors')
}

const saveDetailDoctors =(data)=>{
    return axios.post(`/api/save-infor-doctors`,data);

}

const getDetailInforDoctor =(inPutId)=>{
    return axios.get(`/api/get-detail-doctor-by-id?id=${inPutId}`)

}

const saveBulkSchedule =(inputData) =>{
    return axios.post('/api/bulk-create-schedule', inputData)
}

const getScheduleDoctorbyDate =(doctorId, date)=>{
    return axios.get(`/api/get-schedule-by-date?doctorId=${doctorId}&date=${date}`)

}


 export{
    handleLoginApi,
    getAllUser,
    createNewUserService,
    deleteUserService,
    editUserService,
    getAllCodeService,
    getTopDoctorHomeService,
    getAllDoctors,
    saveDetailDoctors,
    getDetailInforDoctor,
    saveBulkSchedule,
    getScheduleDoctorbyDate
 }  