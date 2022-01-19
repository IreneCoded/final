import React from "react";
import {useState } from "react";
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
//import Replay from '@material-ui/icons/Replay';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from "@material-ui/lab/Alert";
//import Single from "./single";
import { ListItem } from "@material-ui/core";
//import Multi from "./multi";

import '../css/styles.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const Quiz_Set = [
    {
        queno :"que_20",
        que : "bitte in die richtige reihenfolge bringen", 
        
        options : [
        "4 Syncer legt eCampus-Kursgruppe an",
        "2 Anmeldung ausgelöst, per E-Mail an WBS CampusAnmeldung gesendet", 
        "1 TN-Daten werden in KVS eingetragen",
        "3 TN wird in UGV erfasst", 
        ],
        ans : ["TN-Daten werden in KVS eingetragen", 
        "Anmeldung ausgelöst, per E-Mail an WBS CampusAnmeldung gesendet", 
        "TN wird in UGV erfasst", 
        "Syncer legt eCampus-Kursgruppe an"],
        ex : "https://wbsgruppe.sharepoint.com/sites/Wir-am-Kunden/SitePages/Praxiswerkst%C3%A4tten.aspx",
        type : "sort"
    },

    {
        queno :"que_16",
        que : "Ab welchem Betrag ist für einen Auftrag von Honorartrainer:innen vom Trainereinsatzplaner:in die Freigabe vom Controlling einzuholen?", 
        
        options : [
            "Flashlights" , 
            "Mittag(s) im WBS Campus" , 
            "Jahresauftakt" , 
            "Wir im WBS Campus"],
        ans : ["1x pro Quartal" , "1x pro Monat" , "1x pro Jahr" , "1x pro Quartal"],
        ansmix : ["1x pro Monat" ,"1x pro Quartal" , "1x pro Quartal" ,  "1x pro Jahr"],
        ex :"https://wbsgruppe.sharepoint.com/sites/TeamWBSCampus/SitePages/Kommunikationsformate.aspx",
        type : "zuo"
    },

    {
        queno :"que_17",
        que : "Welche Kurse laufen in welchem Unterrichtsmodell?", 
        
        options : ["MS Office Spezial",
                "FKFIBU" , 
               "FITKOMP" , 
                "CAD Maschinenbau",            
                "CAD Bauwesen " ,  
            
            ],
        ans : [{que_options : "Konsultationsmodell" , selected : 1},
        {que_options : "6:4" , selected : 2}, 
        {que_options : "Konsultationsmodell" , selected : 3},
        {que_options :"Konsultationsmodell", selected : 4},                
        {que_options : "6:4" , selected : 5}         
    
    ],
    ansmix: ["Konsultationsmodell" , "Konsultationsmodell" , "Konsultationsmodell","6:4", 
    "6:4"          
    
    ],  
    ex :"",
        type : "zuo"
    },

   


    {
        queno :"que_21",
        que : "Welche Themen befinden sich in welchem Kompetenzbereich?", 
        
        options : [
            "Kompetenzbereich 1" ,
            "Kompetenzbereich 2" , 
            "Kompetenzbereich 3" , 
            "Kompetenzbereich 4", 
            "Kompetenzbereich 5" , 
            "Kompetenzbereich 6" , 
            "Kompetenzbereich 7" ,
            "Kompetenzbereich 8", 
        
        ],
        ans : [
            {que_options : "US IT / Handel Vertrieb Verkauf" , selected : 1},
            {que_options : "Büma, IDK, Offman" , selected : 2}, 
            {que_options : "Gesundheit, Pflege, Immo, Umwelt, Sicherheit, Lalo" , selected : 3},
            {que_options :"FIBU, BIBU, Steuer, Sprachen, Modern Workplace, Vorbereitungskurse", selected : 4},
            {que_options : "SAP, PM, QM, Changemanagement, IEACIL" , selected : 5},
            {que_options : "Technologie" , selected : 6}, 
            {que_options : "CAD, Medien, IT WB, EDV" , selected : 7},
            {que_options :"Personal, LOBU, Pädagogik, Handel, Kommunikation, HoGa, Arbeiten 4.0, Verwaltung", selected : 8}],

            ansmix : [
                "Technologie",
               
                 "Gesundheit, Pflege, Immo, Umwelt, Sicherheit, Lalo" ,
                 "Personal, LOBU, Pädagogik, Handel, Kommunikation, HoGa, Arbeiten 4.0, Verwaltung",
                 "FIBU, BIBU, Steuer, Sprachen, Modern Workplace, Vorbereitungskurse",
                 "CAD, Medien, IT WB, EDV", 
                 "SAP, PM, QM, Changemanagement, IEACIL",
                 "US IT / Handel Vertrieb Verkauf" ,
                 
                 "Büma, IDK, Offman" , 
                 ],
        ex :"",
        type : "zuo"
    }
]

  
export default function Quiz(){


            const [activeStep, setActiveStep] = useState(0);
            const [quizAns, setQuizAns] = useState([]);
            const [booleanonsubmit, setBooleanonsubmit] = useState(false);         
            const [total, setTotal] = useState(0);
            const [open, setOpen] = useState(false);
            const [single, setSingle] = useState("");
            const [multi, setMulti] = useState([]);
            const [sort, setSort] = useState(Quiz_Set[activeStep].options);
            const [zuo, setZuo] = useState([]);
            
            //const [number, setNumber] = useState();
            const catchms="";
            const errormsg="";
        
           
    
    const handleNext=()=>{
       
        setMulti([]);

        if (Quiz_Set[activeStep].type == sort)  {
        const ans = [...quizAns]
          ans[activeStep] = [...sort, sort];
      
        setQuizAns(ans)
        console.log(quizAns)} 
        
        let nestate = activeStep +1;
        if (Quiz_Set[nestate].type == "zuo") {setSort([... Quiz_Set[nestate].ansmix])} 
        console.log(zuo)
        setActiveStep(nestate);
    }

   const handleBack=()=>{
    let nestate = activeStep -1;
    setActiveStep(nestate);
            }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
         setOpen(false);
      };

    const onInputChange = (e) => {
                  
        const ansi = e.target.value;
        setSingle(ansi);
      
        const ans = [...quizAns]
        ans[activeStep] = ansi;
        setQuizAns(ans);
       // console.log(quizAns);

     }
   const onInputChangeMulti = (e) =>{

        
        const ansi = e.target.value;
        if(!multi.includes(ansi)){
            const newmulti = [...multi, ansi];
            //newmulti.push(ansi);
            setMulti(newmulti);
            //console.log(newmulti);
            
        }

        else{
            var oldarr = multi.filter(function(value){ 
                return value != ansi; 
                
               
            });
                //console.log(oldarr);

                setMulti(oldarr);

        }

       
       const ans = [...quizAns ]; 
        ans[activeStep] = [...multi, ansi];  
        
        
        setQuizAns(ans);

       
       
        
    }

    
    const onInputChangePi = (e) => {

        const ansi = e.target.value;
        setSingle(ansi);
      
        const ans = [...quizAns]
        ans[activeStep] = ansi;
        setQuizAns(ans);
       // console.log(quizAns);

        // const { Quiz_Set } = Quizset;
        //   const nexState = Quiz_Set.map(card => {
        //   if (card.queno !== e.target.name) return card;
        //   return {
        //       ...card,
        //       options: card.options.map(opt => {
        //       const checked = opt.que_options === e.target.value;
        //       return {
        //           ...opt,
        //           selected: checked
        //       }
        //       })
        //   }
        //   });
        //   setQuizset(nexState);
   }

   function handleOnDragEnd(result) {

    
    if (!result.destination) return;
    
    const items = Array.from(sort); 
const [reorderedItem] = items.splice(result.source.index, 1);

items.splice(result.destination.index, 0, reorderedItem);
var newItems = items.filter(Boolean)
console.log(items)
setSort(newItems);


}

    const onsubmit = () =>{
           console.log("this state Quiz sez" + quizAns)
         let list = quizAns;
         let count = 0;
         let notattempcount = 0;
     
                list.map((item, key)=>{
                    item.options.map((anslist, key)=>{
                       console.log("anslist.selected===>",anslist.selected)
                       if(anslist.selected === true){
                           if(anslist.que_options === item.ans){
                             console.log("anslist, item ans ===>",anslist.que_options,item.ans)
                               count = count + 1;
                           }
                       }else{
                        notattempcount = notattempcount + 1
                       }
                    })
                  })
          
   
       if(notattempcount<=24 && notattempcount>16){
            setBooleanonsubmit(false);
            setTotal(count)

       }else{
        setBooleanonsubmit(true);
        setTotal(count)
          
       }
    }


    const Snackbarrender =() =>{
        return(
          open? <Snackbar open={open} autoHideDuration={5000}  onClose={handleClose} style={{marginTop:'0px',width:'100%'}}>
           <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity={errormsg} >
             
           </MuiAlert>
         </Snackbar> : null
        )
      }

      function clearState(){
        setBooleanonsubmit(false);
        setActiveStep(0); 
        setQuizAns([] );
        setTotal(0);

      }


return(
 <div className="Quiz_render_container">
    {booleanonsubmit ? 
        <div className="Quiz-DisplayResult"> 
           <h2> Du hast {total} von 20 Fragen richtig beantwortet! </h2>
             <Button onClick={clearState}> Try again </Button> 
        </div>
     :
     <div className="Quiz_container_display"> 
          {Quiz_Set.map((item,index)=>{
             if( Math.abs(activeStep - index)<=0)
             {
                
                

                // if(item.type == "zuo"){
                //     return (
                //         <div>
                //           <div className="Quiz_que">{item.que}</div>
                           
                              
                //                 {item.options.map((ans,index_ans)=>{
                //                     index_ans = index_ans + 1
                //                     return (
                //                         <div key={index_ans} className="Quiz_multiple_options stable">
                                             
                //                              {ans.que_options}
                                        
                                             
                //                         </div>

                                        
                //                         )
                //                 }
                                
                //                 )}

                //                     {item.ans.map((ans,index_ans)=>{
                //                     index_ans = index_ans + 1
                //                     return (
                //                         <div key={index_ans} className="Quiz_multiple_options stable">
                                             
                //                              {ans.que_options}
                                        
                                             
                //                         </div>

                                        
                //                         )
                //                 }
                                
                //                 )}

                                
                         
                       
                //         </div>)


                // }

                if(item.type == "sort"){
                   
                    return (
                        <div>
                          <div className="Quiz_que">{item.que}</div>
                          <DragDropContext onDragEnd={handleOnDragEnd}>
                              <Droppable droppableId={item.queno}>
                                {(provided) => (
                                  <ul className={item.queno} {...provided.droppableProps} ref={provided.innerRef}>
                                {sort.map((ans,index_ans)=>{
                                    const inNew= index_ans;
                                    index_ans = index_ans + 1
                                    return (

                                        <Draggable key={inNew} draggableId={item.queno + inNew} index={inNew}>
                                        {(provided) => (
                                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <div  className="Quiz_multiple_options stable" >
                                             {ans}                                       
                                             </div>
                                        </li>)}
                                        </Draggable>                                        
                                        )}
                                
                                )}

                                {provided.placeholder}
                                </ul> )}</Droppable></DragDropContext >
                                
                       
                        </div>)


                }

                if(item.type == "zuo"){
                   
                    return (
                        <div>
                          <div className="Quiz_que">{item.que}</div>
                          <div className="forflex">
                              <div>
                              <ul>
                              {item.options.map((ans,index_ans)=>{
                                
                                return (
                                    
                                    <li key={index_ans} >
                                        <div>
                                        {ans}</div>
                                    </li>
                                    )
                            })}
                     </ul>
                   
                    </div>
                    <DragDropContext onDragEnd={handleOnDragEnd}>
                              <Droppable droppableId={item.queno}>
                                {(provided) => (
                                  <ul className={item.queno} {...provided.droppableProps} ref={provided.innerRef}>
                                {sort.map((ans,index_ans)=>{
                                    const inNew= index_ans;
                                    index_ans = index_ans + 1
                                    return (

                                        <Draggable key={inNew} draggableId={item.queno + inNew} index={inNew}>
                                        {(provided) => (
                                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <div  className="Quiz_multiple_options stable" >
                                             {ans}                                       
                                             </div>
                                        </li>)}
                                        </Draggable>                                        
                                        )}
                                
                                )}

                                {provided.placeholder}
                                </ul> )}</Droppable></DragDropContext >
                                
                        </div>
                        </div>)


                }


             }else{
                 return null
             }
              
          })}

       <div className="Quiz-MobileStepper" >
        <MobileStepper id="zaehler" variant="dots" steps={Quiz_Set.length} position="static" activeStep={activeStep}
            nextButton={
                activeStep === 20 ? 
                <Button size="small" onClick={onsubmit}>
                 Ergebnis
                </Button>
                :
                <Button size="small" onClick={handleNext} disabled={activeStep === Quiz_Set.length}>
                Weiter
                </Button>

            }
            backButton={
                <Button size="small" onClick={handleBack} disabled={    activeStep === 0}>
                    Zurück
                </Button>
            }
        />
        </div>
     </div>
    }
     {Snackbarrender()}
  </div>
   )
  
}





    
