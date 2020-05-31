import React, {useState, useEffect} from 'react';
const axios = require('axios');

const External = ()=>{
    const [users, setUser] = useState([]);
    const [id, setid] = useState(0);
   useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(function (response) {
            // handle success
            console.log(response);
            setUser(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
   },[id])


    return(
        <div>
            <input  type="text" onChange={(e)=>setid(e.target.value)}></input>
            {/* <ul>
            {
             users.map((user)=><li key={user.id}>{user.name}</li>)   
            }
        </ul> */}
            {users.name}
        </div>
    )
}


export default External;