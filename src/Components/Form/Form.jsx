import "./Form.css";


export function Form(){
    return(
        <div className="form_div">
            <label htmlFor="form_description" className="body-home form_title">Descrição</label>
            <input placeholder="Digite aqui sua descrição" className="large_grey headline-home" id="form_description"/>
            <span className="body-home">Ex: Compra de roupas</span>
            <div className="wrap_small_inputs">
                <div className="small_input_div">
                    <label htmlFor="value" className="body-home">Valor</label>
                    <input placeholder="1" className="small_grey_inpt" id="value"/>
                </div>
                <div className="small_select_div">
                    <label htmlFor="trasaction" className="body-home">Tipo de valor</label>
                    <select className="small_grey_inpt" id="trasaction">
                        <option value="entrada">Entrada</option>
                        <option value="saída">Saída</option>
                    </select>
                </div>
            </div>
            <button className="large_pink">Inserir valor</button>
        </div>
    )
}