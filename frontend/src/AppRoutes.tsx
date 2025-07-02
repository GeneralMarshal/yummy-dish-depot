
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/Signin";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Admin from "./pages/admin/Admin";

export default function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Public routes */}
      <Route path="user/login" element={!user ? <Login /> : <Navigate to="/" />} />
      <Route path="user/signup" element={!user ? <SignUp /> : <Navigate to="/" />} />
      
      {/* Protected routes with layout */}
      <Route path="/" element={
        user ? (
          <Layout>
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          </Layout>
        ) : (
          <Navigate to="user/login" />
        )
      } />
      
      <Route path="/profile" element={
        <Layout>
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        </Layout>
      } />
      
      {/* Admin only route */}
      <Route path="/admin" element={
        <Layout>
          <ProtectedRoute requiredRole="admin">
            <Admin />
          </ProtectedRoute>
        </Layout>
      } />
      
      {/* Catch all route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
