import React from "react";
import {useSelector} from 'react-redux'

const Profile = () => {
    const user = useSelector((state) => state.user.value)
    return (
        <div className="mt-5 p-5">
            <p className="text-2xl">Profile Page</p>
            <p>Name: {user.name}</p>
            <p>Age:{user.age}</p>
            <p>Email:{user.email}</p>
        </div>
    )
}
export default Profile;