import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image, Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ErrorMessage from '../../components/errormessage/errormessage';
import Loader from '../../components/loader/Loader';
import {
  getUserDetails,
  updateUser,
} from '../../redux/reducers/user/user.actions';
import UserActionTypes from '../../redux/reducers/user/user.types';
import Swal from 'sweetalert2';
import Registration from '../RegistrationPage/Registration.png';

const UserEditPage = ({ match, history }) => {
  const userId = match.params.id;
  const [name, setName] = useState('');
<<<<<<< HEAD

=======
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: UserActionTypes.USER_UPDATE_RESET });
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Updated Successfully!',
        showConfirmButton: false,
        timer: 1000,
      });
      history.push('/admin/userlist');
    } else {
<<<<<<< HEAD
      if (!user.name || user._id !== userId) {
=======
      if (!user || user._id !== userId) {
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
        dispatch(getUserDetails(userId));
      } else {
        setName(user.name);
        setEmail(user.email);
        setIsAdmin(user.isAdmin);
      }
    }
  }, [user, dispatch, userId, history, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser({ _id: userId, name, email, isAdmin }));
  };

  return (
    <>
      <Link to='/admin/userlist' className='btn btn-primary my-3'>
        Go Back
      </Link>
      <Container>
        <Row className='justify-content-md-center'>
          <Col md={6}>
            <Image
              src={Registration}
              alt='Registration Logo'
              fluid
              style={{ border: 'none' }}
<<<<<<< HEAD
            ></Image>
=======
            />
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
          </Col>
          <Col xs={12} md={6}>
            <h1>Edit User</h1>
            {loadingUpdate && <Loader />}
            {errorUpdate && (
              <ErrorMessage variant='danger'> {errorUpdate}</ErrorMessage>
            )}
            {loading ? (
              <Loader />
            ) : error ? (
              <ErrorMessage variant='danger'>{error}</ErrorMessage>
            ) : (
              <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
<<<<<<< HEAD
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type='name'
                    value={name}
                    placeholder='Enter Your Name'
                    onChange={(e) => setName(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type='email'
                    value={email}
                    placeholder='Enter Email'
                    onChange={(e) => setEmail(e.target.value)}
                  ></Form.Control>
=======
                  <Form.Label style={{ color: 'white' }}>Name</Form.Label>
                  <Form.Control
                    type='name'
                    value={user ? name : ''}
                    placeholder='Enter Your Name'
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      backgroundColor: '#343a40', // Dark background
                      color: 'white',              // White text
                      border: '1px solid #6c757d', // Light gray border
                    }}
                  />
                </Form.Group>

                <Form.Group controlId='email'>
                  <Form.Label style={{ color: 'white' }}>Email Address</Form.Label>
                  <Form.Control
                    type='email'
                    value={user ? email : ''}
                    placeholder='Enter Email'
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      backgroundColor: '#343a40', // Dark background
                      color: 'white',              // White text
                      border: '1px solid #6c757d', // Light gray border
                    }}
                  />
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
                </Form.Group>

                <Form.Group controlId='isadmin'>
                  <Row>
                    <Col xs={9}>
                      <Form.Check
                        type='checkbox'
<<<<<<< HEAD
                        checked={isAdmin}
                        label='Is Admin'
                        onChange={(e) => setIsAdmin(e.target.checked)}
=======
                        checked={user ? isAdmin : false}
                        label='Is Admin'
                        onChange={(e) => setIsAdmin(e.target.checked)}
                        style={{ color: 'white' }} // Optional: white text for the label
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
                      />
                    </Col>
                  </Row>
                </Form.Group>

                <Button type='submit' variant='primary'>
                  Update
                </Button>
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserEditPage;
