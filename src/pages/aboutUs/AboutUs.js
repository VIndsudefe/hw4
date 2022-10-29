import React from "react";
class AboutUs extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title: ""
        }
        this.dele= 0
        this.showed = 0
    }
    
    changeTitle = () =>{
        if(this.dele===this.showed){
            this.setState({ title :"i am initial state"})
            this.dele++
            console.log(this.dele);
            
        }else{
            this.setState({ title:''})
            this.showed++
            console.log(this.showed)
        }
    } 
    render(){
        
        return(
            <>
                <h1>{this.state.title}</h1>
                <button  onClick={this.changeTitle}>change title</button>
            </>
        )
    }
}


export default AboutUs;