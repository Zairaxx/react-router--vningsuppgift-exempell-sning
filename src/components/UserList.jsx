import React from 'react'
import User from '../components/User'
const UserList = ({users}) => {
    return (
        <div>
            {users.map((user,i) => <User {...user} key={i} />)}
        </div>
    )
}

export default UserList
