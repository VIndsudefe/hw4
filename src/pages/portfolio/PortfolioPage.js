
import React from "react";

class PortFolioPage extends React.Component{
    constructor(props){
        super()
        this.state={
            workks:[]
        }
    }
    change=()=>{
        this.setState({workks:["Work1","Work1"]})
    }
    render(){
        return(
            <>
                <button onClick={this.change}>get</button>
                <ul>
                    {this.state.workks.map((a)=><li>{a}</li>)}
                </ul>
            </>
        )
    }
}
export default PortFolioPage