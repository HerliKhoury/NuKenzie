import "./Headder.css";
import companyLogo from '../../assets/images/logo_userPage.svg';

export function Headder(){
    return(
        <div className="headder_div">
            <header className="container space">
                <img src={companyLogo} alt="Logo" className="logo_user "></img>
                <button className="small_grey">Inicio</button>
            </header>
        </div>
    )
}