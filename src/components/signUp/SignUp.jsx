import React from 'react'
import { Typography, Box, Button, TextField } from '@mui/material'

const SignUp = () => {
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px",
                    padding: "20px",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    width: "300px",
                }}
            >
                <Typography variant="h5" gutterBottom>
                    Sign Up
                </Typography>

                <TextField placeholder="Email" fullWidth />
                <TextField placeholder="Password" type="password" fullWidth />

                <Button variant="contained" fullWidth>
                    Sign Up
                </Button>
            </Box>
        </div>
    )
}

export default SignUp;
