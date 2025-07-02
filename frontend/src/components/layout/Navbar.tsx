
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { LogOut, User, Shield } from "lucide-react";

const Navbar = () => {
  const { user, dispatch } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    navigate("/user/login");
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-bold text-orange-600">
              Food App
            </Link>
            
            {user && (
              <div className="flex space-x-4">
                <Link 
                  to="/"
                  className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </Link>
                <Link 
                  to="/profile"
                  className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Profile
                </Link>
                {/* Show admin link only for admin users */}
                {user.role === 'admin' && (
                  <Link 
                    to="/admin"
                    className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                  >
                    <Shield className="h-4 w-4 mr-1" />
                    Admin
                  </Link>
                )}
              </div>
            )}
          </div>

          {user && (
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">
                Welcome, {user.email}
              </span>
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="flex items-center"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
