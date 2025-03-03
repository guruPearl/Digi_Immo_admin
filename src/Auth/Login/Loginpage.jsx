import { useState } from "react";
import { FaUserCheck , FaLock} from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    
    if (!email || !password) {
      setError("Both fields are required");
      return;
    }
    
    
    if (email === "user@example.com" && password === "password") {
      alert("Login successful");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-400 ">
      <div className="bg-white p-6 rounded-lg shadow-md md:w-96 w-80">
        <h2 className="text-2xl text-blue-400 font-bold text-center">Login Form</h2>
        <p className="text-center text-gray-700 text-xs mb-4">Login here using email & password</p>
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        <form onSubmit={handleSubmit}>
        <div className="mb-4 relative">
            <label className="block text-sm font-medium  text-blue-400 ">Email</label>
            <div className="relative">
              <input
                type="email"
                className="mt-1 p-2 w-full border rounded-md pl-10"
                value={email}
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-600">
                <FaUserCheck />
              </span>
            </div>
          </div>
          <div className="mb-4 relative">
            <label className="block text-sm font-medium  text-blue-400">Password</label>
            <div className="relative">
              <input
                type="password"
                className="mt-1 p-2 w-full border rounded-md pl-10"
                value={password}
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-600">
                <FaLock />
              </span>
            </div>
            <button type="button" className="text-blue-600 cursor-pointer text-xs">Forgot Password?</button>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-300 to-blue-600 text-white p-2 rounded-md hover:from-blue-700 hover:to-blue-300 cursor-pointer"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-700 pt-6 text-sm">Or Use a Social Networks</p>
        <div className="flex items-center justify-center mt-4 gap-8 mb-4">
            <button type="button" className="hover:bg-gray-200 hover:text-blue-700 p-4 rounded-full cursor-pointer"><FaTwitter /></button>
            <button type="button" className="hover:bg-gray-200 hover:text-blue-700 p-4 rounded-full cursor-pointer"><FaFacebookF /></button>
            <button type="button" className="hover:bg-gray-200 hover:text-blue-700 p-4 rounded-full cursor-pointer"><FaLinkedinIn /></button>
        </div>
        <hr className="text-gray-400 border-1" />
      </div>
    </div>
  );
}
