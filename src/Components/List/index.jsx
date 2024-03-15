
import { FaTrash } from "react-icons/fa"

export function List({ description, value, type, remove, lista }){

    return (
        <>
            <li className={lista}>
                <div className="div-li">
                    <h3>transaction - {description}</h3>
                    <p>R$: {value}</p>
                    <button className="trash" onClick={remove}><FaTrash /></button>
                </div>
                <p className="p-type">{type == "Income"? "+" : "-"} {type}</p>
            </li>
        </>
    )
}