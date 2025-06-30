import { Route, Routes } from "react-router-dom"
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Navigate } from "react-router-dom";
import SignUp from "./pages/Signin";
import Login from "./pages/Login";
import { useAuth } from "./hooks/useAuth";

export default function AppRoutes(){
    const { user } = useAuth()
    return(
        <Routes>
          <Route path="/" element={user ? <Index /> : <Navigate to="user/login"/>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="user/login" element={ !user ? <Login /> : <Navigate to="/"/>} />
          <Route path="user/signup" element= {!user ? <SignUp /> : <Navigate to="/"/> } />
        </Routes>
    )
}