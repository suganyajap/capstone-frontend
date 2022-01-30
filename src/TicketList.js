import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom";
import { useEffect,useState } from "react";
import { API_URL } from './global_constant';
import { Ticket } from './Ticket';

export function TicketList() {

     const [tickets,setTickets]=useState([]);
    //app mounted only once->useEffect->fetch-setMovies
    const getTickets=()=> {
    fetch(`${API_URL}/tickets`)
    .then((data)=>data.json())
    .then((ti)=>setTickets(ti));
    };
      
     useEffect(getTickets,[]);
     //after delete refresh
    const deleteTicket=(id)=>{
    fetch(`${API_URL}/tickets/${id}`,
     {method:"DELETE",
     }).then(()=>getTickets());
     }
      
        const history=useHistory();
    return(
        <section className="ticket-list">
            {tickets.map(({from,subject,message,status,assignee,date,priority,id})=>(
                <Ticket
                from={from}
                subject={subject}
                message={message}
                status={status}
                assignee={assignee}
                date={date}
                priority={priority}
                id={id}
                deleteButton={<IconButton 
           
                    onClick={() =>  deleteTicket(id)}
                     
                    className="ticket-show-button"
                    color="error"
                    aria-label="delete ticket"
                    >
                      <DeleteIcon />
                    </IconButton>}
          
                  editButton={<IconButton 
                    style={{marginLeft:"auto"}}
                    className="ticket-show-button" 
                    onClick={() => history.push("/tickets/edit/"+ id)}
                    color="primary" 
                    aria-label=" edit ticket" >
                      <EditIcon />
                    </IconButton>}
                  />))}
              </section>
    );
    
}