import "./CardList.css";
import emptyCard from '../../assets/images/NoCard.svg';
import { TransactionCard } from '../TransactionCard/TransactionCard';

export function CardList({onRemoveTransaction, list}){

    return (
        <div className='wrap_CardsList'>
            <h3 className="title_3-user">Resumo financeiro</h3>
            {
                list.length < 1 ?
                    <div className="empty_div">
                        <h2 className="title_2-user">Você ainda não possui nenhum lançamento</h2>
                        <img src={emptyCard} alt='empty_card'/>
                        <img src={emptyCard} alt='empty_card'/>
                        <img src={emptyCard} alt='empty_card'/>
                    </div>
                :
                    list.map((trasaction) => 
                        <TransactionCard key={trasaction.id} removeTransaction={onRemoveTransaction} transactionObj={trasaction}/>
                    )
                

            }

        </div>
    )
}