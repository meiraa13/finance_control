
export function Header ({changePage}){


    return(

        <>
             <header>
                <div className="div-header container">
                    <h2>Nu Kenzie</h2>
                    <button className="btn-goBack" onClick={changePage} >Home Page</button>
                </div>
            </header>
        </>



    )


}