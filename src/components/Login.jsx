import React from "react";

import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Login = () => {

 const dispatch = useDispatch();

    return (
        
        <div>
     <Stack spacing={2} direction="row">
      
      <Button 
      variant="contained"
      onClick={() => {
        dispatch(login({ name: 'pedro', age: 20, email: 'pedro@gmail.com', }))}}>
            Login</Button>
      <Button 
      variant="contained"
      onClick={() => {
        dispatch(logout())}}>Logout</Button>
    </Stack>
          
        </div>
    )
}
export default Login;