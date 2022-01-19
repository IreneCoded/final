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
        queno :"que_1",
        que : "Muss ich als KL auch den IEACIL im eCampus vorbereiten? ",
        options : [{que_options : "Ja" , selected : false},{que_options :"Nein", selected : false},{que_options :"Kenne ich nicht.", selected : false}],
        ans : "Nein",
        ex : "Nein, das übernimmt das IEACIL-Team. Manchmal werden die Kurse über Nacht vorbereitet, bis 9:30 Uhr sind Freischaltungen und Feedbacks angelegt. Bei Rückfragen bitte an die KL Annett Genenncher wenden.",
        type : "single"
    },
    {
        queno :"que_2",
        que : "Wo finde ich als KL die Serverzuweisung für die neu startenden Kurse (News \"Einführung in unser Online-Lernformat\")?",
        options : [{que_options : "News Überblicksseite " , selected : false},{que_options :"IT Hubsite -> Applikationen", selected : false},{que_options :"IT Hubsite -> Service ", selected : false}],
        ans : ["News Überblicksseite" , "IT Hubsite -> Applikationen" ],
        ex : "Wer sich nicht in Sharepoint alle News anzeigen lassen will (auf der grandiosen Überblicksseite), kann die News auf der IT-Hubwebsite und dann unter Applikationen -> Lernplattformen -> WBS LS3D finden ",
        type : "multi"
    },
    {
        queno :"que_3",
        que : "Welche Kompetenzpartnergremien (KPG) gibt es bei der WBS? (Mehrfachnennung möglich)", 
        
        options : [{que_options : "KPG Bildung " , selected : false},{que_options :"KPG Marketing, eCommerce und Vertrieb ", selected : false},{que_options :"KPG HR ", selected : false},{que_options :"KPG IT  ", selected : false}, {que_options :"KPG Finanzen ", selected : false}, {que_options :"KPG Beratung", selected : false}],
        ans : [ 
            "KPG Bildung",
            "KPG Marketing, eCommerce und Vertrieb", 
            "KPG HR", 
            "KPG IT", 
            "KPG Finanzen", 
            "KPG Beratung" ],
        ex :"https://wbsgruppe.sharepoint.com/sites/wie-wir-arbeiten/SitePages/Gremien.aspx ",
        type : "multi"
    },

    {
        queno :"que_4",
        que : "Wofür steht TSC?", 
        
        options : [{que_options : "Training Service Center" , selected : false},{que_options :"Training Service Community", selected : false},{que_options :"Tennis Sport Club", selected : false}],
        ans : "Training Service Center",
        ex :"TSC steht für unser Training Service Center",
        type : "single"
    },

    {
        queno :"que_5",
        que : "Wie viele Kompetenzbereiche gibt es im WBS Campus?", 
        
        options : [{que_options : "5" , selected : false},{que_options :"7", selected : false},{que_options :"8", selected : false}],
        ans : "8",
        ex :"https://wbsgruppe.sharepoint.com/:p:/s/TeamWBSCampus/EXKKDVFAApFBpvGgRbGQ1I0BrJgjOovmp8DJU3-WvF6OHA?e=iTFybR ",
        type : "single"
    },

    {
        queno :"que_6",
        que : "Welches Projekt steht für eine vertrauensvolle Zusammenarbeit mit unseren Ausbilder:innen und Trainer:innen sowie den Honorarkräften?  ", 
        
        options : [{que_options : "1.	Programm X" , selected : false},{que_options :"TrusT", selected : false},{que_options :"Macomi", selected : false}],
        ans : "2.	TrusT ",
        ex :"https://wbsgruppe.sharepoint.com/:p:/s/TeamWBSCampus/EXKKDVFAApFBpvGgRbGQ1I0BrJgjOovmp8DJU3-WvF6OHA?e=iTFybR ",
        type : "single"
    },

    {
        queno :"que_7",
        que : "Wie viele TN, glaubt ihr, hatte der WBS Campus mit Stand 22.11.2021?", 
        
        options : [6800, 7500],
        ans : "7036",
        ex :"https://wbsgruppe.sharepoint.com/sites/TeamWBSCampus/Freigegebene%20Dokumente/Forms/AllItems.aspx?id=%2Fsites%2FTeamWBSCampus%2FFreigegebene%20Dokumente%2FGeneral%2FZahlen%2C%20Daten%2C%20Fakten%2FKursmonitoring%2F2021%5FAuswertung%20TN%2DZahlen%5Fkomplett%2Epdf&parent=%2Fsites%2FTeamWBSCampus%2FFreigegebene%20Dokumente%2FGeneral%2FZahlen%2C%20Daten%2C%20Fakten%2FKursmonitoring&p=true",
        type : "number"
    },

    {
        queno :"que_8",
        que : "Wie heißt unser neuer Englischkurs, der seit Oktober LCCI abgelöst hat? ", 
        
        options : [{que_options : "XPert " , selected : false},{que_options :"VPet", selected : false},{que_options :"ZPro", selected : false}],
        ans : "VPet",
        ex :"https://wbsgruppe.sharepoint.com/sites/TeamWBSCampus/Freigegebene%20Dokumente/Forms/AllItems.aspx?id=%2Fsites%2FTeamWBSCampus%2FFreigegebene%20Dokumente%2FGeneral%2FZahlen%2C%20Daten%2C%20Fakten%2FKursmonitoring%2F2021%5FAuswertung%20TN%2DZahlen%5Fkomplett%2Epdf&parent=%2Fsites%2FTeamWBSCampus%2FFreigegebene%20Dokumente%2FGeneral%2FZahlen%2C%20Daten%2C%20Fakten%2FKursmonitoring&p=true",
        type : "single"
    },
    
    {
        queno :"que_9",
        que : "Wenn eine Teilnehmer:in vor ihrer Umschulung oder Weiterbildung einen Vorbereitungslehrgang machen möchte, dann macht sie/er einen…? (Mehrfachnennung möglich)", 
        
        options : [{que_options : "UVL" , selected : false},{que_options :"RVL", selected : false},{que_options :"MEGK", selected : false}],
        ans : ["UVL", "RVL", "MEGK"],
        ex :"https://wbsgruppe.sharepoint.com/sites/Kurs-undProduktinformationen/SitePages/Basis.aspx",
        type : "multi"
    },

    {
        queno :"que_10",
        que : "Ab wie viele Tage vor Kursstart holt die WBS CampusAnmeldung von der Kursleitung eine Zustimmung für JEDE Anmeldung ein (unabhängig von Kursschließung, Nacheinstieg)?", 
        
        options : [{que_options : "3 Tage vor Kursstart" , selected : false},{que_options :"5 Tage vor Kursstart", selected : false},{que_options :"1 Tag vor Kursstart", selected : false}],
        ans : "3 Tage vor Kursstart",
        ex :"https://wbsgruppe.sharepoint.com/sites/Wir-am-Kunden/SitePages/Anmeldung.aspx",
        type : "single"
    },


    
    {
        queno :"que_11",
        que : "Was ist von Kursleitung zu tun, wenn ein Kurs (z.B. aufgrund max. TN-Zahl) geschlossen werden soll? (Mehrfachnennung möglich)", 
        
        options : [{que_options : "Katrin Huhle / Silke Beckmann via E-Mail informieren" , selected : false},{que_options :"WBS CampusAnmeldung per Mail informieren", selected : false},{que_options :"Eine News in WBS 4U einstellen (lassen)", selected : false}],
        ans : ["Katrin Huhle / Silke Beckmann via E-Mail informieren", "WBS CampusAnmeldung per Mail informieren", "Eine News in WBS 4U einstellen (lassen)"],
        ex :"Lösung: zum Nachlesen https://wbsgruppe.sharepoint.com/sites/TeamWBSCampus/SitePages/WBS-Campus-Anmeldung-f%C3%BCr-RBBs.aspx",
        type : "multi"
    },

    {
        queno :"que_12",
        que : "Führt die WBS Campus Anmeldung eine Warteliste bei geschlossenen Kursen?", 
        
        options : [{que_options : "ja" , selected : false},{que_options :"nein", selected : false}],
        ans : "nein",
        ex :"Lösung: zum Nachlesen: https://wbsgruppe.sharepoint.com/sites/Wir-am-Kunden/SitePages/Anmeldung.aspx",
        type : "single"
    },

    {
        queno :"que_13",
        que : "Über welche E-Mail-Adresse ist das WBS CampusTeam \"Trainerverträge\" zu erreichen", 
        
        options : [{que_options : "WBSCampusOffice@wbstraining.de" , selected : false},{que_options :"tsc.office.wbs.campus@wbstraining.de", selected : false},{que_options :"Trainerverträge@wbstraining.de", selected : false}],
        ans : "WBSCampusOffice@wbstraining.de",
        ex :"Lösung: zum Nachlesen https://wbsgruppe.sharepoint.com/sites/TeamWBSCampus/SitePages/WBS(1).aspx",
        type : "single"
    },

    {
        queno :"que_14",
        que : "Frage: Ab welchem Betrag ist für einen Auftrag von Honorartrainer:innen vom Trainereinsatzplaner:in die Freigabe vom Controlling einzuholen?", 
        
        options : "",
        ans : "5000",
        ex :"Lösung: zum Nachlesen https://wbsgruppe.sharepoint.com/sites/TeamWBSCampus/SitePages/WBS(1).aspx",
        type : "number"
    },

    {
        queno :"que_15",
        que : "Wie häufig finden folgende Kommunikationsformate statt? ", 
        
        
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
        queno :"que_16",
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
        queno :"que_17",
        que : "Welche Praxiswerkstatt gibt es bei uns nicht?", 
        
        options : [
            {que_options : "PW Finanzbuchhaltung" , selected : false},
            {que_options :"PW Import-Export", selected : false},
            {que_options :"PW Gesundheitsmanagement", selected : false}, 
            {que_options : "PW Steuer" , selected : false},
            {que_options :"PW Medien", selected : false}],
        ans : "PW Gesundheitsmanagement",
        ex : "https://wbsgruppe.sharepoint.com/sites/Wir-am-Kunden/SitePages/Praxiswerkst%C3%A4tten.aspx",
        type : "single"
    },



    {
        queno :"que_18",
        que : "Wie viel Prozent der knapp 380 Mitarbeitenden im WBS Campus sind (Stand Nov 21)?", 
        
        options : [
            {que_options : "Führungskräfte ca 8,5%, Referenten ca. 22%, Trainer/Ausbilder ca. 60%" , selected : false},
            {que_options :"Führungskräfte ca 5,5%, Referenten ca. 25%, Trainer/Ausbilder ca. 45%", selected : false},
            {que_options :"Führungskräfte ca 15%, Referenten ca. 17%, Trainer/Ausbilder ca. 75%", selected : false}
        ],
        ans : "Führungskräfte ca 8,5%, Referenten ca. 22%, Trainer/Ausbilder ca. 60%",
        ex : "https://wbsgruppe.sharepoint.com/sites/Wir-am-Kunden/SitePages/Praxiswerkst%C3%A4tten.aspx",
        type : "single"
    },

    {
        queno :"que_19",
        que : "Wie entsteht eine Kursgruppe auf dem eCampus?", 
        
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
        queno :"que_20",
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
            const [sort, setSort] = useState([]);
            const [zuo, setZuo] = useState(Quiz_Set[18].options);
            
            //const [number, setNumber] = useState();
            const catchms="";
            const errormsg="";
        

            const handleNext=()=>{
       
                setMulti([]);
        
                if (Quiz_Set[activeStep].type == sort)  {
                const ans = [...quizAns]
                  ans[activeStep] = [...sort, sort];
              
                setQuizAns(ans)
                } 
                
                let nestate = activeStep +1;
                if (Quiz_Set[nestate].type == "zuo" || Quiz_Set[nestate].type == "zuo") {Quiz_Set[nestate].ansmix? setSort([... Quiz_Set[nestate].ansmix]):setSort([... Quiz_Set[nestate+2].options]) }
                console.log(total)
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
       
   }

   function handleOnDragEnd(result) {
    if (!result.destination) return;
    
    const items = Array.from(sort); 
const [reorderedItem] = items.splice(result.source.index, 1);

items.splice(result.destination.index, 0, reorderedItem);
var newItems = items.filter(Boolean)
//console.log(items)
setSort(newItems);

}

function handleOnDragEnd2(result) {
    if (!result.destination) return;
    
    const items = Array.from(zuo); 
const [reorderedItem] = items.splice(result.source.index, 1);

items.splice(result.destination.index, 0, reorderedItem);
var newItems = items.filter(Boolean)
//console.log(items)
setZuo(newItems);

}

    const onsubmit = () =>{
           
    
        setBooleanonsubmit(true);
        setTotal(6)
          
   
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
                
                if(item.type=="single"){
                return (
                    <div>
                      <div className="Quiz_que">{item.que}</div>
                       
                          
                            {item.options.map((ans,index_ans)=>{
                                index_ans = index_ans + 1
                                return (
                                    <div key={index_ans} className="Quiz_multiple_options">
                                        <label htmlFor = {item.queno+index_ans} name= {index_ans} className={single && single === ans.que_options? "labela whatever" : "labela" }>
                                         
                                         <input
                                            id = {item.queno+index_ans}
                                            key={index_ans}
                                            type="radio"
                                            name={item.queno}
                                            value={ans.que_options}
                                            //checked={!!ans.selected}
                                            onChange={onInputChange}
                                        />{ans.que_options} </label> 
                                    </div>
                                    )
                            })}
                     
                   
                    </div>
                )}

                else if(item.type=="multi"){

                    return (
                        <div>
                          <div className="Quiz_que">{item.que}</div>
                           
                          
                          {item.options.map((ans,index_ans)=>{
                                index_ans = index_ans + 1
                                
                                return (
                                    <div key={index_ans} className="Quiz_multiple_options">
                                        <label htmlFor = {item.queno+index_ans} name= {index_ans} className={multi.includes(ans.que_options)? "labela whatever" : "labela" }>
                                         
                                    
                                         <input
                                            id = {item.queno+index_ans}
                                            key={index_ans}
                                            type="checkbox"
                                            name={item.queno}
                                            value={ans.que_options}
                                            //checked={!!ans.selected}
                                            onChange={onInputChangeMulti}
                                        />{ans.que_options} </label> 
                                    </div>
                                    
                                    )
                            })}
                        
                        </div>
                    )}


                if(item.type =="number"){
                    return (
                        <div>
                          <div className="Quiz_que">{item.que}</div>
                          <input
                                                key="input"
                                                type="number"
                                                name={item.queno}
                                                //checked={!!ans.selected}
                                                onChange={onInputChangePi}
                                            />                      
                                
                         
                       
                        </div>
                    )
                }

                if(item.type == "sort"){
                   
                    return (
                        <div>
                          <div className="Quiz_que">{item.que}</div>
                          <DragDropContext onDragEnd={handleOnDragEnd2}>
                              <Droppable droppableId={item.queno}>
                                {(provided) => (
                                  <ul className={item.queno} {...provided.droppableProps} ref={provided.innerRef}>
                                      {console.log("zuo:", zuo)}
                                {zuo.map((ans,index_ans)=>{
                                    console.log(ans)
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
                              <ul className="right">
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
                activeStep === 19 ? 
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





    
