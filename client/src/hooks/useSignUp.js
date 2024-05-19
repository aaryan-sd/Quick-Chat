import {useState} from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
import axios from 'axios';

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext();
  const [error, setError] = useState(null);

  const signup = async ({fullname, email, password, confirmPassword, gender}) => {
    const success = handleInputErrors({fullname, email, password, confirmPassword, gender})
    if(!success) {
        return;
    };
    setLoading(true);
    setError(null);
    try {
        const res = await axios.post('http://localhost:8000/api/auth/signup', {
            fullname,
            email,
            password,
            confirmPassword,
            gender
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          });

        const data = await res.data;
        
        if(data.error){
            throw new Error(data.error)
        }

        localStorage.setItem('chat-user', JSON.stringify(data));
        setAuthUser(data);
        toast.success('Account created successfully');
        console.log("acct created successfully");

    } catch (error) {
        toast.error(error.message);
        setError(error.message, 'An error occurred during signup');
    } finally {
        setLoading(false);
    }
  };

  return {loading, signup}
}

export default useSignUp

function handleInputErrors({fullname, email, password, confirmPassword, gender}){
    if(!fullname ||!email ||!password ||!confirmPassword ||!gender){
        toast.error('Please fill in all the fields');
        return false;
    }
    if(password!== confirmPassword){
        toast.error('Passwords do not match');
        return false;
    }

    if(password.length < 6){
        toast.error('Password must be at least 6 characters');
        return false;
    }

    return true;
}