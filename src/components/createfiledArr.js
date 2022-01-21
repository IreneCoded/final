import React, { useState } from "react";

export default function CreateFieldArr(props) {
  const [inputList, setInputList] = useState([{}]);

  // handle input change
  const handleInputChange = (e, index) => {
    const value = e.target.value;
    const list = [...inputList];
    list[index] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
  };

  return (
    <div className="App">
      
      {inputList.map((x, i) => {
        return (
          <div className="box">
              
              <><input
              name="firstName"
			  placeholder="Fixed Term"
              value={x.firstname}
              onChange={e => handleInputChange(e, i)} />
            
             <input
              className="ml10"
              name="To sort"
			  placeholder="To sort"
              value={x.lastName}
              onChange={e => handleInputChange(e, i)}
            /></>
          
              {inputList.length !== 1 && <button
                className="mr10 bold"
                onClick={() => handleRemoveClick(i)}>-</button>}

                <div>{inputList.length - 1 === i && <button className="bold" onClick={handleAddClick}>+</button>}</div>


               
           
          </div>
        );
      })}
      { inputList.length > 3? <button  className="submit">Fertig</button>: ""}
    </div>
  );
}
