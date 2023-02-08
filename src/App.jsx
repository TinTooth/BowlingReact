import { useEffect,useState } from "react";
import './App.css';
import Player from './components/Player/Player';


function App() {
  const [team1List, setteam1List] = useState([]);
  const [team2List, setteam2List] = useState([]);
  const [name, setname] = useState();
  const [handicap, sethandicap] = useState();
  const [team, setteam] = useState();
  const [team1Score, setteam1Score] = useState(0);
  const [team2Score, setteam2Score] = useState(0);

  useEffect (()=> {
    updateScores()
  },[team1List,team2List])

  const updateScores = () => {
    let result1 = 0;
    let result2 = 0;
    team1List.forEach((player) => {
      result1+= player.total
    })
    team2List.forEach((player) => {
      result2+= player.total
    })
    setteam1Score(result1);
    setteam2Score(result2);
  }


  const addPlayer = (e) => {
    e.preventDefault()
    if (team == 1) {
      team1List.push({name:name,handicap:handicap,team:team,total:0});
      let newList = [...team1List]
      setteam1List(newList)
    }
    else {
      team2List.push({name:name,handicap:handicap,team:team,total:0});
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


      <div>Team 1 Total: {team1Score}</div>
      <div>Team 2 Total: {team2Score}</div>

      {team1List.map((player,i)=> {
        return <Player pnumber={i} key = {i} name = {player.name} handicap = {player.handicap} 
        team = {player.team} teamPlayers = {team1List} setTeam = {setteam1List}/>
      })}
      {team2List.map((player,i)=> {
        return <Player  pnumber={i} key = {i} name = {player.name} handicap = {player.handicap}
         team = {player.team} teamPlayers = {team2List} setTeam = {setteam2List}/>
      })}

    {/* <Player name = {'Ben'} handicap = {105}></Player> */}
    </div>
  );
}

export default App;
