
import { FaTrash } from "react-icons/fa"

export function List({ description, value, type, remove, lista }){

    return (

        <>
        
            <li className={lista}>
                <div className="div-li">
                    <h3>{description}</h3>
                    <p>{value}</p>
                    <button className="trash" onClick={remove}><FaTrash /></button>
                </div>
                <p>{type}</p>
            </li>
          
         
         
        </>
    )


}