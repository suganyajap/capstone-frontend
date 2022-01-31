import { Card, CardActions, CardContent } from "@mui/material";
import Button from '@mui/material/Button';

export function Ticket({ from,subject,message,status,assignee,date,priority,deleteButton,editButton}){
    return(
            <Card className="ticket-container">
            
            <CardContent>
            <h3>From: {from}</h3>
            <h3>Subject :{subject}</h3>
            <h3>Message :{message}</h3>
            <h3>Status :{status}</h3>
            <h3>Assignee :{assignee}</h3>
            <h3>Date :{date}</h3>
            <h3>Priority :{priority}</h3>
            
            <Button variant="contained">Add to Cart</Button>
            <CardActions>
                {deleteButton} {editButton}
            </CardActions>
            </CardContent>

            </Card>
    );
};