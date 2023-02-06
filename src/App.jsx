import logo from './logo.svg';
import './App.css';
import Player from './components/Player/Player';


function App() {
  return (
    <div className="App">
    <Player name = {'Ben'} handicap = {105}></Player>
    </div>
  );
}

export default App;
