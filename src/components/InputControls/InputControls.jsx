import {useState} from "react"
import "./InputControls.css"
const InputControls = ({frames, setframes, calculateFrames}) => {
    const [currentFrame, setcurrentFrame] = useState(0);

    const downFrame = () => {
        if (currentFrame != 0) {
            setcurrentFrame(currentFrame-1);
        }
    }
    const upFrame = () => {
        if (currentFrame != 9) {
            setcurrentFrame(currentFrame+1);
        }
    }

    const setBall1 = (e) => {
       
        frames[currentFrame].ball1 = e.target.id
        frames[currentFrame].ball1bowled = true
        let newFrames = [...frames];
        setframes(newFrames);
        calculateFrames(currentFrame);
    }
    const setBall2 = (e) => {
        
        frames[currentFrame].ball2 = e.target.id
        frames[currentFrame].ball2bowled = true
        let newFrames = [...frames];
        setframes(newFrames);
        calculateFrames();
    }
    const setBall3 = (e) => {
        
        frames[currentFrame].ball3 = e.target.id
        frames[currentFrame].ball3bowled = true
        let newFrames = [...frames];
        setframes(newFrames);
        calculateFrames();
    }

    const generateButtonBall1 = (i) => {
    
     return(<div key = {i} className="ball-button" id = {i+1} onClick = {setBall1}>{i+1}</div> )
       
    }
    const generateButtonBall2 = (i) => {
        if (+frames[currentFrame].ball1 + i < 10){
            return(<div key = {i} className="ball-button" id = {i+1} onClick = {setBall2}>{i+1}</div> )
        }
    }
    const generateButtonBall2tenth = (i) => {
        
        return(<div key = {i} className="ball-button" id = {i+1} onClick = {setBall2}>{i+1}</div> )
    }
    
    const generateButtonBall3 = (i) => {
    
     return(<div key = {i} className="ball-button" id = {i+1} onClick = {setBall3}>{i+1}</div> )
       
    }

    return (
        <div className = "control-bar">
            <div className="frame-controls">
                <button onClick = {downFrame}>-</button>
                <div>{currentFrame+1}</div>
                <button onClick = {upFrame}>+</button>
            </div>
            <div className="ball-controls">
                <div className="ball-row">
                    <div className="ball"> 1st Ball</div>
                    <div className="ball-button" id = '0' onClick = {setBall1}>0</div>
                    {frames.map((frame)=> {
                        return (generateButtonBall1(frame.frameNumber))
                    })}
                </div>
                <div className="ball-row">
                <div className="ball"> 2nd Ball</div>
                <div className="ball-button" id = '0' onClick = {setBall2}>0</div>
                {currentFrame != 9 || frames[9].ball1 != 10? (frames.map((frame)=> {
                        return (generateButtonBall2(frame.frameNumber))
                    })):
                    (frames.map((frame)=> {
                        return (generateButtonBall2tenth(frame.frameNumber))
                    }))}
                </div>
                { currentFrame == 9 && frames[9].tenMark ? (

                    <div className="ball-row">
                    <div className="ball"> 3rd Ball</div>
                    <div className="ball-button" id = '0' onClick = {setBall3}>0</div>
                    {frames.map((frame)=> {
                        return (generateButtonBall3(frame.frameNumber))
                    })}
                    
                </div>
                ): null
                }   
            </div>
        </div>
        
     );
    }
 
export default InputControls;