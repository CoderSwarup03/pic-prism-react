import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
 
import { useState } from 'react';
import toast from 'react-hot-toast';

const Signup = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("");


  const handleSignup = async () => {
    e.preventDefault();
    try {
      const res = await axios.post(import.meta.env.VITE_API_URL + "/signup", {
        username,
        email,
        password,
        accountType
      });
      const data = await res.data;
      if (data.success) {
        setUsername("");
        setEmail("");
        setPassword("");
        setAccountType("");
        toast.message(data.message);
        navigate("/login");

      }

    } catch (error) {
      toast.error(error.response.data.message);
    }
  }



  return (
    <div className="mt-20 sm:mt-10 min-h-screen flex items-center justify-center w-full">
      <div className="py-6 px-5 shadow-md bg-white rounded-3xl sm:w-[30vw]">
        <h1 className="text-2xl font-bold text-center mb-5">Lets Connnect!!</h1>
        {/* {/* For username/} */}
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">Username</label>
            <input type="text" name="name" id="name" placeholder="e.g , swarup_dev" required value={username} onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-md py-2 px-2 border border-gray-700 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>

          {/* For email */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">Enter Your Email</label>
            <input type="email" name="email" id="email" placeholder="e.g, swarupdev20@gmail" required value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md py-2 px-2 border border-gray-700 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>

          {/* for password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Enter Password</label>
            <input type="password" name="password" id="password" placeholder="e.g, Enter Password" required value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md py-2 px-2 border border-gray-700 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>
          {/* Anothor aacount selection */}
          <div className="mb-4">
            <label htmlFor="accountType" className="block text-sm font-medium text-gray-700 mb-2">Select Account</label>
            <select
              onChange={(e) => setAccountType(e.target.value)}
              className="w-full rounded-md py-2 px-2 border border-gray-700 focus:outline-none focus:ring-black focus:border-black">
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </div>
          <div className='flex items-center justify-end mb-4'>
            <Link className='text-xs text-black' to="/login">Log In Account</Link>
          </div>
          <button type="submit" className='w-full text-xs font-medium py-2 px-4 rounded-md bg-black text-white'>
            Signup
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup