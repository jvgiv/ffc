'use client'
import React from 'react'
import { useState } from 'react'
import { TextField, Button } from '@mui/material'

const formStyle = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#666',           // default border
    },
    '&:hover fieldset': {
      borderColor: '#ed1b24',        // hover
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ed1b24',        // focused
    },
  },
  '& .MuiInputLabel-root': {
    color: '#444',                   // label color
    '&.Mui-focused': {
      color: '#ed1b24',              // focused label
    },
  },
  // Optional: change the text color inside the field
  '& .MuiInputBase-input': {
    color: '#222',
  },
};

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    })
    const [success, setSuccess] = useState(0);

    const handleChange = (e) => {
      e.preventDefault();
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }

    const handleFormSubmit  = (e) => {
    e.preventDefault();
    if (formData.name === "" || formData.phone === "" || formData.email === "" || formData.response === "") {
      Swal.fire({
        title: "MGX Form Incomplete",
        text: "Please fill out all fields",
        icon: 'warning',
        confirmButtonText: "OK"
      }
      )
      return
    }

    emailjs.send(
      serviceId,
      templateId,
      formData, 
      {publicKey: publicKeyEnv}
  )
      .then((response) => {
        setSuccess(1)
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        setSuccess(2)
        console.log("FAILED...", err);
      });
  }


  return (
    <div className="contact-container" id="contact">
      <h1 className="contact-title">deliBErate Today!</h1>
      {/* <p className="contact-text">Phase I release includes the Cypress Collection — limited golf-front units starting in the low $800s. Schedule your private hard-hat tour today.</p> */}
      <p className="top-contact">Please fill out the form below for more info!</p>
      {success === 0 ?
      <div className="contact-form">
        <div className="form-child">
          <TextField 
            id="outlined-basic" 
            label="Name" 
            variant="outlined"
            sx={formStyle}
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Name'
            fullWidth
          />
        </div>
        <div className="form-child">
          <TextField 
            id="outlined-basic" 
            label="Phone" 
            variant="outlined"
            sx={formStyle}
            required
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder='Phone'
            fullWidth
            
          />
        </div>
        <div className="form-child">
          <TextField 
            id="outlined-basic" 
            label="Email" 
            variant="outlined"
            sx={formStyle}
            required
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Email'
            fullWidth
          />
        </div>
        <div className="form-child">
          <TextField 
            id="outlined-basic" 
            label="Message" 
            variant="outlined"
            multiline
            sx={formStyle}
            type='text'
            name='response'
            value={formData.message}
            onChange={handleChange}
            placeholder='Enter your message here'
            resize='false'
            required
            fullWidth
          />
        </div>
        <div className="contact-button">
        <Button 
            onClick={handleFormSubmit}
            variant="outlined"
            // color="inherit"
            size="large"
            sx={{
    // Text / icon color
    color: 'white',              // matches your input text color
    borderColor: '#666',        // matches default TextField border

    // Hover state
    '&:hover': {
      borderColor: '#ed1b24',   // same red as TextField hover/focus
      backgroundColor: 'rgba(237, 27, 36, 0.04)', // very light red tint (MUI-style subtle bg)
      // Optional: stronger hover feel
      // backgroundColor: 'rgba(237, 27, 36, 0.08)',
    },

    // Focus / active state (when tab-focused or clicked)
    '&:focus': {
      borderColor: '#ed1b24',
      // Optional: add a stronger ring if you want more visible focus
      // boxShadow: '0 0 0 3px rgba(237, 27, 36, 0.3)',
    },

    // Optional: slightly thicker border like many branded forms
    // borderWidth: '1.5px',

    // Optional: consistent uppercase or font styling
    textTransform: 'none',      // remove uppercase if you don't like it
    fontWeight: 500,
  }}
        >
            Lets Get Started!
        </Button>
        </div>
        </div> : null
    }
    </div>
  )
}
