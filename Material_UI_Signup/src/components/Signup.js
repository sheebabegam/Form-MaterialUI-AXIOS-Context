import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { UserContext } from './UserContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Paper from "@material-ui/core/Paper";
import { color } from "@mui/system";
import { alpha, styled } from '@mui/material/styles';



const orange = "#F2A74B";
const textLight = "#eaf2f4";
const textDark = "#0D0D0D";
const borderLight = "rgba(206,212,218, .993)";



export default function Signup() {
    const classes = useStyles();

    const navigate = useNavigate();
    const { firstname, lastname, contact, email, password, formData, setFormData, onChange, onSubmit1 } = useContext(UserContext);
    console.log('Register page formData is -->', formData)


    return (
        <div className={classes.root}>
            <Paper elevation={1} square className={classes.paper}>
                <Grid container>


                    <Grid item xs={15} className={classes.colors}>
                        <Typography variant='h2' className={classes.grid1}>
                            Don't have an
                            account?
                        </Typography>
                        <br />
                        <br />
                        <Typography variant='h5' className={classes.subtitle}>
                            Register to access all the features of our service.
                        </Typography>
                        <Typography variant='h6' className={classes.subtitle}>
                            Manage your business in one place. It's free.
                        </Typography>
                    </Grid>


                    <Grid item xs={15}>

                        <Container component="main" maxWidth="xs" justify="flex-end" className={classes.containers} >
                            <CssBaseline />
                            <div className={classes.paper1}>
                                <Avatar className={classes.avatar}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5" className={classes.register}>
                                    Register
                                </Typography>
                                <form className={classes.form} onSubmit={onSubmit1}>
                                    {/* <CssTextField label="Custom CSS" variant="outlined" /> */}

                                    <CssTextField
                                        className={classes.fields}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="firstname"
                                        label="First Name"
                                        name="firstname"
                                        autoComplete="firstname"
                                        onChange={onChange}
                                        autoFocus
                                        multiline
                                        inputProps={{ style: { color: "whitesmoke" } }}
                                    />
                                    <CssTextField
                                        className={classes.fields}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="lastname"
                                        label="Last Name"
                                        name="lastname"
                                        autoComplete="lastname"
                                        onChange={onChange}
                                        multiline
                                        inputProps={{ style: { color: "whitesmoke" } }}
                                    />
                                    <CssTextField
                                        className={classes.fields}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="contact"
                                        label="Contact Number"
                                        name="contact"
                                        autoComplete="contact"
                                        onChange={onChange}
                                        multiline
                                        inputProps={{ style: { color: "whitesmoke" } }}
                                    />
                                    <CssTextField
                                        className={classes.fields}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        onChange={onChange}
                                        multiline
                                        inputProps={{ style: { color: "whitesmoke" } }}
                                    />
                                    <CssTextField
                                        className={classes.fields}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        onChange={onChange}
                                        multiline
                                        inputProps={{ style: { color: "whitesmoke" } }}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox userInfo="remember" color="secondary" />} className={classes.register1}
                                        label="Remember me"
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                        onClick={() => navigate('/edit', { state: formData })}
                                    >
                                        Sign Up
                                    </Button>
                                    {/* <br /> */}
                                    <Grid container >
                                        <Grid item xs >
                                            <Link href="#" variant="body2" className={classes.register1}>
                                                Forgot password?
                                            </Link>
                                        </Grid>
                                        <Grid item>
                                            <Link href="#" variant="body2" className={classes.register1}>
                                                {"Sign In"}
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </form>
                            </div>
                        </Container>
                    </Grid>



                </Grid>
            </Paper>

        </div>
    );
}




const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#9c9a9a',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#9c9a9a',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#9c9a9a',
        },
        '&:hover fieldset': {
            borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#9c9a9a',
        },
    },
});



const useStyles = makeStyles(theme => ({

    paper1: {
        position: "relative",
        marginTop: theme.spacing(2),
        padding: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
        display: "flex",
        flexDirection: "column",

        alignItems: "center",

        boxShadow: ".2px .1px 4px 1px rgba(131,153,167,0.6)",

        "&:hover": {
            boxShadow: "0px 0px 6px 5px rgba(131,153,167,0.99)"
        },
    },
    notchedOutline: {
        borderWidth: "1px",
        borderColor: "#9c9a9a !important"
    },
    grid1: {
        marginTop: theme.spacing(25),
    },
    colors: {
        color: "#d5cece",
        textAlign: "center",
        // borderColor: 'white'
    },
    register: {
        color: "#9c9a9a"
    },
    register1: {
        color: "#9c9a9a"
    },
    fields: {
        borderColor: '#9c9a9a',
        '.MuiInputLabel-outlined': {
            color: 'white'
        }
    },
    paper: {
        padding: 16,
        backgroundColor: "transparent",
    },
    header: {
        padding: theme.spacing(5),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(4),
        marginRight: theme.spacing(3),
        marginLeft: theme.spacing(3),
        display: "block",
        width: "auto",
        [theme.breakpoints.up(1000 + theme.spacing(3))]: {
            width: 1000,
            marginLeft: "auto",
            marginRight: "auto"
        },
        // transform: 'translateX(5%)',

    },
    button: {
        color: "white",
        // background: "rgba(255,255,255,.45)",
        position: "relative",
        fontWeight: 400,
        fontFamily: "Raleway, sans-serif",
        overflow: "hidden",
        marginTop: theme.spacing(6),
        padding: `${theme.spacing(1.6)}px`,
        border: "none",
        borderRadius: "8px",
        letterSpacing: "3px",

        "&::before, &::after": {
            position: "absolute",
            content: '""',
            boxSizing: "border-box",
            borderRadius: "8px",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            opacity: 1
        },
        "&::before": {
            borderBottom: "2px solid rgba(255,255,255,.58)",
            borderTop: "2px solid rgba(255,255,255,.58)",
            transform: "scale(0,1)"
        },
        "&::after": {
            borderLeft: "3px solid rgba(255,255,255,.58)",
            borderRight: "3px solid rgba(255,255,255,.58)",
            transform: "scale(1,0)"
        },
        "&:hover::before": {
            transform: "scale(1,1)",
            transition: "transform cubic-bezier(0.85,.36,.8,.42) 0.3s"
        },
        "&:hover::after": {
            transform: "scale(1,1)",
            transition: "transform cubic-bezier(0.85,.36,.8,.42) .2s"
        },
        "&::first-letter": {
            color: orange
        },
        "&:hover": {
            background: "rgba(169,198,217,0.8)",
            color: textLight
        }
    },


}));
