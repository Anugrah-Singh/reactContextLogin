import UserContextProvider from './context/userContextProvider'
import './App.css'
import Profile from './componects/Profile'
import Login from './componects/Login'

function App() {

  return (
    <>
      {/* here whatever the components we are enclosing in UserContxtProvider tag those componects will have access 
      to the User Context and it's data */}
      <UserContextProvider>
        {/* <h1>React with chai and share is important</h1> */}
        {/* in login we are handelling how the data will be sent and in profile we are handelling how the data 
        will be taken */}
        <Login />
        {/* in profile we are accessing that data and showing the response in whatever way we wantīīīī */}
        <Profile />
      </UserContextProvider>
    </>
  )
}

export default App
