// import React from 'react';

// export const TestComponent = ({users}) => {
//   console.log(users)
//   return ( 
//   <ul>
//     {
//     users.map(user => (
//         <li key={user.id}>
//         {user.login}
//         </li>
//         ))
//     }
//   </ul>
//   )        
// };

import React from 'react';
import { useState, useEffect } from 'react';
const api_url = 'https://api.github.com/users';

export const TestComponent = () => {
    // Initialize state first
    let [users, setUsers] = useState([]);
    let [isLoaded, setIsLoaded] = useState(false);
    let [err, setErr] = useState(null);
    useEffect(() => {
        const getUsers = () => {
            fetch(api_url)
            .then(res => {
                // Unfortunately, fetch doesn't send (404 error)
                // into the cache itself
                // You have to send it, as I have done below
                if (res.status >= 400) {
                    throw new Error("Server responds with error!")
                }
                return res.json()
            })
            .then(users => {
                setUsers(users)
                setIsLoaded(true)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components
            err => {
                setErr(err)
                setIsLoaded(true)
            })
        };
        getUsers()
    }, [])
     if (err) {
      return <div> {err.message} </div>
  } else if (!isLoaded) {
      return <div> Loading... </div>
  } else {
      return (
        <ul>
    {
            users.map(user => (
                <li key={user.id}>
                {user.login}
                </li>
                ))
            }
           </ul>
              )
          }
  
}