import React from "react";

export default function Question(){
const questions = [
  { type:"single",
    key: "q1",
        
    question : "Muss ich als KL auch den IEACIL im eCampus vorbereiten?",
    Answers : [
        "Ja",
        "Nein", 
        "Kenne ich nicht" ]

   ,

    right : "Nein",

    loesung : "Nein, das übernimmt das IEACIL-Team. Manchmal werden die Kurse über Nacht vorbereitet, bis 9:30 Uhr sind Freischaltungen und Feedbacks angelegt. Bei Rückfragen bitte an die KL Annett Genenncher wenden."
},

 { type: "multi",
 key: "q2",
    question : "Wo finde ich als KL die Serverzuweisung für die neu startenden Kurse (News \"Einführung in unser Online-Lernformat\")? (Mehrfachnennung möglich)",
    Answers : [
        "News Überblicksseite",
        "IT Hubsite -> Applikationen ", 
        "IT Hubsite -> Service " ]

    ,

    right : ["News Überblicksseite", "IT Hubsite -> Service "],

    loesung : "Wer sich nicht in Sharepoint alle News anzeigen lassen will (auf der grandiosen Überblicksseite), kann die News auf der IT-Hubwebsite und dann unter Applikationen -> Lernplattformen -> WBS LS3D finden <a href=\"https://wbsgruppe.sharepoint.com/sites/IT-Applikationen/SitePages/WBS-LearnSpace-3D%C2%AE.aspx\">(LINK).</a> "
},

{ type: "multi",
key: "q3",
    question : "Welche Kompetenzpartnergremien (KPG) gibt es bei der WBS? (Mehrfachnennung möglich) ",
    Answers :[ 
        "KPG Bildung",
        "KPG Marketing, eCommerce und Vertrieb", 
        "KPG HR", 
        "KPG IT", 
        "KPG Finanzen", 
        "KPG Beratung" ]

    ,

    right : [ 
        "KPG Bildung",
        "KPG Marketing, eCommerce und Vertrieb", 
        "KPG HR", 
        "KPG IT", 
        "KPG Finanzen", 
        "KPG Beratung" ],

    loesung : "https://wbsgruppe.sharepoint.com/sites/wie-wir-arbeiten/SitePages/Gremien.aspx  "
},

{ type: "single",
key: "q4",
    question : "Wofür steht TSC",
    Answers : [
         "Training Service Center ",
        "Training Service Community ", 
        "Tennis Sport Club", 
        

    ],

    right : "Training Service Center ",
    loesung : "Das TSC ist das Training Service Center  "
    
},

{ type: "single",
key: "q5",
    question : "Wie viele Kompetenzbereiche gibt es im WBS Campus?",
    Answers : 
        [ "5",
        "7", 
        "8"]
        

    ,

    right : "8",
    loesung : "https://wbsgruppe.sharepoint.com/:p:/s/TeamWBSCampus/EXKKDVFAApFBpvGgRbGQ1I0BrJgjOovmp8DJU3-WvF6OHA?e=iTFybR"
}

]

// const sugg = questions.Answers.map(({inx, ele}) => (
//     <p key={inx}>{ele}</p>     
      
//   ))



function basic(){
  
  
      const que = questions[i].question;
      const ans = questions[i].Answers.map((elem) => <p>{elem}</p>)
      console.log(ans);

      return(
          <div><p>{que}</p>
          {ans}</div>
          
      )
 
   
    //   ele.Answers.map((elem) => elem))
        
          
      
}


//   basic();

return (
   
    <div>
        {questions.map(({elem}) => (
        {basic(elem)}
      )}
        
      

    </div>

);
};