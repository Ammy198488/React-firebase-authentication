import React, { useState, useEffect } from 'react'
import {  signOut } from "firebase/auth";
import {auth} from '../firebase';
import { useNavigate } from 'react-router-dom'
//import styles from './GitUsers.module.css'

const GitUserUrl = 'https://api.github.com/users';

const GitUsers = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const response = await fetch(GitUserUrl);
            const data = await response.json();
            setUsers(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUsers();
    }, [])
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }


    return (
        <div className='container'>
            <h1 className='text-center my-4 text-dark'>Github Users</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {users.map((user) => {
                    const { login, id, html_url, avatar_url } = user;
                return (
                    <div className="col" key={id}>
                        <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={avatar_url} className="img-fluid rounded-start" alt="avatar" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                        <h5 className="card-title">{ login}</h5>
                                        <a href={html_url} target='_blank' className='text-decoration-none ' >Profile</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                )
                })}  
            </div>
            <div className='my-4 text-center'>
                <button type="button" className="btn btn-success" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
  )
}

export default GitUsers
