import { Component } from "react";
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
//import Replay from '@material-ui/icons/Replay';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from "@material-ui/lab/Alert";
//import Single from "./single";
import { ListItem } from "@material-ui/core";
//import Multi from "./multi";

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
        que : "Welches Projekt steht für eine vertrauensvolle Zusammenarbeit mit unseren Ausbilder:innen und Trainer:innen sowie den Honorarkräften? ", 
        
        options : [6800, 7500],
        ans : "7036",
        ex :"https://wbsgruppe.sharepoint.com/sites/TeamWBSCampus/Freigegebene%20Dokumente/Forms/AllItems.aspx?id=%2Fsites%2FTeamWBSCampus%2FFreigegebene%20Dokumente%2FGeneral%2FZahlen%2C%20Daten%2C%20Fakten%2FKursmonitoring%2F2021%5FAuswertung%20TN%2DZahlen%5Fkomplett%2Epdf&parent=%2Fsites%2FTeamWBSCampus%2FFreigegebene%20Dokumente%2FGeneral%2FZahlen%2C%20Daten%2C%20Fakten%2FKursmonitoring&p=true",
        type : "pidaumen"
    },

    {
        queno :"que_7",
        que : "Wie heißt unser neuer Englischkurs, der seit Oktober LCCI abgelöst hat? ", 
        
        options : [{que_options : "XPert " , selected : false},{que_options :"VPet", selected : false},{que_options :"ZPro", selected : false}],
        ans : "VPet",
        ex :"https://wbsgruppe.sharepoint.com/sites/TeamWBSCampus/Freigegebene%20Dokumente/Forms/AllItems.aspx?id=%2Fsites%2FTeamWBSCampus%2FFreigegebene%20Dokumente%2FGeneral%2FZahlen%2C%20Daten%2C%20Fakten%2FKursmonitoring%2F2021%5FAuswertung%20TN%2DZahlen%5Fkomplett%2Epdf&parent=%2Fsites%2FTeamWBSCampus%2FFreigegebene%20Dokumente%2FGeneral%2FZahlen%2C%20Daten%2C%20Fakten%2FKursmonitoring&p=true",
        type : "single"
    },
    
    {
        queno :"que_8",
        que : "Wenn eine Teilnehmer:in vor ihrer Umschulung oder Weiterbildung einen Vorbereitungslehrgang machen möchte, dann macht sie/er einen…? (Mehrfachnennung möglich)", 
        
        options : [{que_options : "UVL" , selected : false},{que_options :"RVL", selected : false},{que_options :"MEGK", selected : false}],
        ans : ["UVL", "RVL", "MEGK"],
        ex :"https://wbsgruppe.sharepoint.com/sites/Kurs-undProduktinformationen/SitePages/Basis.aspx",
        type : "multi"
    },

    {
        queno :"que_9",
        que : "Ab wie viele Tage vor Kursstart holt die WBS CampusAnmeldung von der Kursleitung eine Zustimmung für JEDE Anmeldung ein (unabhängig von Kursschließung, Nacheinstieg)?", 
        
        options : [{que_options : "3 Tage vor Kursstart" , selected : false},{que_options :"5 Tage vor Kursstart", selected : false},{que_options :"1 Tag vor Kursstart", selected : false}],
        ans : "3 Tage vor Kursstart",
        ex :"https://wbsgruppe.sharepoint.com/sites/Wir-am-Kunden/SitePages/Anmeldung.aspx",
        type : "single"
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
        ans : 5000,
        ex :"Lösung: zum Nachlesen https://wbsgruppe.sharepoint.com/sites/TeamWBSCampus/SitePages/WBS(1).aspx",
        type : "pidaumen"
    },

    {
        queno :"que_15",
        que : "Ab welchem Betrag ist für einen Auftrag von Honorartrainer:innen vom Trainereinsatzplaner:in die Freigabe vom Controlling einzuholen?", 
        
        options : [{que_options : "Flashlights" , selected : 1},{que_options : "Mittag(s) im WBS Campus" , selected : 2}, {que_options : "Jahresauftakt" , selected : 3},{que_options :"Wir im WBS Campus", selected : 4}],
        ans : [{que_options : "1x pro Quartal" , selected : 1},{que_options : "1x pro Monat" , selected : 2}, {que_options : "1x pro Jahr" , selected : 3},{que_options :"1x pro Quartal", selected : 4}],
        ex :"https://wbsgruppe.sharepoint.com/sites/TeamWBSCampus/SitePages/Kommunikationsformate.aspx",
        type : "zuo"
    },

    {
        queno :"que_16",
        que : "Welche Kurse laufen in welchem Unterrichtsmodell?", 
        
        options : [{que_options : "MS Office Spezial" , selected : 1},
                {que_options : "FKFIBU" , selected : 2}, 
                {que_options : "FITKOMP" , selected : 3},
                {que_options :"CAD Maschinenbau", selected : 4},                
                {que_options : "CAD Bauwesen " , selected : 5}         
            
            ],
        ans : [{que_options : "Konsultationsmodell" , selected : 1},
        {que_options : "6:4" , selected : 2}, 
        {que_options : "Konsultationsmodell" , selected : 3},
        {que_options :"Konsultationsmodell", selected : 4},                
        {que_options : "6:4" , selected : 5}         
    
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
        que : "Welche Praxiswerkstatt gibt es bei uns nicht?", 
        
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
        que : "Welche Praxiswerkstatt gibt es bei uns nicht?", 
        
        options : [
            {que_options : "TN-Daten werden in KVS eingetragen" , selected : 1},
            {que_options :"Anmeldung ausgelöst, per E-Mail an WBS CampusAnmeldung gesendet", selected : 2},
            {que_options :"TN wird in UGV erfasst", selected : 3}, 
            {que_options : "Syncer legt eCampus-Kursgruppe an" , selected : 4}],
        ans : [
            {que_options : "TN-Daten werden in KVS eingetragen" , selected : 1},
            {que_options :"Anmeldung ausgelöst, per E-Mail an WBS CampusAnmeldung gesendet", selected : 2},
            {que_options :"TN wird in UGV erfasst", selected : 3}, 
            {que_options : "Syncer legt eCampus-Kursgruppe an" , selected : 4}],
        ex : "https://wbsgruppe.sharepoint.com/sites/Wir-am-Kunden/SitePages/Praxiswerkst%C3%A4tten.aspx",
        type : "sort"
    },

    {
        queno :"que_20",
        que : "Welche Themen befinden sich in welchem Kompetenzbereich?", 
        
        options : [
            {que_options : "Kompetenzbereich 1" , selected : 1},
            {que_options : "Kompetenzbereich 2" , selected : 2}, 
            {que_options : "Kompetenzbereich 3" , selected : 3},
            {que_options :"Kompetenzbereich 4", selected : 4},
            {que_options : "Kompetenzbereich 5" , selected : 5},
            {que_options : "Kompetenzbereich 6" , selected : 6}, 
            {que_options : "Kompetenzbereich 7" , selected : 7},
            {que_options :"Kompetenzbereich 8", selected : 8}
        
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
        ex :"",
        type : "zuo"
    }
]

  






class Quiz extends Component{

   constructor(props){
        super(props)
        this.state = {
            activeStep:0,
            Quiz_Set : Quiz_Set,
            booleanonsubmit : false,
            Total:0,
            open:false,
            catchmsg:"",
            errormsg:""
        }
        
   }

    handleNext=()=>{
        this.setState({activeStep:this.state.activeStep+1})
    }

    handleBack=()=>{
        this.setState({activeStep:this.state.activeStep-1})
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
         this.setState({open : false})
      };

    onInputChange = (e) => {

          const { Quiz_Set } = this.state;
            const nexState = Quiz_Set.map(card => {
            if (card.queno !== e.target.name) return card;
            return {
                ...card,
                options: card.options.map(opt => {
                const checked = opt.que_options === e.target.value;
                return {
                    ...opt,
                    selected: checked
                }
                })
            }
            });
            this.setState({ Quiz_Set: nexState })
    }
    onInputChangeMulti = (e) =>{
      const { Quiz_Set } = this.state;
      const nexState = Quiz_Set.map(card => {
      if (card.queno !== e.target.name) return card;
      
       return {
        ...card,
        options: card.options.map(opt => {
        const checked = opt.que_options === e.target.value;
        console.log("opt" + opt);
        return {
            
            ...opt,
            selected: checked
            
        }
        })
    }
    });
    this.setState({ Quiz_Set: nexState })
    }

    onsubmit = () =>{
           console.log("this state Quiz sez" + this.state.Quiz_Set)
         let list = this.state.Quiz_Set ;
         let count = 0;
         let notattempcount = 0;
     
                list.map((item,key)=>{
                    item.options.map((anslist,key)=>{
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
              this.setState({booleanonsubmit:false,Total:count})
              this.setState({catchmsg:"Please attempt all questions",errormsg:"error",open:true})
       }else{
           this.setState({booleanonsubmit:true,Total:count})
       }
    }


    Snackbarrender =() =>{
        return(
          this.state.open? <Snackbar open={this.state.open} autoHideDuration={5000}  onClose={this.handleClose} style={{marginTop:'0px',width:'100%'}}>
           <MuiAlert elevation={6} variant="filled" onClose={this.handleClose} severity={this.state.errormsg} >
             {this.state.catchmsg}
           </MuiAlert>
         </Snackbar> : null
        )
      }

render(){
return(
 <div className="Quiz_render_container">
    { this.state.booleanonsubmit ? 
        <div className="Quiz-DisplayResult"> 
           <h2> The score is {this.state.Total} Out Of 8 </h2>
             <Button onClick={()=>{this.setState({booleanonsubmit:false,activeStep:0,Quiz_Set : Quiz_Set,Total:0})}}> Try again </Button> 
        </div>
     :
     <div className="Quiz_container_display"> 
          {this.state.Quiz_Set.map((item,index)=>{
             if( Math.abs(this.state.activeStep - index)<=0)
             {
                
                if(item.type=="single"){
                return (
                    <div>
                      <div className="Quiz_que">{item.que}</div>
                       
                          
                            {item.options.map((ans,index_ans)=>{
                                index_ans = index_ans + 1
                                return (
                                    <div key={index_ans} className="Quiz_multiple_options">
                                         
                                         
                                    
                                         <input
                                            key={index_ans}
                                            type="radio"
                                            name={item.queno}
                                            value={ans.que_options}
                                            checked={!!ans.selected}
                                            onChange={this.onInputChange}
                                        /> {ans.que_options}
                                    </div>
                                    )
                            })}
                     
                   
                    </div>
                )}

                if(item.type=="multi"){
                    return (
                        <div>
                          <div className="Quiz_que">{item.que}</div>
                           
                              
                                {item.options.map((ans,index_ans)=>{
                                    index_ans = index_ans + 1
                                    return (
                                        <div key={index_ans} className="Quiz_multiple_options">
                                             
                                             <input
                                                key={index_ans}
                                                type="checkbox"
                                                name={item.queno}
                                                value={ans.que_options}
                                                //checked={!!ans.selected}
                                                onChange={this.onInputChangeMulti}
                                            /> {ans.que_options}
                                        
                                             
                                        </div>
                                        )
                                })}
                         
                       
                        </div>
                    )}


             }else{
                 return null
             }
              
          })}

       <div className="Quiz-MobileStepper">
        <MobileStepper  variant="dots" steps={this.state.Quiz_Set.length} position="static" activeStep={this.state.activeStep}
            nextButton={
                this.state.activeStep === 19 ? 
                <Button size="small" onClick={this.onsubmit}>
                 Submit
                </Button>
                :
                <Button size="small" onClick={this.handleNext} disabled={this.state.activeStep === this.state.Quiz_Set.length}>
                Next
                </Button>

            }
            backButton={
                <Button size="small" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
                    Back
                </Button>
            }
        />
        </div>
     </div>
    }
     {this.Snackbarrender()}
  </div>
   )
  }
}

export default Quiz;



    
