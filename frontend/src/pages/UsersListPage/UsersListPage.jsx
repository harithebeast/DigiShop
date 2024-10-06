import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ErrorMessage from '../../components/errormessage/errormessage';
import Loader from '../../components/loader/Loader';
import { listUsers, deleteUser } from '../../redux/reducers/user/user.actions';
import Swal from 'sweetalert2';

const UsersListPage = ({ history }) => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      history.push('/login');
    }
  }, [dispatch, history, userInfo, successDelete]);

  const deleteHandler = (id) => {
    Swal.fire({
      title: 'Are you sure to delete this User?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUser(id));
<<<<<<< HEAD

=======
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
        Swal.fire('Deleted!', 'Your user has been deleted.', 'success');
      }
    });
  };
<<<<<<< HEAD
  return (
    <>
      <h1>Users</h1>
=======

  return (
    <>
      <h1 style={{ color: 'white' }}>Users</h1>
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage variant='danger'>{error}</ErrorMessage>
      ) : (
<<<<<<< HEAD
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
=======
        <Table   variant="black">
          <thead>
            <tr>
              <th style={{ color: 'white' }}>ID</th>
              <th style={{ color: 'white' }}>NAME</th>
              <th style={{ color: 'white' }}>EMAIL</th>
              <th style={{ color: 'white' }}>ADMIN</th>
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
<<<<<<< HEAD
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
=======
                <td style={{ color: 'white' }}>{user._id}</td>
                <td style={{ color: 'white' }}>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`} style={{ color: 'lightblue' }}>
                    {user.email}
                  </a>
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
                </td>
                <td>
                  {user.isAdmin ? (
                    <i className='fas fa-check' style={{ color: 'green' }} />
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }} />
                  )}
                </td>
                <td>
                  <LinkContainer to={`/admin/user/${user._id}/edit`}>
                    <Button variant='light' className='btn-sm'>
                      <i className='fas fa-edit'></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(user._id)}
                  >
                    <i className='fas fa-trash'></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default UsersListPage;
