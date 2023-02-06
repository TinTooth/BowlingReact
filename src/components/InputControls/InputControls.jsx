import {useState} from "react"
import "./InputControls.css"
const InputControls = ({frames, setframes}) => {
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
    }
    const setBall2 = (e) => {
      
        frames[currentFrame].ball2 = e.target.id
        frames[currentFrame].ball2bowled = true
        let newFrames = [...frames];
        setframes(newFrames);
    }
    const setBall3 = (e) => {
       
        frames[currentFrame].ball3 = e.target.id
        frames[currentFrame].ball3bowled = true
        let newFrames = [...frames];
        setframes(newFrames);
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
                    <div className="ball-button" id = '1' onClick = {setBall1}>1</div>
                    <div className="ball-button" id = '2' onClick = {setBall1}>2</div>
                    <div className="ball-button" id = '3' onClick = {setBall1}>3</div>
                    <div className="ball-button" id = '4' onClick = {setBall1}>4</div>
                    <div className="ball-button" id = '5' onClick = {setBall1}>5</div>
                    <div className="ball-button" id = '6' onClick = {setBall1}>6</div>
                    <div className="ball-button" id = '7' onClick = {setBall1}>7</div>
                    <div className="ball-button" id = '8' onClick = {setBall1}>8</div>
                    <div className="ball-button" id = '9' onClick = {setBall1}>9</div>
                    <div className="ball-button" id = '10' onClick = {setBall1}>10</div>
                </div>
                <div className="ball-row">
                <div className="ball"> 2nd Ball</div>
                    <div className="ball-button" id = '0' onClick = {setBall2}>0</div>
                    <div className="ball-button" id = '1' onClick = {setBall2}>1</div>
                    <div className="ball-button" id = '2' onClick = {setBall2}>2</div>
                    <div className="ball-button" id = '3' onClick = {setBall2}>3</div>
                    <div className="ball-button" id = '4' onClick = {setBall2}>4</div>
                    <div className="ball-button" id = '5' onClick = {setBall2}>5</div>
                    <div className="ball-button" id = '6' onClick = {setBall2}>6</div>
                    <div className="ball-button" id = '7' onClick = {setBall2}>7</div>
                    <div className="ball-button" id = '8' onClick = {setBall2}>8</div>
                    <div className="ball-button" id = '9' onClick = {setBall2}>9</div>
                    <div className="ball-button" id = '10' onClick = {setBall2}>10</div>
                </div>
                <div className="ball-row">
                <div className="ball"> 3rd Ball</div>
                    <div className="ball-button" id = '0' onClick = {setBall3}>0</div>
                    <div className="ball-button" id = '1' onClick = {setBall3}>1</div>
                    <div className="ball-button" id = '2' onClick = {setBall3}>2</div>
                    <div className="ball-button" id = '3' onClick = {setBall3}>3</div>
                    <div className="ball-button" id = '4' onClick = {setBall3}>4</div>
                    <div className="ball-button" id = '5' onClick = {setBall3}>5</div>
                    <div className="ball-button" id = '6' onClick = {setBall3}>6</div>
                    <div className="ball-button" id = '7' onClick = {setBall3}>7</div>
                    <div className="ball-button" id = '8' onClick = {setBall3}>8</div>
                    <div className="ball-button" id = '9' onClick = {setBall3}>9</div>
                    <div className="ball-button" id = '10' onClick = {setBall3}>10</div>
                    
                </div>
            </div>
        </div>
        
     );
}
 
export default InputControls;