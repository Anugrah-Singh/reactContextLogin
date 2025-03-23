import React from "react";
import UserContext from "./UserContext"; //imported that user context

//here this is a method that takes a children prop to use that as it is
const UserContextProvider = ({children}) => {

    //this is the data that will be stored in the context
    const [user, setUser] = React.useState(null)

    return(
        //UserContext is the context that we have imported and .provider is the method that provides the access 
        // to the data that we have defined above
        //we have a property in provider that is value. We can pass what ever the data we want in the value
        // we are passing an object where we can give which ever data we want 
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider