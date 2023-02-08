import { useEffect,useState } from "react";
import './App.css';
import Player from './components/Player/Player';


function App() {
  const [team1List, setteam1List] = useState([]);
  const [team2List, setteam2List] = useState([]);
  const [name, setname] = useState();
  const [handicap, sethandicap] = useState();
  const [team, setteam] = useState();


  const addPlayer = (e) => {
    e.preventDefault()
    if (team == 1) {
      team1List.push({name:name,handicap:handicap,team:team});
      let newList = [...team1List]
      setteam1List(newList)
    }
    else {
      team2List.push({name:name,handicap:handicap,team:team});
      let newList = [...team2List]
      setteam2List(newList)
    }
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
          <label>Team (1 or 2)</label>
          <input type = {"range"} min = {1} max = {2} value = {team} onChange={(e)=>(setteam(e.target.value))} />
        </form>
      </div>

      {team1List.map((player,i)=> {
        return <Player key = {i} name = {player.name} handicap = {player.handicap} team = {player.team}/>
      })}
      {team2List.map((player,i)=> {
        return <Player key = {i} name = {player.name} handicap = {player.handicap} team = {player.team}/>
      })}

    {/* <Player name = {'Ben'} handicap = {105}></Player> */}
    </div>
  );
}

export default App;
