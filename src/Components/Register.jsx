import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import google from "../assets/google.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";
import registerAnimation from "../assets/lottie/register-animation.json"; // Replace with your Lottie file path

const Register = () => {
  const { createUser, googleSignIn, setUser, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // Password validation
    if (!/(?=.*[A-Z])/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      return;
    } else if (!/(?=.*[a-z])/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter.");
      return;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }
    setPasswordError("");
    setEmailError("");

    try {
      const result = await createUser(email, password);
      await updateUserProfile({ displayName: name, photoURL: photo });
      setUser(result.user);

      toast.success("Registration successful!");
      navigate("/");
    } catch (error) {
      console.error(error);

      // Firebase error handling
      if (error.code === "auth/email-already-in-use") {
        setEmailError("This email is already in use.");
        toast.error("This email is already in use.");
      } else if (error.code === "auth/invalid-email") {
        setEmailError("Invalid email address.");
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
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-200 to-indigo-200 flex flex-col items-center justify-center">
      <ToastContainer position="top-center" />
      <Helmet>
        <title>Register - Service</title>
      </Helmet>

      <div className="flex my-10 gap-8 flex-col lg:flex-row justify-between items-center w-full max-w-6xl px-6">
       

        {/* Registration Form Section */}
        <div className="w-full lg:w-1/2 bg-white rounded-3xl shadow-2xl p-10">
          <h1 className="text-5xl font-extrabold text-gray-800 text-center mb-6">
            Join Us Today!
          </h1>
          <p className="text-gray-600 text-center mb-8 text-lg">
            Create your account and get started with our services.
          </p>

          <form onSubmit={handleRegister}>
            {/* Name Input */}
            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text font-medium text-gray-700">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-purple-500 rounded-xl p-4"
                required
              />
            </div>

            {/* Email Input */}
            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text font-medium text-gray-700">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-purple-500 rounded-xl p-4"
                required
              />
              {emailError && (
                <p className="text-red-600 text-sm mt-2">{emailError}</p>
              )}
            </div>

            {/* Photo URL Input */}
            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text font-medium text-gray-700">
                  Photo URL
                </span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-purple-500 rounded-xl p-4"
                required
              />
            </div>

            {/* Password Input */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-medium text-gray-700">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-purple-500 rounded-xl p-4"
                required
              />
              {passwordError && (
                <p className="text-red-600 text-sm mt-2">{passwordError}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="form-control">
              <button
                type="submit"
                className="btn w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-xl hover:from-purple-700 hover:to-pink-700"
              >
                Register
              </button>
            </div>
          </form>

          <div className="divider my-6">OR</div>

          {/* Google Sign-In Button */}
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline w-full flex justify-center items-center space-x-3 border-gray-300 hover:bg-gray-100 py-3 rounded-xl"
          >
            <img src={google} className="w-6 h-6" alt="Google logo" />
            <span>Continue with Google</span>
          </button>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link
                to="/auth/login"
                className="text-purple-600 font-bold hover:underline"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
         {/* Lottie Animation Section */}
         <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
          <Lottie
            animationData={registerAnimation}
            loop={true}
            className="max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
