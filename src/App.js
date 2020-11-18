import './App.css';
import { CreateButton } from './Components/Atoms/CreateButton';
import { Title } from './Components/Atoms/Title';

function App() {
  return (
    <div className="App">
      <Title title="Charging points per parking area"/>
      <CreateButton text="Click me!"/>
    </div>
  );
}

export default App;
