import "./Frame.css"

const Frame = ({frame}) => {
    return ( 
        <div className="frame">
            <div className="frame-number">{frame.frameNumber+1}</div>
            <div></div>
        </div>
    
     );
}
 
export default Frame;