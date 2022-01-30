import TextField from '@mui/material/TextField';
import {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import { useParams,useHistory } from 'react-router-dom';
import { useFormik } from "formik";
import * as yup from "yup";
import { API_URL } from './global_constant';

export function EditTicket() {
  const { id } = useParams();
  
 const [ticket,setTicket]=useState(null);
  useEffect(()=>{
    fetch(`${API_URL}/tickets/${id}`,
    {method:"GET",
  })
    .then((data)=>data.json())
    .then((pr)=>setTicket(pr));
  },[id]);
  //only show update movie when data is available
  return ticket ? < UpdateTicket ticket={ticket} />:"";

}
  
   function UpdateTicket({ticket}){
    const history=useHistory();
    const formValidationSchema = yup.object({
       from: yup
      .string()
      .required("why not fill this from?😯"),
  
      subject: yup
      .string()
      .min(4,"need bigger subject 😕")
      .required("why not fill this subject?😯"),
  
       message: yup
      .string()  
      .required("why not fill this message?😯"),

      status: yup
      .string()  
      .required("why not fill this status?😯"),

      assignee: yup
      .string()  
      .required("why not fill this assignee?😯"),

      date: yup
      .string()  
      .required("why not fill this date?😯"),

      priority: yup
      .string()  
      .required("why not fill this priority?😯")


  
      });
  
    const { handleSubmit,values,handleChange,handleBlur,errors,touched } =
      useFormik({
          initialValues:
          {
            from:ticket.from,
            subject:ticket.subject,
            message:ticket.message,
            status:ticket.status,
            assignee:ticket.assignee,
            date:ticket.date,
            priority:ticket.priority
            
          },
         validationSchema:formValidationSchema,
          onSubmit:(updatedTicket)=>{
              console.log("onSubmit",updatedTicket);
              EditTicket(updatedTicket);
          },
      });
  
  const EditTicket = (updatedTicket) => {
    
   
    fetch(`${API_URL}/tickets/${ticket.id}`,
  {
    method:"PUT",
    body:JSON.stringify(updatedTicket),
    headers:{'Content-Type':'application/json',},
}).then(()=>history.push("/tickets"));
};
  

  return (
    <form onSubmit={handleSubmit} className="add-ticket-form">
    <TextField
      value={values.from}
      id="from"
      name="from"
      // type="text"
      onChange={handleChange}
      onBlur={handleBlur}
      label="From"
      variant="standard"
      error={errors.from && touched.from}
      helperText={errors.from && touched.from ? errors.from : ""} />
      

    <TextField
      value={values.subject}
      id="subject"
      name="subject"
      // type="text"
      onChange={handleChange}
      onBlur={handleBlur}
      label="Subject"
      variant="standard"
      error={errors.subject && touched.subject}
      helperText={errors.subject && touched.subject ? errors.subject : ""} />
      
      <TextField
      value={values.message}
      id="message"
      name="message"
      // type="text"
      onChange={handleChange}
      onBlur={handleBlur}
      label="Message"
      variant="standard"
      error={errors.message && touched.message }
      helperText={errors.message && touched.message ? errors.message : ""} />

<TextField
      value={values.status}
      id="status"
      name="status"
      // type="text"
      onChange={handleChange}
      onBlur={handleBlur}
      label="Status"
      variant="standard"
      error={errors.status && touched.status }
      helperText={errors.status && touched.status ? errors.status : ""} />

<TextField
      value={values.assignee}
      id="assignee"
      name="assignee"
      // type="text"
      onChange={handleChange}
      onBlur={handleBlur}
      label="Assignee"
      variant="standard"
      error={errors.assignee && touched.assignee }
      helperText={errors.assignee && touched.assignee ? errors.assignee : ""} />

<TextField
      value={values.date}
      id="date"
      name="date"
      // type="text"
      onChange={handleChange}
      onBlur={handleBlur}
      label="Date"
      variant="standard"
      error={errors.date && touched.date }
      helperText={errors.date && touched.date ? errors.date : ""} />

<TextField
      value={values.priority}
      id="priority"
      name="priority"
      // type="text"
      onChange={handleChange}
      onBlur={handleBlur}
      label="Priority"
      variant="standard"
      error={errors.priority && touched.priority }
      helperText={errors.priority && touched.priority ? errors.priority : ""} />


      

       

    <Button type="submit" variant="outlined">Save Ticket</Button>
    </form>
  
  
);

  }
