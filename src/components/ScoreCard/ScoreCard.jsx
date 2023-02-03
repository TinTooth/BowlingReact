import Frame from "../Frame/Frame";
import "./ScoreCard.css"
const ScoreCard = ({frames}) => {

    return frames ?( 
        <div className="scorecard">
            {frames.map((frame,i) => {
                return(
                <div className="frameContainer" key = {i}>
                    <Frame frame = {frame}></Frame>
                </div>)
            })}
        </div>
     ): null;
}
 
export default ScoreCard;