import React from "react";

export default function Single(props) {
  const item= props.pos;
      console.log(props.pos.options[0])
      return (

        <>
        {item.options[0] ? <div key = "0"><input 
                                                        key={0}
                                                        type="radio"
                                                        name={item.queno}
                                                        value={item.options[0].que_options}
                                                        checked={!!item.option[0].selected}
                                                        //onChange={this.onInputChange}
                                                    />
        
        
        
        {item.options[0].que_options}</div> : <div className="lost">{item.options[0]}</div> }
        {item.options[1] ? <div>{item.options[1].que_options}</div> : <div className="lost">{item.options[0]}</div> }
        
        {item.options[2] ? <div>{item.options[2].que_options}</div> : <div className="lost">{item.options[0]}</div> }
        
        {item.options[3] ? <div>{item.options[3].que_options}</div> : <div className="lost">{item.options[0]}</div> }

        
        {item.options[4] ? <div>{item.options[4].que_options}</div> : <div className="lost">{item.options[0]}</div> }

        
        {item.options[5] ? <div>{item.options[5].que_options}</div> : <div className="lost">{item.options[0]}</div> }


        </>
      );
    // return(
    // // <div className="Quiz_options"> Options are : </div>
    //                              {props.pos.options.map((ans,index_ans)=>{
    //                                  index_ans = index_ans + 1
    //                                  return (
    //                                      <div key={index_ans} className="Quiz_multiple_options">
                                              
    //                                           {index_ans}] {ans.que_options}
                                         
    //                                           <input
    //                                              key={index_ans}
    //                                              type="radio"
    //                                              name={item.queno}
    //                                              value={ans.que_options}
    //                                              checked={!!ans.selected}
    //                                              onChange={this.onInputChange}
    //                                          />
    //                                      </div>
    //                                      )
    //                              })})

}