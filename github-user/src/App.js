import React from 'react';
import axios from 'axios';
import './App.css';
import CardContainer from './CardContainer'
import Card from './Card';



class App extends React.Component {

constructor(){
  super();
  this.state = ({array: [], user: [], bio: [], followers: [], avatar: [], name: [], following: []})
}


componentDidMount(){
  axios.get("https://api.github.com/users/jgralews3")
  .then((res)=>{
    console.log(res);
    this.setState({...this.state, user: res.data.login, bio: res.data.bio, followers: res.data.followers, avatar: res.data.avatar_url, name: res.data.name, following: res.data.following});
  })
    .catch(err=>(console.log(err)))
  
    axios.get("https://api.github.com/users/jgralews3/followers")
        .then((res)=>{
          console.log("grabbing followers");
          const newArray = res.data.map((name) => {return name.login});
          
          this.setState({...this.state, array: newArray});

          })
        .catch(err=>(console.log(err)))

  };

  render(){
    console.log("update", this.state)
  return (
    <div className="App">
      <CardContainer state={this.state} />
      <p>Map over state array to fill Card Component</p>

    </div>
  );
}};

export default App;
