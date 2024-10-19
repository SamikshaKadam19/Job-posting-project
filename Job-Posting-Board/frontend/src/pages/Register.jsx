import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import { register } from '../services/authService';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        // API call to register
        try {
            await register(name, email, mobile, password);
            toast.success("Registered successfully, please verify your mobile and email", { autoClose: 4000});
            navigate('/login');
        } catch (error) {
            toast.error("Error while registering: " + error.response.data.msg, {autoClose: 4000});
            console.log(error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                Register
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    required
                    label="Name"
                    fullWidth
                    margin="normal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    required
                    label="Email"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    required
                    label="Mobile"
                    fullWidth
                    margin="normal"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />
                <TextField
                    required
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Register
                </Button>
            </form>
        </Container>
    );
}

export default Register;
