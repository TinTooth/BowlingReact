import { useEffect,useState } from "react";
import InputControls from "../InputControls/InputControls";
import ScoreCard from "../ScoreCard/ScoreCard";

class Frame {
    constructor (frameNumber) {
        this.frameNumber = frameNumber
        this.ball1 = 0
        this.ball1bowled = true
        this.ball2 = 0
        this.ball2bowled = false
        this.ball3 = 0
        this.ball3bowled = false
        this.frametotal = 0
        this.framescored = false
        this.ball1display = ''
        this.ball2display = ''
        this.ball3display = ''
        this.strike = false
        this.spare = false
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

    const openFrame = () => {

    }

    const spareFrame = () => {

    }

    const strikeFrame = () => {

    }

    const tenthFrame = () => {

    }

    const checkForMarks = () => {
        frames.forEach((frame) => {
            if (frame.ball1 === 10) {
                frame.stike = true;
            }
            if (frame.ball1 + frame.ball2 == 10){
                frame.spare = true;
            }
        })
        let newFrames = [...frames];
        setframes(newFrames);

    }


    const calculateFrames = () => {
        checkForMarks();  
        frames.forEach((frame) => {


     })

    }

    return (
        <>
        <div>Player: {player} Score: {total}</div>
        <ScoreCard frames = {frames}></ScoreCard>
        <InputControls frames = {frames} setframes = {setframes} calculateFrames = {calculateFrames}></InputControls>
        </>
      );
}
 
export default Player;