import React from 'react'
import UserList from '../components/UserList'
const Home = (props) => {
    return (
        <div>
            <h1>React router - övningsuppgift</h1>
            <UserList users={props.users}/>
        </div>
    )
}

export default Home
