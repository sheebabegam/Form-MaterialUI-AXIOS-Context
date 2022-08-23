import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useForm, Controller, ErrorMessage } from "react-hook-form";
import { UserContext } from './UserContext';
import { useContext } from 'react';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { alpha, styled } from '@mui/material/styles';
// import './Modal.css';
import Modals from './Modals.js';





const orange = "#F2A74B";
const textLight = "#eaf2f4";
const textDark = "#0D0D0D";
const borderLight = "rgba(206,212,218, .993)";


function EditPage(props) {
    const classes = useStyles();
    const navigate = useNavigate();

    const { firstname, lastname, contact, email, password, formData, register, handleSubmit, userInfo, setUserInfo, onSubmit, formState: { errors }, finalSubmit } = useContext(UserContext);

    console.log('Edit userInfo is -->', userInfo);


    // Modal
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    let firstname1 = ((userInfo[userInfo.length - 1]).firstname1);
    let lastname1 = ((userInfo[userInfo.length - 1]).lastname1);
    let contact1 = ((userInfo[userInfo.length - 1]).contact1);
    let email1 = ((userInfo[userInfo.length - 1]).email1);
    let password1 = ((userInfo[userInfo.length - 1]).password1);



    return (
        <div className={classes.main}>
            <p>{props.parentToChild}</p>
            <Container component="main" maxWidth="xs" justify="flex-end" className={classes.containers}>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h4" className={classes.editinfo}>
                        Edit your information
                    </Typography>
                    {/* <Button className={classes.icons}><DriveFileRenameOutlineIcon /></Button> */}

                    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                        <CssTextField
                            className={classes.fields}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            defaultValue={firstname}
                            id="firstname1"
                            label="First Name"
                            name="firstname1"
                            multiline
                            inputProps={{ style: { color: "whitesmoke" } }}
                            {...register("firstname1", {
                                required: 'Password is required'
                            })}
                        />

                        <CssTextField
                            className={classes.fields}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            defaultValue={lastname}
                            id="lastname1"
                            label="Last Name"
                            name="lastname1"
                            multiline
                            inputProps={{ style: { color: "whitesmoke" } }}
                            {...register("lastname1", {
                                required: 'Password is required'
                            })}
                        />
                        <CssTextField
                            className={classes.fields}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            defaultValue={contact}
                            id="contact1"
                            label="Contact"
                            name="contact1"
                            multiline
                            inputProps={{ style: { color: "whitesmoke" } }}
                            {...register("contact1", {
                                required: 'Password is required'
                            })}
                        />
                        <CssTextField
                            className={classes.fields}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            defaultValue={email}
                            id="email1"
                            label="Email"
                            name="email1"
                            multiline
                            inputProps={{ style: { color: "whitesmoke" } }}
                            {...register("email1", {
                                required: 'Password is required'
                            })}
                        />
                        <CssTextField
                            className={classes.fields}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            defaultValue={password}
                            id="password1"
                            label="Password"
                            name="password1"
                            multiline
                            inputProps={{ style: { color: "whitesmoke" } }}
                            {...register("password1", {
                                required: 'Password is required'
                            })}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={handleShow} data-toggle="modal"
                        >
                            Submit
                        </Button>

                    </form>
                </div>
                {/* <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="full_div">
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Edited Changes
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{firstname1}</p>
                        <p>{lastname1}</p>
                        <p>{contact1}</p>
                        <p>{email1}</p>
                        <p>{password1}</p>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" type='submit' onClick={finalSubmit}>
                            Ok
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal> */}

                <Modals show={show} handleClose={handleClose}>

                    <div>
                        <label><b>First Name :</b> {firstname1}</label><br />
                        <label><b>Last Name :</b> {lastname1}</label><br />
                        <label><b>Contact :</b> {contact1}</label><br />
                        <label><b>Email :</b> {email1}</label><br />
                        <label><b>Password :</b> {password1}</label><br />
                    </div>
                </Modals>
            </Container>




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
    editinfo: {
        color: "whitesmoke",
        textAlign: "center"
    },
    icons: {
        textAlign: "center",

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


export default EditPage;