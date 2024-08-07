import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import { UserProvider } from './Authentication';

const Signup = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    fullName: "",
    email: "",
    password: "",
    address: "",
    mobile: "",
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setUserInput({
      ...userInput,
      [name]: value
    });
  };

  const { signup } = useContext(UserProvider);

  const submitHandler = async (event) => {
    event.preventDefault();
    const userData = await signup(userInput);

    console.log(userData);
    if (userData) {
      toast.success("Account created successfully");
      navigate('/');
    }

    setUserInput({
      fullName: "",
      email: "",
      password: "",
      address: "",
      mobile: "",
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      <img
        src="https://web.archive.org/web/20210903175246im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq"
        alt="Signup Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="relative bg-white w-full max-w-md p-8 rounded-lg shadow-lg z-10">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Create an Account</h1>
        <form className="space-y-4" onSubmit={submitHandler}>
          <input
            onChange={inputHandler}
            value={userInput.fullName}
            name='fullName'
            className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500'
            placeholder='Enter your full name'
            type="text"
            required
          />
          <input
            onChange={inputHandler}
            value={userInput.email}
            name='email'
            className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500'
            placeholder='Enter your email'
            type="email"
            required
          />
          <input
            onChange={inputHandler}
            value={userInput.password}
            name='password'
            className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500'
            placeholder='Enter your password'
            type="password"
            required
          />
          <input
            onChange={inputHandler}
            value={userInput.address}
            name='address'
            className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500'
            placeholder='Enter your address'
            type="text"
            required
          />
          <input
            onChange={inputHandler}
            value={userInput.mobile}
            name='mobile'
            className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500'
            placeholder='Enter your mobile number'
            type="tel"
            required
          />
          <button
            className='w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded transition duration-200'
            type="submit"
          >
            Create an Account
          </button>
          <h4 className='mt-3 text-gray-700 text-center'>
            Already have an account? 
            <Link to='/' className='text-sky-800'> Login Here</Link>
          </h4>
        </form>
      </div>
    </div>
  );
};

export default Signup;