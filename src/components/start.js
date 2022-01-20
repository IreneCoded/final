import React from "react";
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";  


export default function Start(){
    return(
        <div className = "Quiz-DisplayResult">
           
            <Link to="/Quiz"><Button  id="button"> Quiz </Button></Link>
            <div className="hidden">  </div>
            <Link to="/create"><Button  id="button"> Erstellen </Button></Link>

        </div>
    )
}