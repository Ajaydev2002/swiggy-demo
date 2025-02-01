import UseClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
            <h1>About Us...</h1>
            <h2>To know more about us please contact to the bellow provided number.</h2>
            <UseClass name ={"Ajay dev"} Location = {"Coimbatore"}/>
        </div>
        )
    }
}


export default About;