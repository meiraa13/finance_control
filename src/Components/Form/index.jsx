import { useEffect, useState } from "react"
import { v4 as uuid} from "uuid"


export function Form({ setListTransactions, listTransactions }){
    const [description, setDescription] = useState()
    const [value, setValue] = useState()
    const [type, setType] = useState()

    

    function handleSubmit(event){
        event.preventDefault()
    
        const newData = {
            description: description,
            type: type,
            value: Number(value),
            id:uuid()
        }


        setListTransactions([...listTransactions, newData])

    }

    return(

        <form onSubmit={handleSubmit}>
        <label>
          Description
          <input className="input1" onChange={(event)=> setDescription(event.target.value)} placeholder="Type here your description"></input>
        </label>
        <div className="div-labels">
          <label>
            Value
            <input className="input2" onChange={(event) => setValue(event.target.value)} type="number"  placeholder="1"></input>
          </label>
          <label>
            Income / Outcome
            <select onChange={(event) => setType(event.target.value)}>
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