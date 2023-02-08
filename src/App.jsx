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
  const [team1HandicapScore, setteam1HandicapScore] = useState();
  const [team2HandicapScore, setteam2HandicapScore] = useState();

  useEffect (()=> {
    updateScores()
  },[team1List,team2List])

  const updateScores = () => {
    let result1 = 0;
    let hresult1 = 0;
    let result2 = 0;
    let hresult2 = 0;
    team1List.forEach((player) => {
      result1+= player.total
      hresult1 += player.total+ +player.handicap
    })
    team2List.forEach((player) => {
      result2+= player.total
      hresult2 += player.total+ +player.handicap
    })
    setteam1Score(result1);
    setteam1HandicapScore(hresult1);
    setteam2Score(result2);
    setteam2HandicapScore(hresult2);
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

      <div className="top-bar">

      <div className="add-player-container">
        <form onSubmit={addPlayer}>
          <div className="row">

          <label>Player Name</label>
          <input value = {name} onChange={(e)=>(setname(e.target.value))} />
          <label>Handicap</label>
          <input type = {'number'}value = {handicap} onChange={(e)=>(sethandicap(e.target.value))} />
          </div>
          <label>Team 1</label>
          <input type = {"range"} min = {1} max = {2} value = {team} onChange={(e)=>(setteam(e.target.value))} />
          <label className = 'no-pad'>Team 2</label>
          <button>Add Player</button>
        </form>
      </div>
      <div className="score-row">
        <div className="team-total">Team 1 Total Pins: {team1Score} </div>
        <div className="team-total">  {team2Score} : Team 2Total Pins</div>
      </div>
      <div className="score-row">
        <div className="team-total"> Handicap Total Pins: {team1HandicapScore}</div>
        <div className="team-total"> {team2HandicapScore}: Handicap Total Pins</div>
      </div>
      </div>
      <div className="score-cards">
        {team1List.map((player,i)=> {
          return <Player pnumber={i} key = {i} name = {player.name} handicap = {player.handicap} 
          team = {player.team} teamPlayers = {team1List} setTeam = {setteam1List}/>
        })}
        {team2List.map((player,i)=> {
          return <Player  pnumber={i} key = {i} name = {player.name} handicap = {player.handicap}
          team = {player.team} teamPlayers = {team2List} setTeam = {setteam2List}/>
        })}
      </div>
    </div>
  );
}

export default App;
