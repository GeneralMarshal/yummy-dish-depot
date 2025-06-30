import { createContext, useReducer, Dispatch } from "react";



export const AuthContext = createContext(null)

const authReducer = (state, action) => {
    switch(action.type){
        case "LOGIN":
            return { user: action.payload}
        case "LOGOUT":
            return { user: null}
        default:
            return state
    }
}

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
}

export const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
  
    return(
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
  };