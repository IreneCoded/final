import { Component } from "react";
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
//import Replay from '@material-ui/icons/Replay';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from "@material-ui/lab/Alert";



const Quiz_Set = [
    {
        queno:"que_1",
        que : "Muss ich als KL auch den IEACIL im eCampus vorbereiten? ",
        options : [{que_options: "Ja" , selected: false},{que_options:"Nein", selected: false},{que_options:"Kenne ich nicht.", selected: false}],
        ans : "Nein",
        ex : "Nein, das übernimmt das IEACIL-Team. Manchmal werden die Kurse über Nacht vorbereitet, bis 9:30 Uhr sind Freischaltungen und Feedbacks angelegt. Bei Rückfragen bitte an die KL Annett Genenncher wenden.",
        type: "single"
    },
    {
        queno:"que_2",
        que : "Wo finde ich als KL die Serverzuweisung für die neu startenden Kurse (News \"Einführung in unser Online-Lernformat\")?",
        options : [{que_options: "News Überblicksseite " , selected: false},{que_options:"IT Hubsite -> Applikationen", selected: false},{que_options:"IT Hubsite -> Service ", selected: false}],
        ans : ["News Überblicksseite" , "IT Hubsite -> Applikationen" ],
        ex : "Wer sich nicht in Sharepoint alle News anzeigen lassen will (auf der grandiosen Überblicksseite), kann die News auf der IT-Hubwebsite und dann unter Applikationen -> Lernplattformen -> WBS LS3D finden ",
        type: "multi"
    },
    {
        queno:"que_3",
        que : "Welche Kompetenzpartnergremien (KPG) gibt es bei der WBS? (Mehrfachnennung möglich)", 
        
        options : [{que_options: "KPG Bildung " , selected: false},{que_options:"KPG Marketing, eCommerce und Vertrieb ", selected: false},{que_options:"KPG HR ", selected: false},{que_options:"KPG IT  ", selected: false}, {que_options:"KPG Finanzen ", selected: false}, {que_options:"KPG Beratung", selected: false}],
        ans : [ 
            "KPG Bildung",
            "KPG Marketing, eCommerce und Vertrieb", 
            "KPG HR", 
            "KPG IT", 
            "KPG Finanzen", 
            "KPG Beratung" ],
        ex :"https://wbsgruppe.sharepoint.com/sites/wie-wir-arbeiten/SitePages/Gremien.aspx ",
        type: "multi"
    },
    
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

    onsubmit = () =>{
         //   console.log(this.state.Quiz_Set)
         let list = this.state.Quiz_Set ;
         let count = 0;
         let notattempcount = 0;
     
                list.map((item,key)=>{
                    item.options.map((anslist,key)=>{
                       //  console.log("anslist.selected===>",anslist.selected)
                       if(anslist.selected === true){
                           if(anslist.que_options === item.ans){
                           //   console.log("===>",anslist.que_options,item.ans)
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
           <h2> The score is {this.state.Total} Out Of 3 </h2>
             <Button onClick={()=>{this.setState({booleanonsubmit:false,activeStep:0,Quiz_Set : Quiz_Set,Total:0})}}>  Try again </Button> 
        </div>
     :
     <div className="Quiz_container_display"> 
          {this.state.Quiz_Set.map((item,index)=>{
             if( Math.abs(this.state.activeStep - index)<=0)
             {
                return (
                    <div>
                      <div className="Quiz_que">{item.que}</div>
                       
                          <div className="Quiz_options"> Options are : </div>
                            {item.options.map((ans,index_ans)=>{
                                index_ans = index_ans + 1
                                return (
                                    <div key={index_ans} className="Quiz_multiple_options">
                                         
                                         {index_ans}] {ans.que_options}
                                    
                                         <input
                                            key={index_ans}
                                            type="checkbox"
                                            name={item.queno}
                                            value={ans.que_options}
                                            // checked={ans.selected}
                                            onChange={this.onInputChange}
                                        />
                                    </div>
                                    )
                            })}
                     
                   
                    </div>
                )
             }else{
                 return null
             }
              
          })}

       <div className="Quiz-MobileStepper">
        <MobileStepper  variant="dots" steps={this.state.Quiz_Set.length} position="static" activeStep={this.state.activeStep}
            nextButton={
                this.state.activeStep === 2 ? 
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