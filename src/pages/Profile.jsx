import React from 'react'
import {Link, useHistory} from 'react-router-dom'
const Profile = ({location}) => {
    let history = useHistory();
    console.log("history",history);

    if(location.userData){
        let {userName,name,age} = location.userData;
        let {city, country} = location.userData.location;
        
        return (
            <div>
                {location.userData && <>
                    <h1>{userName}s profil</h1>
                    <p>Namn: {name}</p>
                    <p>Ålder: {age}</p>
                    <p>Land:{country}</p>
                    <p>Stad: {city}</p>
                    <br/>
                    {/* <a href="/"> Back to startpage</a>
                    <p onClick={() => {history.goBack()}}>Back to startpage</p> */}
                </>}
                <Link to="/">Back to startpage</Link>
                <button onClick={() => {history.push("/")}}>Back to startpage</button>
            </div>
        )
    }
    else {
        console.log("No profile chosen. Redirecting...")
        history.push("/");
        return null
    }
}

export default Profile
