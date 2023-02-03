import { useEffect,useState } from "react";
import InputControls from "../InputControls/InputControls";
import ScoreCard from "../ScoreCard/ScoreCard";

class Frame {
    constructor (frameNumber) {
        this.frameNumber = frameNumber
        this.ball1 = 0
        this.ball2 = 0
        this.ball3 = 0
    }

}

const Player = ({name}) => {
    let player = name
    const [frames, setframes] = useState(generateFrames());
    const [total, settotal] = useState(0);

    function generateFrames () {
        let result = []
        for (let i = 0; i <= 9; i++) {
            let newFrame = new Frame(i)
            result.push(newFrame)
        }
        return result
    }

    return (
        <>
        <div>Player: {player} Score: {total}</div>
        <ScoreCard frames = {frames}></ScoreCard>
        <InputControls></InputControls>
        </>
      );
}
 
export default Player;