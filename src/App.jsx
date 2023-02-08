import { useEffect,useState } from "react";
import './App.css';
import Player from './components/Player/Player';


function App() {
  const [playerList, setplayerList] = useState([]);
  const [name, setname] = useState();
  const [handicap, sethandicap] = useState();

  const addPlayer = (e) => {
    e.preventDefault()
    playerList.push({name:name,handicap:handicap});
    let newList = [...playerList]
    setplayerList(newList)
  }

  return (
    <div className="App">
      <div className="add-player-container">
        <form onSubmit={addPlayer}>
          <label>Player Name</label>
          <input value = {name} onChange={(e)=>(setname(e.target.value))} />
          <label>Handicap</label>
          <input type = {'number'}value = {handicap} onChange={(e)=>(sethandicap(e.target.value))} />
          <button>Add Player</button>
        </form>
      </div>

      {playerList.map((player)=> {
        return <Player name = {player.name} handicap = {player.handicap}/>
      })}

    {/* <Player name = {'Ben'} handicap = {105}></Player> */}
    </div>
  );
}

export default App;
