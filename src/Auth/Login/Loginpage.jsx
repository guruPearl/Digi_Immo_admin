import axios from "axios";
import { useState } from "react";
import { FaUserCheck, FaLock, FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");


    const encodedCredentials = btoa("Pearl:PearlProdChecker@12390");
    const formdata = new FormData();
    formdata.append("userName", userName)
    formdata.append("password", password)
    try {
      const response = await axios.post("https://societyadmin.ddns.net/admin/login", formdata, {
        headers: {
          "Authorization": `Basic ${encodedCredentials}`,
          "Content-Type": "multipart/form-data"
        }
      })

      const data = response.data;

      console.log("API Response:", response);

      if (response.status === 200 && response.data.token) {

        localStorage.setItem("token", data.token);
        localStorage.setItem("userRole", data.role);
        localStorage.setItem("userEmail", data.syndicAdminEmail);

        alert("Login Successful!");
        navigate("/adminpanel");
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error("Login Error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-green-300 p-4">
      {/* Login Box */}
      <div className="bg-white p-6 sm:p-10 md:p-12 lg:p-16 xl:p-20 rounded-lg lg:rounded-l-lg shadow-md  
                  w-[90%] max-w-[320px] md:max-w-[400px] lg:max-w-[567px]  
                  h-auto md:min-h-[350px] lg:h-[481px] relative md:pb-10 lg:pb-16 flex-wrap">

        {/* Mobile View Image */}
        <div className="lg:hidden flex justify-center">
          <img src="/istockphoto-1224387189-612x612_1-removebg-preview 1.png" alt="Login Icon" className="h-46" />
        </div>

        {/* Title */}
        <h2 className="text-3xl text-[#508A60] font-bold text-center lg:pb-6">Login</h2>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        {/* Form */}
        <form onSubmit={handleSubmit} className="lg:ml-6 md:ml-8">
          {/* Email Input */}
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-green-900">Email</label>
            <div className="relative">
              <input
                type="email"
                className="mt-1 p-2 w-full md:w-[250px] lg:w-[344px] bg-[#7DD896] rounded-md pl-10"
                value={userName}
                placeholder="Enter Your Email"
                onChange={(e) => setuserName(e.target.value)}
              />
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-600">
                <FaUserCheck />
              </span>
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-green-900">Password</label>
            <div className="relative">
              <input
                type="password"
                className="mt-1 p-2 w-full md:w-[250px] lg:w-[344px] bg-[#7DD896] rounded-md pl-10"
                value={password}
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-600">
                <FaLock />
              </span>
            </div>
            <button type="button" className="text-blue-600 cursor-pointer text-xs mt-2">
              Forgot Password?
            </button>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className={`w-[164px] flex items-center justify-center gap-2 bg-[#7DD996] text-white p-2 rounded-3xl hover:bg-[#508A60] transition duration-300 ${loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                }`}
              disabled={loading}
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Side Image for Desktop */}
      <div className="hidden lg:flex items-center justify-center w-[300px] h-[481px] bg-[#508A60] rounded-r-lg shadow-md">
        <div className="absolute lg:right-[250px] lg:top-[120px]">
          <img src="/istockphoto-1224387189-612x612_1-removebg-preview 1.png" alt="Side Image" className="h-86" />
        </div>
      </div>
    </div>
  );
}
