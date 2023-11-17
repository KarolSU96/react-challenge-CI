import React from 'react';
import css from './css/NavBarSimple.module.css';

class NavBarSimple extends React.Component {


constructor(props) {
    super(props);
    this.state = {
        message: "Hello, guest!",
        buttonText: "Log in"
    };
}

handleClick() {
    this.setState((prevState) => {
        return {
            message: prevState.message === "Hello, guest!" ? "welcome back, user!" : "Hello, guest!",
            buttonText: prevState.buttonText === "Log Out" ? "Log in ": "Log in",
        }
    })
}



    render() {
        return (
            <div className ={css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                    <span>{this.state.message}</span>
                    <button onClick={()=> this.handleClick()}>{this.state.buttonText}</button>
                </div>
            </div>
        )
    }


}

export default NavBarSimple;