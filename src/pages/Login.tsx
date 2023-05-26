import {useState, ChangeEvent, FormEvent, useEffect} from 'react'
import {  useNavigate} from 'react-router-dom';
import useAppDispatch from '../hooks/useAppDispatch';
import { userAuth } from '../redux/reducers/userReducer';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import useAppSelector from '../hooks/useAppSelector';
import { Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography, Link, Avatar } from '@mui/material';
const Login = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  
  const user =  useAppSelector((state)=> state.userReducers)
  const [data, setData] = useState({ email: "", password: "" })

  const handleSubmit = (event: FormEvent) => {
    try {
  
      event.preventDefault()
      dispatch(userAuth(data))
      console.log(user.isLoggedin);
      
    
    } catch (error) {
      
    }
  };

  useEffect(() => {
    if (user.isLoggedin) {
      navigate("/products");
    }
}, [user.isLoggedin])
  
  return (
    <Container component="main">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "var(--primary-color)" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h3"
          sx={{ marginBottom: 5, color: "var(--primary-color)" }}
        >
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, width: { xs: "95%", md: "50%" } }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange ={(event:React.ChangeEvent<HTMLInputElement>)=>setData({...data, email:event.target.value})}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
              onChange ={(event:React.ChangeEvent<HTMLInputElement>)=>setData({...data, password:event.target.value})}
            sx={{
              "&:focus": {
                outlineColor: "var(--secondary-color)",
              },
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "var(--secondary-color)",
              "&:hover": {
                backgroundColor: "var(--secondary-color)",
              },
            }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/create-account" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Login