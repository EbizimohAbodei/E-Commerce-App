import axios from 'axios';
import {useState, ChangeEvent, FormEvent} from 'react'
import { Link } from 'react-router-dom';
import useAppDispatch from '../hooks/useAppDispatch';
import useAppSelector from '../hooks/useAppSelector';
import { createUser } from '../redux/reducers/userReducer';
import { User } from '../types/User';

const Signup = () => {

  const [data, setData] = useState({
    name: "",
    email: "",
    password:""
  })
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.userReducers)
  
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

  dispatch(createUser(data as any))
  
  }


  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    
    setData({
      ...data,
      [event.target.name]:event.target.value
    })
  }
  return (
    <div className="account">
      <form action="" onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <input type="text" name="name" placeholder="name" value={data.name} onChange={handleChange} />
        <input type="text" name="email" placeholder="Email Address" value={data.email} onChange={handleChange} />  
      
        <input type="password" name="password" id="" placeholder="Password" value={data.password} onChange={handleChange} />

        <div className='form-control'>
          <span>Role: </span>
          <select name="" id="">
            <option value="user">user</option>
            <option value="admin">admin</option>
          </select>
        </div>

        <div className='form-group'>
          <span>Image: </span>
        <input type="file" />
        </div>

        <button>Create Account</button>

        <p>
          already have an account?{" "}
          <Link to="/signin">Signin here</Link>{" "}
        </p>
      </form>
    </div>
  );
}

export default Signup