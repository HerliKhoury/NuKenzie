import {  useRef } from "react";
import { v4 as uuid } from "uuid";
import "./Form.css";


export function Form({addToList/* , refreshTotal */}){

    const descriptionRef = useRef();
    const valueRef = useRef();
    const transactionTypeRef = useRef();
    

    function submitForm(e) {
        e.preventDefault();
        let newTransaction = {
            id: uuid(),
            description: descriptionRef.current.value, 
            type:transactionTypeRef.current.value, 
            value: !!Number(valueRef.current.value) ?  Number(valueRef.current.value) : 0
        };

        addToList(newTransaction);
        /* refreshTotal(newTransaction); */
    }

    return(
        <div className="form_div">
            <form onSubmit={submitForm}>
                <div className="flex_column">
                    <label htmlFor="form_description" className="body-home form_title">Descrição</label>
                    <input ref={descriptionRef} placeholder="Digite aqui sua descrição" className="large_grey headline-home" id="form_description"/>
                    <span className="body-home">Ex: Compra de roupas</span>  
                </div>
                <div className="wrap_small_inputs">
                    <div className="small_input_div">
                        <label htmlFor="value" className="body-home">Valor</label>
                        <input ref={valueRef} placeholder="1" className="small_grey_inpt" id="value" type="number"/>
                    </div>
                    <div className="small_select_div">
                        <label htmlFor="trasaction" className="body-home">Tipo de valor</label>
                        <select ref={transactionTypeRef} className="small_grey_inpt" id="trasaction" >
                            <option value="entrada">Entrada</option>
                            <option value="saída">Saída</option>
                        </select>
                    </div>
                </div>
                <button className="large_pink" type="submit" >Inserir valor</button>
            </form>
        </div>
    )
    }

    // onSubmit={(e) => {
    //     e.preventDefault();
    //     addToList({
    //         description: descriptionInput, 
    //         type:transactionTypeInpt, 
    //         value: valueInpt  
    //     })
        
    // }}