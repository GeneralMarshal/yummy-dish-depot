import { createContext, useReducer, Dispatch } from "react";

interface AuthUser {
  id: string;
  email: string;
  token: string;
  role?: 'user' | 'admin';
}

interface AuthState {
  user: AuthUser | null;
}

interface AuthContextType extends AuthState {
  dispatch: Dispatch<any>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

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

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem("user") || "null"),
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
  
    return(
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
  };
