import React from "react";
import axios from "axios";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      token: JSON.parse(localStorage["appState"]).user.auth_token,
      users: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8000/api/usuarios/list?token=${this.state.token}`)
      .then(response => {
        console.log(response);
        return response;
      })
      .then(json => {
        if (json.data.success) {
          this.setState({ users: json.data.data });
          //alert("Login Successful!");
        } else alert("Login Failed!");
      })
      .catch(error => {
        alert(`An Error Occured! ${error}`);
      });
  }

  render() {
    return (
      <div style={styles}>
        <h2>Welcome Home {"\u2728"}</h2>
        <p>List of all users on the system</p>
        <ul>{this.state.users.map(user => <ol style={{padding:15,border:"1px solid #cccccc", width:250, textAlign:"left",marginBottom:15,marginLeft:"auto", marginRight:"auto"}}><p>Name: {user.name}</p><p>Email: {user.email}</p></ol>)}</ul>
        <button
          style={{ padding: 10, backgroundColor: "red", color: "white" }}
          onClick={this.props.logoutUser}
        >
          Logout{" "}
        </button>
      </div>
    );
  }
}