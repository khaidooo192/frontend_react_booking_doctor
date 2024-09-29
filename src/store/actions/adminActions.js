import actionTypes from './actionTypes';
import {
    getAllCodeService, createNewUserService, getAllUser,
    deleteUserService, editUserService, getTopDoctorHomeService,
    getAllDoctors, saveDetailDoctors
} from '../../services/userService';
import { toast } from 'react-toastify';

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })


// gender
export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(
                { type: actionTypes.FETCH_GENDER_START }
            )
            let res = await getAllCodeService("GENDER");
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data));
            }
            else {
                dispatch(fetchGenderFailed())
            }



        } catch (e) {
            dispatch(fetchGenderFailed())
            console.log('fetch gender start err', e);

        }
    }


}
export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})

//position

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("POSITION");
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data));
            }
            else {
                dispatch(fetchPositionFailed())
            }



        } catch (e) {
            dispatch(fetchPositionFailed())
            console.log('fetch position start err', e);

        }
    }
}
export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})
//role

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("ROLE");
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data));
            }
            else {
                dispatch(fetchRoleFailed())
            }




        } catch (e) {
            dispatch(fetchRoleFailed())
            console.log('fetch role start err', e);

        }
    }
}

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})

//create user

export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            console.log('check create user redux: ', res);

            if (res && res.errCode === 0) {
                toast.success('Create a new user succeed !')
                dispatch(createUserSuccess());
                dispatch(fetchAllUsersStart())
            }
            else {
                toast.error('create user failed !')
                dispatch(createUserFailed())
            }




        } catch (e) {
            toast.error('create user failed !')
            dispatch(createUserFailed())
            console.log('fetch create user start err', e);

        }
    }
}

export const createUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})

export const createUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED
})

// get all users

export const fetchAllUsersStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUser('ALL');
            if (res && res.errCode === 0) {

                dispatch(fetchAllUsersSuccess(res.users.reverse()));
            }
            else {
                toast.error('Fetch all user failed !')
                dispatch(fetchAllUsersFailed())
            }

        } catch (e) {
            toast.error('Fetch all user failed !')
            dispatch(fetchAllUsersFailed())
            console.log('fetch all users start err', e);

        }
    }
}

export const fetchAllUsersSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: data
})

export const fetchAllUsersFailed = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILED
})

//delete user
export const deleteAUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);
            // console.log('check delete user redux: ', res);

            if (res && res.errCode === 0) {
                toast.warn('Delete user succeed !')
                dispatch(deleteUserSuccess());
                dispatch(fetchAllUsersStart())
            }
            else {
                toast.error('Delete user failed !')
                dispatch(deleteUserFailed());
            }

        } catch (e) {
            toast.error('Delete user failed !')
            dispatch(deleteUserFailed())
            console.log('fetch delete user start err', e);

        }
    }
}

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS
})

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED
})

//edit user

export const editAUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data);
            // console.log('check delete user redux: ', res);

            if (res && res.errCode === 0) {
                toast.success('Update user succeed !')
                dispatch(editUserSuccess());
                dispatch(fetchAllUsersStart())
            }
            else {
                toast.error('Update user failed !')
                dispatch(editUserFailed());
            }

        } catch (e) {
            toast.error('Update user failed !')
            dispatch(editUserFailed())
            console.log('fetch edit user start err', e);

        }
    }
}

export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS
})

export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED
})

export const fetchTopDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopDoctorHomeService('');
            console.log('check get doctor: ', res);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
                    dataDoctors: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_FAILED,

                })
            }

        } catch (e) {
            console.log('FETCH_TOP_DOCTORS_FAILED', e);

            dispatch({
                type: actionTypes.FETCH_TOP_DOCTORS_FAILED,

            })
        }
    }
}   

export const fetchAllDoctors = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllDoctors();
            console.log('check get all doctor: ', res);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
                    dataDrs: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_FAILED,

                })
            }

        } catch (e) {
            console.log('FETCH_ALL_DOCTORS_FAILED', e);

            dispatch({
                type: actionTypes.FETCH_ALL_DOCTORS_FAILED,
            })
        }
    }
}   
export const saveDetailDoctor = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await saveDetailDoctors(data);
            console.log('check save detail doctor: ', res);
            if (res && res.errCode === 0) {
                toast.success('Save infor succeed !')
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,
                })
            } else {
                toast.error('Save infor failed !')
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED,

                })
            }

        } catch (e) {
            toast.error('Save infor failed !')
            console.log('SAVE_DETAIL_DOCTOR_FAILED', e);
            dispatch({
                type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED,
            })
        }
    }
}   


