import React from "react";

class ContactPage extends React.Component{
    constructor(props){
        super()
        this.state={
            input:''
        }
    }
    clear=()=>{

        document.querySelector('input').value = ""
    }
    add=()=>{
        let input= document.querySelector('input').value
        console.log(input)
        this.setState({input:input})
        document.querySelector('input').value = ""
    }
    
    render(){
        return(
            <>
                <input/>
                <button onClick={this.add}>Add</button>
                <button onClick={this.clear}>Clear</button>
            </>
        )
    }
}

export default ContactPage