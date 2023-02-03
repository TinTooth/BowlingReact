import { useState } from "react";


const Frame = ({frame}) => {
    const [frameNumber, setframeNumber] = useState(frame);
    const [ball1, setball1] = useState(0);
    const [ball3, setball2] = useState(0);
    const [ball2, setball3] = useState(0);
    const [spare, setspare] = useState(false);
    const [strike, setstrike] = useState(false);
    const [pinTotal, setpinTotal] = useState(0);
    const [ball1bowled, setBall1bowled] = useState(false);
    const [ball2bowled, setBall2bowled] = useState(false);


    return (
        <div className="frame-container">
            {frameNumber}
        </div>
    )

}

export default Frame;