import React from "react";

import { ListItem } from "@material-ui/core";
export default function Multi(props) {
      
      
     const item= props.pos;

     console.log(item)
    //  const answers = item.options.map = ((ans, index_ans) =>{
    //     index_ans = index_ans + 1
    //      return (
    //         <div key={index_ans} className="Quiz_multiple_options">
                                              
                                        
                                         
    //                                           <input
    //                                              key={index_ans}
    //                                              type="checkbox"
    //                                              name={item.queno}
    //                                              value={ans.que_options}
    //                                              checked={!!ans.selected}
    //                                              onChange={this.onInputChange}
    //                                          />
    //                                      </div>

    //      )

    //  }
     
     
     
    //  )

    //  return answers;

    return(


               // <div className="Quiz_options"> Options are : </div>
                                 item.map((ans,index_ans)=>{
                                     index_ans = index_ans + 1
                                     return (
                                         <div key={index_ans} className="Quiz_multiple_options">
                                              
                                              {index_ans}] {ans.que_options}
                                         
                                              <input
                                                 key={index_ans}
                                                 type="radio"
                                                 name={item.queno}
                                                 value={ans.que_options}
                                                 checked={!!ans.selected}
                                                 //onChange={this.onInputChange}
                                             />
                                         </div>
                                         )
                                 })

                                )}