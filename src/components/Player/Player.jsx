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
        this.tenMark = false
    }

}

const Player = ({name, handicap, team}) => {
    let player = name
    let hc = handicap
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

    useEffect ( () => {
        getScore()
    },[frames]

    )

    const openFrame = (frame) => {
        // console.log('open')
        frames[frame].frametotal = +frames[frame].ball1 + +frames[frame].ball2
        frames[frame].framescored = true
        if (frame != 0) {
            frames[frame].frametotal += frames[frame-1].frametotal
        }
        let newFrames = [...frames];
        setframes(newFrames);

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
        else if (frame+2 <10 && frames[frame+1].ball1bowled == true && frames[frame+2].ball1bowled == true) {
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
        if (frames[frame-1].framescored == true && frames[frame].ball1bowled == true){
            frames[frame].framescored = true;
            frames[frame].frametotal = 0;
            frames[frame].frametotal += frames[frame-1].frametotal + +frames[frame].ball1 + +frames[frame].ball2 + +frames[frame].ball3
        }

        if (frames[frame].ball1 == 10 || +frames[frame].ball1 + +frames[frame].ball2 == 10) {
            frames[frame].tenMark = true
        }

        let newFrames = [...frames];
        setframes(newFrames);
        
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
                    // frame.strike = true;
                }
                else {
                    frame.ball1display = frame.ball1
                }

                if (frame.ball2 == 10){
                    frame.ball2display = "X"
                }
                else if (+frame.ball1 + +frame.ball2 == 10 && frame.ball2bowled == true){
                    frame.ball2display = "/"
                    frame.spare = true;
                }
                else {
                    frame.ball2display = frame.ball2;
                }
                if (frame.ball3 == 10) {
                    frame.ball3display = "X"
                }
                else if (+frame.ball2 + +frame.ball3 == 10){
                    frame.ball3display = "/"
                }
                else {
                    frame.ball3display = frame.ball3
                }
            }
        })
        let newFrames = [...frames];
        setframes(newFrames);
        
    }


    const calculateFrames = () => {
        checkForMarks();  
        frames.forEach((frame) => {
            // console.log(frame)
            if (frame.frameNumber == 9) {
                tenthFrame(frame.frameNumber);
            }
            else if (frame.strike == true) {
                strikeFrame(frame.frameNumber);
            }
            else if (frame.spare == true){
                spareFrame(frame.frameNumber);
            }
            else if (frame.ball1bowled == true && frame.ball2bowled == true) {
                openFrame(frame.frameNumber);
            }


     })

    }

    function getScore () {
        let result = frames[0].frametotal
        for (let i = 1; i <=9; i++) {
            if (frames[i].framescored == true)  {
                result += (frames[i].frametotal - frames[i-1].frametotal)
            }
        }
        settotal(result)
    }

    return (
        <>
        <div>Player: {player} Handicap: {hc}</div>
        <div>Score: {total} Handicaped Score : {total+hc}</div>
        <ScoreCard frames = {frames} team = {team}></ScoreCard>
        <InputControls frames = {frames} setframes = {setframes} calculateFrames = {calculateFrames} team = {team}></InputControls>
        </>
      );
}
 
export default Player;