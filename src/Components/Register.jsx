import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import google from "../assets/google.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";
import registerAnimation from "../assets/lottie/register-animation.json";

const Register = () => {
  const { createUser, googleSignIn, setUser, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const photo = form.photo.value.trim();
    const password = form.password.value.trim();

    if (!name) {
      toast.error("Name is required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please provide a valid email address.");
      return;
    }

    const urlRegex = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/i;
    if (!urlRegex.test(photo)) {
      toast.error("Please provide a valid photo URL starting with http:// or https://");
      return;
    }

    if (!/(?=.*[A-Z])/.test(password)) {
      toast.error("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/(?=.*[a-z])/.test(password)) {
      toast.error("Password must contain at least one lowercase letter.");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    try {
      const result = await createUser(email, password);
      await updateUserProfile({ displayName: name, photoURL: photo });
      setUser(result.user);

      toast.success("Registration successful!");
      navigate("/");
    } catch (error) {
      console.error(error);

      if (error.code === "auth/email-already-in-use") {
        toast.error("This email is already in use.");
      } else if (error.code === "auth/invalid-email") {
        toast.error("Invalid email address.");
      } else {
        toast.error(`Registration failed: ${error.message}`);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignIn();
      setUser(result.user);

      toast.success("Successfully signed in with Google!");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error(`Google Sign-In failed: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-indigo-200 to-pink-200 flex items-center justify-center px-4">
      <ToastContainer position="top-center" />
      <Helmet>
        <title>Register - Service</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-6xl">
        {/* Lottie Animation Section */}
        <div className="w-full lg:w-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center p-8">
          <Lottie
            animationData={registerAnimation}
            loop={true}
            className="w-full max-w-lg"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-10">
          <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-4">
            Create an Account
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Start your journey with us today!
          </p>

          <form onSubmit={handleRegister} className="space-y-6">
            {/* Name Field */}
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 shadow-sm"
                required
              />
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 shadow-sm"
                required
              />
            </div>

            {/* Photo URL Field */}
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 shadow-sm"
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 shadow-sm"
                required
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full py-3 text-white bg-gradient-to-r from-purple-600 to-indigo-500 rounded-lg shadow-lg font-semibold hover:from-purple-700 hover:to-indigo-600 transition-all duration-300"
            >
              Register
            </button>
          </form>

          <div className="mt-6 text-center text-gray-600">OR</div>

          {/* Google Sign-In */}
          <button
            onClick={handleGoogleSignIn}
            className="mt-4 w-full py-3 flex items-center justify-center bg-gray-100 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-200 transition-all duration-300"
          >
            <img src={google} alt="Google" className="w-6 h-6 mr-3" />
            Sign in with Google
          </button>

          <p className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-indigo-600 font-bold hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
