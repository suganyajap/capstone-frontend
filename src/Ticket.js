import { Card, CardActions, CardContent } from "@mui/material";
import Button from '@mui/material/Button';

export function Ticket({ from,subject,message,status,assignee,date,priority,deleteButton,editButton}){
    return(
            <Card className="ticket-container">
            
            <CardContent>
            <h3>{from}</h3>
            <h3>{subject}</h3>
            <h3>{message}</h3>
            <h3>{status}</h3>
            <h3>{assignee}</h3>
            <h3>{date}</h3>
            <h3>{priority}</h3>
            
            <Button variant="contained">Add to Cart</Button>
            <CardActions>
                {deleteButton} {editButton}
            </CardActions>
            </CardContent>

            </Card>
    );
};