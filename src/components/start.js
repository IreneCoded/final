import React from "react";
import Button from '@material-ui/core/Button';

export default function Start(){
    return(
        <div className = "Quiz_container_display2">
            <Button  id="button"> Quiz </Button>
            <div className="hidden">  </div>
            <Button  id="button"> Erstellen </Button>

        </div>
    )
}