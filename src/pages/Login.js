import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
//import { getAuth, createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [terms, setTerms] = useState('true');

    const emailOnchange = (e) => {
        setEmail(e.target.value)
    }
    const passwordOnchange = (e) => {
        setPassword(e.target.value)
    }
    const handleChange = (e) => {
        setTerms(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then(auth => {navigate("/gitusers")})
        .catch(error=> console.log(error))
    }
  return (
        <div className='container'>
            <div className='card'>
                <div className="card-header text-center">
                    <h3>LogIn</h3>
                </div>
                <div className="card-body">
                    <form>
                        <div className='mb-3 row'>
                            <label htmlFor='email' className='col-sm-2'>Email:</label>
                            <div className='col-sm-10'>
                                <input value={email} name={email} type='email' className='form-control' onChange={emailOnchange} />
                            </div>
                        </div>
                        <div className='mb-3 row'>
                            <label htmlFor='password' className='col-sm-2'>Password:</label>
                            <div className='col-sm-10'>
                                <input value={password} name={password} type='password' className='form-control' onChange={passwordOnchange} />
                            </div>
                        </div>
                        <div className='mb-3 row'>
                            <p><i>By clicking login, you accept the terms and conditions.</i></p>
                            <input type='checkbox' name="terms" className="form-check-input" value={terms} onChange={handleChange} />
                        </div>
                        <button onClick={onSubmit} type="button" className="btn btn-success">LogIn</button>
                    </form>
                </div>
                <div className="card-footer">
                    <p className="text-sm text-center">
                        No account yet?
                        <Link to="/signup">
                            Sign up
                        </Link>
                  </p>
                </div>  
            </div>
        </div>
  )
}

export default Login
