import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import man from './images/man.jpg';
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";


import { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useForm, Controller, ErrorMessage } from "react-hook-form";
import api from './api/userInfo';
import { HashRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import { UserContext } from "./components/UserContext";
import EditPage from './components/EditPage';
import { useNavigate } from 'react-router-dom';
import ResultTable from './components/ResultTable';



const useStyles = makeStyles(theme => ({
    paperContainer: {
        height: 937,
        backgroundImage: `url(${man})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        alignContent: "stretch",
        [theme.breakpoints.down("sm")]: {
            alignContent: "flex-start"
        }
    },

    header: {
        padding: theme.spacing(5),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center"
    },
    title: {
        color: theme.palette.primary.contrastText,
        marginBottom: theme.spacing(1)
    },
    subtitle: {
        color: theme.palette.primary.light
    }
}));


function App() {
    const classes = useStyles();
    const navigate = useNavigate();


    // Signup Component

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        contact: "",
        email: "",
        password: "",
    });

    const { firstname, lastname, contact, email, password } = formData;

    console.log(formData)

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit1 = (e) => {
        e.preventDefault();
    };



    // Edit Component

    const LOCAL_STORAGE_KEY = "userInfo";

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [userInfo, setuserInfo] = useState([]);

    console.log(userInfo);

    const retriveContacts = async () => {
      const response = await api.get("/userInfo");
      return response.data;
    }

    const onSubmit = async (data) => {
        // console.log(data);        
          console.log(data);
            const request = {
              id: uuidv4(), 
              ...data,
            }
    
            const response = await api.post("/userInfo", request);
            console.log(response);
            setuserInfo([...userInfo, response.data])
        }
        
    

    useEffect(() => {
     
      // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      // if (retriveContacts) setuserInfo(retriveContacts);

      const getContacts = async () => {
            const allContacts = await retriveContacts();
            if(allContacts) setuserInfo(allContacts);
          };
          getContacts();
    }, []);

    useEffect(() => {
      console.log("useeffect",userInfo)
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userInfo));
    }, [userInfo]);

    const contacts = async () => {
      const response = await api.get("/userInfo");
      return response.data;
    }

    const finalSubmit = () => {
        navigate('/result');
    }


    return (
        <div>
            {/* <BrowserRouter> */}

            <Grid className={classes.paperContainer}
                container
                direction="column"
                justify="space-evenly"
                alignItems="center">



                <Grid item>
                    <UserContext.Provider value={{
                        firstname, lastname, contact, email, password, formData, setFormData, onChange, onSubmit1,
                        register, handleSubmit, userInfo, setuserInfo, onSubmit, formState: { errors }, finalSubmit
                    }}>

                        <Routes>
                            <Route path="/" element={<Signup />} />
                            <Route path="/edit" element={<EditPage />} />
                            <Route path="/result" element={<ResultTable />} />
                        </Routes>
                    </UserContext.Provider>
                </Grid>

            </Grid>
            {/* </BrowserRouter> */}
        </div>
    );
}

export default App;
