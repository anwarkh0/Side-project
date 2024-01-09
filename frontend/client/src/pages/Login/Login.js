import axios from "axios"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useApi from '../../components/Hooks/useApi'
import { toast } from "react-toastify";
import { AuthContext } from "../../components/Context/AuthContext";
import { useContext } from "react";
const defaultTheme = createTheme();


const Login = () => {
    const { fetchUserData } = useContext(AuthContext)
    const { apiCall } = useApi()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();

    const handleChangeInput = (e) => {
        const { name, value } = e.target
        setUser((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const handleLogin = async (e) => {
        e.preventDefault();

        if (!user.email || !user.password) {
            console.log("enter email and password");
        }
        try {
            await apiCall({ url: '/auth/login', method: "post", data: user })
            // toast.success('logged-in succussfuly')
            fetchUserData()
            navigate("/");


        } catch (error) {
            console.log(error)
        }
    }
    return (
        <form>
            <ThemeProvider theme={defaultTheme}>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                log in
                            </Typography>
                            <Box component="form" noValidate /* onSubmit={handleSubmit} */ sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={user.email}
                                    onChange={handleChangeInput}
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    value={user.password}
                                    onChange={handleChangeInput}
                                    autoComplete="current-password"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    onClick={handleLogin}
                                >
                                    log In
                                </Button>
                                <Grid container>
                                    {/* <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid> */}
                                    <Grid item>
                                        <Link href="/signup" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>

        </form>
    )
}

export default Login
// import axios from "axios"
// import { useState } from "react"
// import Cookies from 'js-cookie';
// import { useNavigate } from 'react-router-dom';




// const Login = () => {
//     const [user, setUser] = useState({
//         email: "",
//         password: ""
//     })
//     const navigate = useNavigate();

//     // const [loginData,setLoginData]=useState({})
//     const handleChangeInput = (e) => {
//         const { name, value } = e.target
//         setUser((prevState) => ({
//             ...prevState,
//             [name]: value
//         }))
//     }
//     const handleLogin = async (e) => {
//         e.preventDefault();
//         if (!user.email || !user.password) {
//             console.log("enter email and password");
//         }
//         try {
//             const response = await axios.post("http://localhost:5000/auth/login", user)
//             const token = response.token
//             // setLoginData(token)
//             Cookies.set('token', token, { expires: 1 })
//             navigate("/");

//         } catch (error) {
//             console.log(error)
//         }
//     }
//     // console.log(loginData)
//     return (
//         <form>
//             <input
//                 type="email"
//                 name="email"
//                 value={user.email}
//                 onChange={handleChangeInput}
//             />
//             <input
//                 type="password"
//                 name="password"
//                 value={user.password}
//                 onChange={handleChangeInput}
//             />
//             <button type="submit" onClick={handleLogin}>login</button>
//         </form>
//     )
// }

// export default Login