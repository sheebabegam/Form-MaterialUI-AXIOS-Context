import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from './UserContext';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const orange = "#F2A74B";
const textLight = "#eaf2f4";
const textDark = "#0D0D0D";



function ResultTable() {
    const classes = useStyles();
    const navigate = useNavigate();

    const { userInfo } = useContext(UserContext);
    console.log('Result page userInfo is ==>', userInfo);


    const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:3010/userInfo`)
            .then((response) => {
                setAPIData(response.data);
            })

        // setAPIData(data)
    }, [])

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else {
            setFilteredResults(APIData)
        }
    }

    // if (!Array.isArray(APIData)) return 'results are not array';

    console.log(APIData)

    const homeSubmit = () => {
        navigate('/');
    }


    return (
        <div>
            <Typography component="h3" variant="h3">
                Search Data
            </Typography>

            <TextField
                className={classes.form}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="search"
                label="Search Data ..."
                name="search"
                autoComplete="search"
                onChange={(e) => searchItems(e.target.value)}
                autoFocus
            />            


            <Paper sx={{ width: '100%' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" >First Name</TableCell>
                                <TableCell align="center" >Last Name</TableCell>
                                <TableCell align="center" >Contact</TableCell>
                                <TableCell align="center" >Email</TableCell>
                                <TableCell align="center" >Password</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>

                            {
                                searchInput.length > 1 ? (
                                    filteredResults != "" ?
                                        filteredResults.map((item) => {
                                            return (
                                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                    <TableCell align="center">{item.firstname1}</TableCell>
                                                    <TableCell align="center">{item.lastname1}</TableCell>
                                                    <TableCell align="center">{item.contact1}</TableCell>
                                                    <TableCell align="center">{item.email1}</TableCell>
                                                    <TableCell align="center">{item.password1}</TableCell>
                                                </TableRow>
                                            )
                                        }) :
                                        <Typography component="h2" variant="h4"> No data </Typography>
                                ) : (
                                    APIData.map((item) => {
                                        return (
                                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                    <TableCell align="center">{item.firstname1}</TableCell>
                                                    <TableCell align="center">{item.lastname1}</TableCell>
                                                    <TableCell align="center">{item.contact1}</TableCell>
                                                    <TableCell align="center">{item.email1}</TableCell>
                                                    <TableCell align="center">{item.password1}</TableCell>
                                                </TableRow>
                                        )
                                    })
                                )
                            }

                        </TableBody>
                    </Table>
                </TableContainer>

            </Paper>

            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={homeSubmit}
                style={{maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px', justifyContent: 'center'}}
            >
                Add New User
            </Button>


        </div>
    );
}




const useStyles = makeStyles(theme => ({

    paper: {
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
        color: textDark,
        // background: "rgba(255,255,255,.45)",
        position: "relative",
        fontWeight: 700,
        fontFamily: "Raleway, sans-serif",
        overflow: "hidden",
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(9),
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

export default ResultTable;