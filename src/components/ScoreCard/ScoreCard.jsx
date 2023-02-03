import Frame from "../Frame/Frame";

const ScoreCard = ({frames}) => {

    return frames ?( 
        <div>ScoreCard
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