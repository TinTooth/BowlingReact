import Frame from "../Frame/Frame";
import "./ScoreCard.css"
const ScoreCard = ({frames,team}) => {

    return frames && team == 1 ?( 
        <div className= {`scorecard1`}>
            {frames.map((frame,i) => {
                return(
                <div className="frameContainer" key = {i}>
                    <Frame frame = {frame}></Frame>
                </div>)
            })}
        </div>
    ): frames ?(
        <div className= {`scorecard2`}>
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