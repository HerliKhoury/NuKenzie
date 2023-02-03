import "./DashBoard.css";
import { useState, useEffect } from "react";
import { Headder } from "../Headder/Headder";
import { TotalMoney } from "../TotalMoney/TotalMoney";
import { CardList } from "../CardList/CardList";
import { Form } from "../Form/Form";

export function DashBoard({change}){
    
    const [listTransaction, setListTransaction] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(()=> {
        function calculateTotal(transactionList) {
            let newTotal = 0
            for(let transaction of transactionList) {
                if(transaction.type === 'entrada') {
                    newTotal += transaction.value
                } else {
                    newTotal -= transaction.value
                }
            }
            return !!newTotal ? newTotal : 0 
        }
        if(listTransaction.length > 0) {
            setTotal(calculateTotal(listTransaction))
        } else {
            setTotal(0);
        }
    }, [listTransaction]);


    function addToListTransaction(newTransaction){
        if(!!newTransaction) setListTransaction([...listTransaction, newTransaction]);
    }

    function removeFromListTransaction(id){
        const newList = listTransaction.filter((transaction) =>  transaction.id !== id);
        setListTransaction(newList);
    }

    return (
        <div>
            <Headder changePages={change}/>
            <div className="container wrap_dashboard">
                <div className="wrap_left">
                    <Form addToList={addToListTransaction} />
                    {total ? <TotalMoney total={total}/> : ""}
                </div>
                <CardList onRemoveTransaction={removeFromListTransaction} list={listTransaction}/>
            </div>
        </div>
    )
}
