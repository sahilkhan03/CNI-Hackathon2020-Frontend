import React from "react"
import MapSupp from "./MapSupp"



class Map extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    handleReset= (event) => {
        event.preventDefault();
        this.props.history.push("/");
    }
    render(){
        const {currentState} = this.props;
        if(!currentState.isActive){
            return(
                <div className="container-fluid text-center justify-content-center">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <h1>Provide Data First!</h1>
                    <button onClick={this.handleReset} className="btn btn-lg btn-primary">Provide Data!</button>
                </div>
            )
        }
        return (
            <div style={{overflow: "hidden"}}>
                <div className="text-center container">
                    <h4>Tap/Hover on Districts to find out more!</h4>
                </div>
                <MapSupp currentState={currentState}></MapSupp>
            </div>
        )
    }
}

export default Map;