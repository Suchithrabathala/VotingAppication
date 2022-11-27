import React, { useState, useEffect } from "react";
import axios from 'axios';
//import Form from "./Form";

// const CreateVoter = () => {
//     const [formValues, setFormValues] = 
//       useState({ email: '', voterid: '' })
//     // onSubmit handler
//     const onSubmit = studentObject => {
//       axios.post(
//   'http://localhost:5000/voters/Register', 
//       studentObject)
//         .then(res => {
//           if (res.status === 200)
//             alert('Student successfully created')
//           else
//             Promise.reject()
//         })
//         .catch(err => alert('Something went wrong'))
//     }
//     // return(
//     //     // <Form initialValues={formValues} 
//     //     //   onSubmit={onSubmit} 
//     //     //   enableReinitialize>
//     //     //   Register
//     //     // </Form>
//     //   );
//     // }
//     export default CreateVoter;