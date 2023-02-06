import { useEffect,useState } from "react";
import InputControls from "../InputControls/InputControls";
import ScoreCard from "../ScoreCard/ScoreCard";

class Frame {
    constructor (frameNumber) {
        this.frameNumber = frameNumber
        this.ball1 = 0
        this.ball1bowled = false
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

    const openFrame = (frame) => {
        console.log('open')

    }

    const spareFrame = (frame) => {
        // console.log('spare')
        if (frames[frame+1].ball1bowled == true){
            frames[frame].frametotal = 10 + +frames[frame+1].ball1
            frames[frame].framescored = true;
        }
        if (frame != 0) {
            frames[frame].frametotal += frames[frame-1].frametotal
        }
        let newFrames = [...frames];
        setframes(newFrames);
    
    }

    const strikeFrame = (frame) => {
        if (frames[frame+1].ball1bowled == true && frames[frame+1].ball2bowled == true) {
            frames[frame].frametotal = 10 + +frames[frame+1].ball1 + +frames[frame+1].ball2
            frames[frame].framescored = true;
        }
        else if (frames[frame+1].ball1bowled == true && frames[frame+2].ball1bowled == true) {
            frames[frame].frametotal = 10 + +frames[frame+1].ball1 + +frames[frame+2].ball1
            frames[frame].framescored = true;
        }
        if (frame != 0) {
            frames[frame].frametotal += frames[frame-1].frametotal
        }
        // console.log('strike')
        let newFrames = [...frames];
        setframes(newFrames);
        
    }
    
    const tenthFrame = (frame) => {
        
        console.log('tenth')
    }

    const checkForMarks = () => {
        frames.forEach((frame) => {
            if (frame.frameNumber != 9){
                if (frame.ball1 == 10) {
                    frame.strike = true;
                    frame.ball2display = 'X';
                    frame.ball1display = '';
                    // frame.ball2bowled = true;
                }
                else if (+frame.ball1 + +frame.ball2 == 10){
                    frame.spare = true;
                    frame.ball2display = "/"
                }
                else  {
                    if (frame.ball1bowled == true) {
                        frame.ball1display = frame.ball1
                    }
                    if (frame.ball2bowled == true) {
                        frame.ball2display = frame.ball2
                    }
                }

            }
            else {
                if (frame.ball1 == 10) {
                    frame.ball1display = "X"
                }
                if (frame.ball2 == 10){
                    frame.ball2display = "X"
                }
                if (frame.ball3 == 10) {
                    frame.ball3display = "X"
                }
            }
        })
        let newFrames = [...frames];
        setframes(newFrames);
        
    }


    const calculateFrames = () => {
        checkForMarks();  
        frames.forEach((frame) => {
            console.log(frame)
            if (frame.frameNumber == 9) {
                tenthFrame(frame);
            }
                if (frame.strike == true) {
                    strikeFrame(frame.frameNumber);
                }
                else if (frame.spare == true){
                    spareFrame(frame.frameNumber);
                }
                else {
                    openFrame(frame.frameNumber);
                }


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