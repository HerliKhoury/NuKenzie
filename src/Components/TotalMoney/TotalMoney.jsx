import "./TotalMoney.css";


export function TotalMoney({ total }){
    return(
        <div className="total_div">
            <div className="top-total-money_div">
                <h2 className="title_3-user">Valor total:</h2>
                <span className="title_3-user">$ {total}</span>
            </div>
            <span className="body-user">O valor se refere ao saldo</span>
        </div>
    )
}