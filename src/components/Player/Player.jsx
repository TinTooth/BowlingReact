import { useEffect,useState } from "react";

class Frame {
    constructor (frameNumber) {
        this.frameNumber = frameNumber
        this.ball1 = 0
        this.ball2 = 0
        this.ball3 = 0
    }

}

const Player = () => {
    const [frames, setframes] = useState(generateFrames());

    // useEffect(() => {
    //     let result = generateFrames()
    //     setframes(result)
    // }, []);
  
    function generateFrames () {
        let result = []
        for (let i = 0; i <= 9; i++) {
            let newFrame = new Frame(i)
            result.push(newFrame)
        }
        console.log(result)
        return result
    }

    return frames ? (
        <div>{frames[1].frameNumber}</div>
      ): null;
}
 
export default Player;