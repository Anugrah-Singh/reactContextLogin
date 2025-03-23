import {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    //here we are accessing the data that is stored in userContext to maybe diaplay or do something with that
    //again we called useContext Method to access the userContext 
    const {user} = useContext(UserContext)

    if (!user) {
        return <div>please login</div>
    }
    return <div>Welcome {user.username}</div>
}

export default Profile