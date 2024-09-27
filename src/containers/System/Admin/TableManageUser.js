import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageUser.scss'
import * as actions from "../../../store/actions";



class TableManageUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userRedux: []
        }

    }

    componentDidMount() {
        this.props.fectUserRedux()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                userRedux: this.props.listUsers
            })
        }
    }
    handleDeleteUser = (user) => {
        this.props.deleteAUserRedux(user.id)
    }

    handleEditUser = (user) => {
        this.props.handleEditUserFromParentKey(user)

    }
    /** Life Cycle
     *  Run Component:
     * 1. run construct -> init state
     * 2. did mount (set state): born /= unmount
     * 3. render (re-render)
     */
    render() {
        let arrUsers = this.state.userRedux;

        return (

            <table id='TableManageUser'>
                <tbody >
                    <tr>
                        <th>Email</th>
                        <th>FirstName</th>
                        <th>Lastname</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                    {arrUsers && arrUsers.length > 0 &&
                        arrUsers.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button
                                            className='btn-edit fas fa-pencil-alt'
                                            onClick={() => this.handleEditUser(item)}
                                        ></button>
                                        <button
                                            className='btn-delete fas fa-trash'
                                            onClick={() => this.handleDeleteUser(item)}
                                        ></button>
                                    </td>
                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => {
    return {
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fectUserRedux: () => dispatch(actions.fetchAllUsersStart()),
        deleteAUserRedux: (userId) => dispatch(actions.deleteAUser(userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
