import './App.css';
import './styles/globalStyle.css';
import './styles/fonts.css';
import './styles/buttons.css';
import './styles/inputs.css';
import { HomeInfo } from './Components/HomeInfo/HomeInfo';
import { Headder } from './Components/Headder/Headder';
import { Form } from './Components/Form/Form';
import { TotalMoney } from './Components/TotalMoney/TotalMoney';

function App() {
  return (
    <div>
      <Headder/>
      <HomeInfo/>
      <Form/>
      <TotalMoney totalCash={350}/>
    </div>
  );
}

export default App;
