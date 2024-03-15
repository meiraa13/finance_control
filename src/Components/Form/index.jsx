import { useState } from "react"
import { v4 as uuid} from "uuid"


export function Form({ setListTransactions, listTransactions }){
    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")
    const [type, setType] = useState("")

    function handleSubmit(event){
      event.preventDefault()
      if(description == "" || value == "" || type == ""){
        return
      }
      const newData = {
        description: description,
        type: type,
        value: Number(value),
        id:uuid()
      }
      
      setListTransactions([...listTransactions, newData])

      setDescription("")
      setValue("")
      setType("")
    }

    return(

        <form onSubmit={handleSubmit}>
          <label>
            Description
            <input 
            className="input1" 
            value={description} 
            onChange={(event)=> setDescription(event.target.value)} 
            placeholder="Type here your description" 
            />
          </label>
          <div className="div-labels">
            <label>
              Value
              <input 
              value={value}
              className="input2" 
              onChange={(event) => setValue(event.target.value)} 
              type="number"  
              placeholder="$1" 
              />
            </label>
            <label>
              Income / Outcome
              <select value={type} onChange={(event) => setType(event.target.value)}>
                <option>Select</option>
                <option>Income</option>
                <option>Outcome</option>
              </select>
            </label>
          </div>
          <button className="btn-value">Insert value</button>
      </form>



    )



}