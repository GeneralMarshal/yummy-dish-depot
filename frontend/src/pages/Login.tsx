import { Eye, EyeOff, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

import axios from "axios";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("")
  const { dispatch } = useAuth()

  let navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("")
    console.log("Login attempt:", { email, password });
    // Authentication logic would go here
    try{
      const res = await axios.post("http://localhost:4000/user/login", { email, password})
      const user = await res.data

      localStorage.setItem("user", JSON.stringify(user))
      dispatch({ type: 'LOGIN', payload: user})
      console.log("Login successful")
      navigate("/")
    }

    catch(err){
      setError(err.response?.data?.error || "something went wrong")
      setEmail("")
      setPassword("")
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-orange-100 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-2xl w-fit mx-auto mb-4">
              <ChefHat className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="text-gray-600 mt-2">Sign in to your account</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="border-orange-200 focus:border-orange-400 focus:ring-orange-400"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700 font-medium">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="border-orange-200 focus:border-orange-400 focus:ring-orange-400 pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {error && <p className=" text-red-500 text-sm">{error}</p>}
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Sign In
            </Button>
          </form>

          {/* Footer */}
          <p className="text-center text-gray-600 mt-6">
            Don't have an account?{" "}
            <Link
              to="/user/signup"
              className="text-orange-600 hover:text-orange-700 font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;