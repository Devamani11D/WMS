import React from 'react'
// import Layout from '../Layout/Layout'
// import SendRoundedIcon from '@mui/icons-material/SendRounded';
// import MailIcon from '@mui/icons-material/Mail';
import emailjs from '@emailjs/browser';
// import Swal from 'sweetalert2'
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import {
    Box,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemButton,
    Stack,
    FormControl,
    TextField,
    Typography,
    Button,
    ListItemText, ListItemIcon,
} from "@mui/material";
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import '../../index.css';

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Get your EmailJS service details from the EmailJS dashboard
        const serviceID = 'service_o1j6e4a';
        const templateID = 'template_f97ttlq';
        const userID = '6gc6Bzmn-4U3WcgtP'; // User ID can be found in the EmailJS dashboard
        
        // Send the email using EmailJS
        emailjs.sendForm(serviceID, templateID, e.target, userID)
          .then((result) => {
            console.log('Email sent successfully:', result.text);
            // Swal.fire({
            //     icon:'success',
            //     title:'Message sent sucessfully 👍'
            //   })
          })
          .catch((error) => {
            console.log('Error sending email:', error);
            // Swal.fire({
            //     icon:'error',
            //     title:"Something went wrong!",
            //     text:error.text,
            //   })
            });
            e.target.reset();
        }
      

    const position = [21.164583, 72.785239]; // Coordinates for SVnit location
    return (
        // <Layout>
        <div>
            <Typography variant='h1' alignItems='center' justifyContent='center' textAlign='center' paddingRight="50px" color="black">GET IN TOUCH</Typography>
            <Grid container direction={"column"} >
                
               
            </Grid>
            
            <Grid container spacing={3}>
                
            
                <Grid item xs={12} md={6}>
                
                    <Button
                        variant="contained"
                        style={{
                            borderRadius: 0,
                            textTransform: "none",
                            height: "80px",
                            width: "300px",
                            marginTop: "10px",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "black",
                            fontSize: "1.1rem",
                            fontFamily: "DM Sans",
                        }}
                        disableElevation
                    >
                        SEND YOUR MESSAGE HERE
                    </Button>
                    <Box
                        // component="form"
                        noValidate
                        sx={{ m: 3, width: "80%" }}
                    >
                   <form autoComplete="off" onSubmit={handleSubmit}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            error={false}
                            sx={{ width: "100%" }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            sx={{ width: "100%" }}
                        />
                        <TextField
                            margin="normal"
                            multiline
                            rows={5}
                            required
                            fullWidth
                            id="message"
                            label="Message"
                            name="message"
                            autoFocus
                            sx={{ width: "100%" }}
                        />
                        <Button variant="contained" type='submit'sx={{ mt: 2, backgroundColor: "black" }} >
                            Send
                        </Button>
                        </form>
                    </Box>
                    
                </Grid>
               
                <Grid item xs={12} md={6}>
                    <Button
                        variant="contained"
                        style={{
                            borderRadius: 0,
                            textTransform: "none",
                            height: "80px",
                            width: "300px",
                            marginTop: "10px",
                            backgroundColor: "black",
                            fontSize: "1.1rem",
                            fontFamily: "DM Sans",
                        }}
                        disableElevation
                    >
                        CONTACT DETAILS
                    </Button>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                               
                                <ListItemText color='black' primary="wms@gmail.com" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Instagram />
                                </ListItemIcon>
                                <ListItemText primary="@wms" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Facebook />
                                </ListItemIcon>
                                <ListItemText primary="wms" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Twitter />
                                </ListItemIcon>
                                <ListItemText primary="wms" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
            </div>
            
    
    )
}

export default Contact