import "./HomeInfo.css";
import companyLogo from '../../assets/images/logo_homePage.svg';

export function HomeInfo(){
    return(
        <div className="info_div">
            <img src={companyLogo} alt="Logo" className="logo_home"></img>
            <h1 className="title_home title_1-home">
                Centralize o controle das suas finanças
            </h1>
            <span className="headline-home">de forma rápida e segura</span>
            <button className="small_pink">Iniciar</button>
        </div>
    )
}