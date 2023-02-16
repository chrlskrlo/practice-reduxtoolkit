import React from "react";
import {useSelector} from 'react-redux'

const Profile = () => {
    const user = useSelector((state) => state.user.value)
    const themeColor = useSelector((state) => state.theme.value)
    return (
        <div style={{color: themeColor}}>
            <p className="text-2xl">Profile Page</p>
            <p>Name: {user.name}</p>
            <p>Age:{user.age}</p>
            <p>Email:{user.email}</p>
        </div>
    )
}
export default Profile;