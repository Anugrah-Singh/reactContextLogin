import { useContext, useState } from 'react'
import UserContext from '../context/UserContext'
function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //we are calling setUser method that we have defined using useState in usercontextprovider check that file
    //useContext takes a context and provides access to the it's things (setUser)
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        // we are preventing the defaut behaviour of forms because sometimes it passes the value through url or post 
        // method
        e.preventDefault()
        //Here we are accessing that setUser method to update the state of the user that we have defined in 
        // userContextProvider.jsx and we are passing username and password that we have taken as input into the
        //user 
        setUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username'/>
        {" "}
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login