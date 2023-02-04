import "./Frame.css"

const Frame = ({frame}) => {
    return ( 
        <div className="frame">
            <div className="frame-number">{frame.frameNumber+1}</div>
            <div className="ball-row">
            
                {frame.ball1bowled ? (
                    <div className="ball1">{frame.ball1}</div>
                    ): ( <div className="ball1"></div>) }
        
                {frame.ball1bowled ? (
                    <div className="ball2">{frame.ball2}</div>
                    ): ( <div className="ball2"></div>) }

            </div>
            <div className="ball-row">
                {frame.ball3bowled ? (
                    <div className="ball3">{frame.ball3}</div>
                    ): ( <div className="ball1"></div>) }
                {frame.framescored ? (
                    <div className="frame-total">{frame.frametotal}</div>
                    ): ( <div className="frame-total"></div>) }
            </div>
        </div>
    
     );
}
 
export default Frame;