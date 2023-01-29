import "./TotalMoney.css";


export function TotalMoney({ totalCash }){
    return(
        <div className="total_div">
            <div className="top-total-money_div">
                <h2 className="title_3-user">Valor total:</h2>
                <span className="title_3-user">$ {totalCash}</span>
            </div>
            <span className="body-user">O valor se refere ao saldo</span>
        </div>
    )
}