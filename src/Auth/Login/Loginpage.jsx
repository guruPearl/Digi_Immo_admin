import { useState } from "react";
import { FaUserCheck, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");




  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Both fields are required");
      return;
    }

    if (email === "guru@gmail.com" && password === "12345") {

      localStorage.setItem("isAuthenticated", "true");
      navigate("/adminpanel");
    } else {
      setError("Invalid Email & Password");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-green-300 p-4">
  
  <div className="bg-white p-6 sm:p-10 md:p-12 lg:p-16 xl:p-20 rounded-lg lg:rounded-l-lg shadow-md  
                w-[90%] max-w-[320px] md:max-w-[400px] lg:max-w-[567px]  
                h-auto md:min-h-[350px] lg:h-[481px] relative md:pb-10 lg:pb-16 flex-wrap">

   
      <div className="lg:hidden flex justify-center">
        <img src="/istockphoto-1224387189-612x612_1-removebg-preview 1.png" alt="Login Icon" className="h-46" />
      </div>
  
      <h2 className="text-3xl text-[#508A60] font-bold text-center lg:pb-6">Login</h2>
  
      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
  
      <form onSubmit={handleSubmit} className="lg:ml-6 md:ml-8">
        <div className="mb-4 relative ">
          <label className="block text-sm font-medium text-green-900">Email</label>
          <div className="relative">
            <input
              type="email"
              className="mt-1 p-2 w-full md:w-[250px] lg:w-[344px] bg-[#7DD896] rounded-md pl-10"
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
          <button type="button" className="text-blue-600 cursor-pointer text-xs">Forgot Password?</button>
        </div>
  
        <div className="text-center">
          <button
            type="submit"
            className="w-[164px] bg-[#7DD996] text-white p-2 rounded-3xl hover:bg-[#508A60] transition duration-300"
          >
            Login
          </button>
        </div>
      </form>
  
    </div>
  
    
    <div className="hidden lg:flex items-center justify-center w-[300px] h-[481px] bg-[#508A60] rounded-r-lg shadow-md">
     <div className="absolute lg:right-[250px] lg:top-[120px] "><img src="/istockphoto-1224387189-612x612_1-removebg-preview 1.png" alt="" className="h-86" /></div>
    </div>
  
  </div>
  
  );
}
