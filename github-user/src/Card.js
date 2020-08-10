import React, {useState, useEffect} from "react";
import axios from "axios";

function Card(props){
    // console.log(props.state.state)
    let newArray1 = [];
const [followers, setFollowers] = useState([])
    // {props.state.state.array.forEach((users)=>{
        // axios.get(`https://api.github.com/users/${users}`)
        // .then(res=>{
        //     newArray1.push(res);
        //     console.log(newArray1);
        //     console.log(newArray1.map((user)=><p>{user.data.login}</p>))
        // })
    //     .catch(err=>{console.log(err)})
    // })}

    useEffect(() => {
        console.log("hello", props.state.state)
        props.state.state.array.forEach((users)=>{
            console.log("ruunning")
            axios.get(`https://api.github.com/users/${users}`)
            .then(res=>{
                console.log("res", res.data)
                // newArray1.push(res);
                // console.log(newArray1);
                // console.log(res.data)
                setFollowers([...followers,res.data.login])
                // console.log(newArray1.map((user)=><p>{user.data.login}</p>))
            })
            .catch(err=>{console.log(err)})
        })
    }, [props])
    console.log(followers)
    return (
        <div>
            <h3>Card</h3>
            <img src={props.state.state.avatar_url} alt={props.state.state.avatar_url}/>
            <p>Name: {props.state.state.name}</p>
            <p>Username: {props.state.state.user}</p>
            <p>Bio: {props.state.state.bio}</p>
            <p>Followers: {props.state.state.followers}</p>
            <p>Following: {props.state.state.following}</p>
            <div>Test: {newArray1.map((user)=><p>{user.data.login}</p>)}
            <p>{followers.map((user)=>user)}</p>
                {/* {props.state.state.array.forEach((users)=>{
                axios.get(`https://api.github.com/users/${users}`)
                .then(res=>{
                    console.log(res);
                    newArray1.push(res);
                    console.log(newArray1);
                    newArray1.map((user)=><p>{user.data.login}</p>)
                })
                .catch(err=>{console.log(err)})
            })} */}
            
            </div>
        </div>
    )
}

export default Card;