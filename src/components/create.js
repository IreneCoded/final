import SelectInput from "@material-ui/core/Select/SelectInput";
import React, { useState } from "react";
import CreateField from "./createfiled";
import CreateFieldMulti from "./multi_createfiled";
import CreateFieldSort from "./createfiledSort";
import CreateFieldArr from "./createfiledArr";



export default function Create(){
    const[typ, setTyp]= useState();
    const[note, setNote] = useState();




    const[inSingle, setinsingle]= useState(["Option ?"]);

    function SimpleInput(props){
       
        return(
            

                <>
            
            <input  type="text" placeholder={props.place}   />
            <button >+</button></>)
        
    }
    
   const handleTyp = (e) => {
       setTyp(e.target.value);
    

   }

   const leer ="" 

   
    return(
        <>
         <div className = "Quiz-DisplayResult create">
             <h1>Ein neues Quiz</h1>
             <SimpleInput place="Ihre Frage" att="recommended"/>
             <div>
             
                 <select id="cars" name="cars" onChange={handleTyp}>
                 <option >Fragetyp</option>
                  <option value="single">Single Choice</option>
                    <option value="multi">Multiple Choice</option>
                    <option value="sort">Sortable List</option>
                    <option value="zuo">Arange List</option>
                    <option value="number">Number</option>
              </select></div>

              {(typ == "single")?
                  <CreateField name = "single"/>: leer
                                      
                   }

                   {(typ == "multi")?
                  <CreateFieldMulti name = "single"/>: leer                                      
                   }

                  {(typ == "sort")?
                  <CreateFieldSort name = "single"/>: leer                                      
                   }
                   {(typ == "zuo")?
                  <CreateFieldArr name = "single"/>: leer                                      
                   }

                  {(typ == "number")?
                  <><input type="number" /> &lt;  <input type="number" />  &lt;   <input type="number" /> 
                  <button>Fertig!</button></> : leer                                     
                  }

              </div>

</>

    )



}