import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Lottie from "lottie-react";
import loginAnimation from "../assets/lottie/login-animation.json"; // Replace with your Lottie file path
import google from "../assets/google.png";
import { Helmet } from "react-helmet";

const Login = () => {
  const { login, googleSignIn, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("Login successful!");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError({ ...error, signIn: err.code });
        toast.error(`Login failed: ${err.message}`);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        toast.success("Successfully signed in with Google!");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError({ ...error, signIn: err.code });
        toast.error(`Google Sign-In failed: ${err.message}`);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-300 via-blue-200 to-indigo-400 flex flex-col justify-center items-center">
      <ToastContainer position="top-center" />
      <Helmet>
        <title>Login - Service</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row justify-between items-center w-full mt-10 max-w-6xl px-6">
       

       
        <div className="w-full lg:w-1/2 bg-white rounded-3xl shadow-2xl p-10">
          <h1 className="text-5xl font-extrabold text-gray-800 text-center mb-6">Welcome Back!</h1>
          <p className="text-gray-600 text-center mb-8 text-lg">
            Log in to your account and explore All Features
          </p>

          <form onSubmit={handleLogin}>
           
            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text font-medium text-gray-700">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-xl p-4"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

          
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-medium text-gray-700">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-xl p-4"
                required
              />
              {error.signIn && (
                <p className="text-red-600 text-sm mt-2">
                  {error.signIn.replace("auth/", "").replace("-", " ")}
                </p>
              )}
              <div className="text-right mt-2">
                <Link
                  to="/auth/login"
                  className="text-blue-600 font-semibold hover:underline"
                  state={{ email: email }}
                >
                  Forgot password?
                </Link>
              </div>
            </div>

         
            <div className="form-control">
              <button
                type="submit"
                className="btn w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-xl hover:from-blue-700 hover:to-purple-700"
              >
                Log In
              </button>
            </div>
          </form>

          <div className="divider my-6">OR</div>

         
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline w-full flex justify-center items-center space-x-3 border-gray-300 hover:bg-gray-100 py-3 rounded-xl"
          >
            <img src={google} className="w-6 h-6" alt="Google logo" />
            <span>Continue with Google</span>
          </button>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link
                to="/auth/register"
                className="text-blue-600 font-bold hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
         {/* Lottie Animation Section */}
         <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
          <Lottie animationData={loginAnimation} loop={true} className="max-w-md lg:max-w-lg" />
        </div>
      </div>
    </div>
  );
};

export default Login;
