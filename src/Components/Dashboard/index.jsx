import { Form } from "../Form";
import { List } from "../List";
import { TotalMoney } from "../TotalMoney";
import "./dashboard.css";
import { useEffect, useState } from "react";
import { NoItem } from "../NoItem";
import { Header } from "../Header";

export function Dashboard({ changePage }) {

  const localTransactions = localStorage.getItem('@TRANSACTIONS')
  const [listTransactions, setListTransactions] = useState(localTransactions? JSON.parse(localTransactions): [])
  
  useEffect(()=>{
    localStorage.setItem('@TRANSACTIONS', JSON.stringify(listTransactions))

  },[listTransactions])

  const totalPrice = listTransactions.reduce((valorAnterior, valorAtual)=>{

    if(valorAtual.type == "Income"){
      return valorAtual.value + valorAnterior
    }else {
      return valorAnterior - valorAtual.value
    }
    
  },0)

  


  return (
    <>
      < Header changePage={changePage} />
     
      <main className="container">
        <div className="div-main">
          <div className="div-left">
            <div className="div-top">
              < Form setListTransactions={setListTransactions} listTransactions={listTransactions}/>
            </div>
            <div className="div-bottom">
              < TotalMoney total={totalPrice} />
            </div>
          </div>
          <div className="div-right">
            <ul>
              <h2>Summary</h2>
              {
                listTransactions.length == 0
                ? <NoItem />
                :listTransactions.map((list)=>(
                  <List key={list.id} lista={list.type=="Income"? "list-income": "list-outcome"} description={list.description} value={list.value} type={list.type} 
                  remove={()=>{setListTransactions(listTransactions.filter(item => item.id !== list.id))}}/> 
                ))
              }
             
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
