import "./TransactionCard.css";



export function TransactionCard({ removeTransaction ,transactionObj}){

    const brCoin = transactionObj.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL', minimumFractionDigits: 2});


    return(
        <div className={`wrap_card ${transactionObj.type === "entrada" ? "margin_green" : "margin_gray"} `}>
            <div className="card_upper_div">
                <h2 className="title_3-user">{transactionObj.description}</h2>
                <div className="small_inner_div">
                    <span className="body-user">{brCoin}</span>
                    <button type="button" className="delete_btn" onClick={() => {removeTransaction(transactionObj.id)}}/>
                </div>
            </div>
            <span className="body-user trans_type">{transactionObj.type[0].toUpperCase() + transactionObj.type.substring(1)}</span>
        </div>
    )
}