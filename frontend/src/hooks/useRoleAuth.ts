
import { useAuth } from "./useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useRoleAuth = (requiredRole: 'admin' | 'user') => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/user/login');
      return;
    }

    if (requiredRole === 'admin' && user.role !== 'admin') {
      navigate('/'); // Redirect to home if not admin
      return;
    }
  }, [user, requiredRole, navigate]);

  return {
    isAuthorized: user && (requiredRole !== 'admin' || user.role === 'admin'),
    user
  };
};
