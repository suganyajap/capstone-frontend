import React from "react";
import './App.css';
import {Route,Switch} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useHistory} from "react-router-dom";
import { Home } from "./Home";
import { EditTicket } from "./EditTicket";
import { TicketList } from "./TicketList";
import { CreateTickets } from "./CreateTickets";
import { ContactUs } from "./ContactUs";
import { NotFound } from "./NotFound";

export default function App() {
  const history=useHistory();
  return (
    
     <div className="App">
       <AppBar position="static" style={{marginBottom:"24px"}}>
     <Toolbar variant="dence">
      <Button
       variant="text"
       color="inherit"
       onClick={()=>history.push("/")}
       >Home</Button>
       <Button
       variant="text"
       color="inherit"
       onClick={()=>history.push("/tickets")}
       >Tickets</Button>
       <Button
       variant="text"
       color="inherit"
       onClick={()=>history.push("/create-ticket")}
       >CreateTickets</Button>
       <Button
       variant="text"
       color="inherit"
       onClick={()=>history.push("/contact")}
       >ContactUs</Button>
       
     </Toolbar>
       </AppBar>
       <Switch>
          <Route exact path="/">
           <Home />
           </Route>
           <Route path="/tickets/edit/:id">
           <EditTicket  />
           </Route>
           <Route path="/tickets">
           <TicketList />
           </Route>
           <Route path="/create-ticket">
           <CreateTickets  />
           </Route>
           <Route path="/contact">
           <ContactUs />
           </Route>
           <Route path="**">
           <NotFound />
           </Route>
           
        </Switch>
   </div>
 
    
  );
}

