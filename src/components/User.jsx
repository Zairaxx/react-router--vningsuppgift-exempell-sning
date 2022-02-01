import React from 'react'
import {Link} from 'react-router-dom'
const User = (props) => {
    console.log(props);
    return (
        <div>
            {props.userName} <Link to={{
                pathname:`/profile/${props.userName}`,
                userData:{...props}
            }}><button>Go to profile</button></Link>
        </div>
    )
}

export default User
