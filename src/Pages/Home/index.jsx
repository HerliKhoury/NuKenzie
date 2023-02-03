import { HomeInfo } from "../../Components/HomeInfo/HomeInfo"
import { DashBoard } from "../../Components/DashBoard/DashBoard"
import { useState } from "react"

export function Home() {
    //flag para decidir qual componente mostrar -> estado
    const [showDashboardFlag, setShowDashboardFlag] = useState(false);
    

    // definir funcao que altera o estado acima quando disparada
    function changeScreen(){
        setShowDashboardFlag(!showDashboardFlag);
    }

    return showDashboardFlag ? <DashBoard change={changeScreen}/> : <HomeInfo onClickIniciar={changeScreen}/>
    
}