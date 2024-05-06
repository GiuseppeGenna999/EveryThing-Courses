import { AuthContext } from './AuthContext';
import { useState } from "react";

export function AuthContextProvider({ children }) {

    const [user, setUser] = useState({
        firstName:"Mario",
        lastName:"Giordano",
        email:"melo81@gmail.com",
    })

  return (
    <AuthContext.Provider value={{user,setUser}}>
      {children}
    </AuthContext.Provider>
  );
}
