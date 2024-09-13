import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import { getAllUser, createNewUserService, deleteUserService, editUserService } from '../../services/userService';
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';
import { emitter  } from '../../utils/emitter';

class UserManage extends Component {

   constructor(props){
    super(props);
    this.state ={
        arrUsers :[],
        isOpenModalUser: false,
        isOpenModaEditUser: false,
        userEdit : {}
    }

   }

    async componentDidMount() {
      await this.getAllUserFromReact();
        
    }
    getAllUserFromReact = async () =>{
        let response = await getAllUser('ALL')
        if(response && response.errCode === 0){
            this.setState({
                arrUsers : response.users
            })
        }
    }

    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true
        })
    }
    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        })
    }
    toggleUserEditModal =() =>{
        this.setState({
            isOpenModaEditUser: !this.state.isOpenModaEditUser,
        })
    }
    createNewUser = async (data) =>{
        try {
            let response = await createNewUserService(data);
            if(response && response.errCode !==0){
                alert(response.errMessage);
            }else{
                await this.getAllUserFromReact();
                this.setState({
                    isOpenModalUser : false
                })

                emitter.emit('EVENT_CLEAR_DATA_MODAL')
            }
            
        } catch (e) {
            console.log(e);
            
        }        
        
    }
    handleDeleteUser = async(user) =>{
        try {
           let response = await deleteUserService(user.id);
           if(response && response.errCode ===0){
            await this.getAllUserFromReact();
            console.log(response);
           }else{
            alert(response.errMessage)
           }
        } catch (e) {
            console.log(e);
            
        }
    }

    handleEditUser = (user) =>{
        console.log('check edit user: ', user.id);
        this.setState({
            isOpenModaEditUser :true,
            userEdit : user
        })
    }

    doEditUser = async (user) =>{
        try {
            let response = await editUserService(user)
            console.log('click save user ', response)
            if (response && response.errCode ===0) {
                this.setState({
                    isOpenModaEditUser: false
                })
                await this.getAllUserFromReact();
            }else{
                alert( response.errMessage)
            }
        } catch (e) {
            console.log(e);
            
        }
            

       
    }
    /** Life Cycle
     *  Run Component:
     * 1. run construct -> init state
     * 2. did mount (set state): born /= unmount
     * 3. render (re-render)
     */
    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <ModalUser
                    isOpen ={this.state.isOpenModalUser}
                    toggleFromParent ={this.toggleUserModal}
                    createNewUser ={this.createNewUser}
                />
                {this.state.isOpenModaEditUser && 
                <ModalEditUser
                    isOpen ={this.state.isOpenModaEditUser}
                    toggleFromParent ={this.toggleUserEditModal}
                    currentUser ={this.state.userEdit}
                    editUser ={this.doEditUser}
                />}
                <div className='title text-center'>
                    Manage users with Me    
                </div>    
                <div className='mx-1'>
                    <button className='btn btn-primary px-3'
                    onClick={()=> this.handleAddNewUser()}
                    >
                    <i className="fas fa-plus"></i> Add new user
                    </button>
                </div>
                <div className='users-table mt-4 mx-1'>
                <table id="customers">
                <tbody>
                    <tr>
                        <th>Email</th>
                        <th>FirstName</th>
                        <th>Lastname</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                   

                    
                    {arrUsers && arrUsers.map((item, index) =>{
                                
                               return(
                                <tr key={index}>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button className='btn-edit fas fa-pencil-alt' onClick={()=> this.handleEditUser(item)}></button>
                                        <button className='btn-delete fas fa-trash' onClick={() => this.handleDeleteUser(item)}> </button>
                                    </td>
                                </tr>
                               )
                            })
                    }
                </tbody>
                </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
