import React from "react"

class UseClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           userInfo: {
            login: "wbfwfbewd",
            id: "e12342425",
           }
        }

    }

    async componentDidMount() {

        const data = await fetch ("https://api.github.com/users/Ajaydev2002");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
        console.log(json);
    }

    render() {
        const {login, id, avatar_url} = this.state.userInfo;
        const { count } = this.state;
        return (
            <div className="contact-details">
                <h2>count : {count}</h2>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    });
                }}>click to increase count</button>
                 <img src={avatar_url} /> 
                <h2>Name : {login}</h2>
                <h2>Location : {id}</h2>
                <h2>Contact : 987654321</h2>
            </div>
        )
    }
}

export default UseClass;