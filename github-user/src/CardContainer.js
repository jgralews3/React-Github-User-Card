import React, {useEffect} from 'react';
import axios from 'axios';
import Card from './Card';

function CardContainer(props) {
    console.log("container card",props.state)


    return (
        <div>
            <h2>Card Container</h2>
            <Card state={props}/>
            {/* <button onClick={props.followers}>See Followers</button> */}
            {/* {props.state.array.map((user)=>{
                <div><Card state={props}/></div>
            })} */}
        </div>
    )
}

export default CardContainer;