import axios from 'axios';
import { createContext } from 'react';

import { toast } from 'react-toastify';


export const UserProvider = createContext();

export const Authentication = ({ children }) => {


// const API="http://localhost:3000"

const API = process.env.NODE_ENV === 'production' 
  ? 'https://your-public-api-url.com' 
  : 'http://localhost:3000';


    const signup = async (data) => {
      try {
        const userData = await axios.post(`${API}/users`, data); 
        console.log("Response from server:", userData);
        return userData.data;
      } catch (error) {
        console.error("Error during signup:", error);
        toast.error(error.response?.data?.message || 'An error occurred');
        return null;
       
       
      }
    };
      


      const login = async () => {
        try {
          const loginData = await axios.get(`${API}/users`);
         
          console.log(loginData)
          if (loginData && loginData.data) {2
           
            return loginData.data;
          }
        } catch (err) {
          console.log(err);
          toast.error(err.response?.data?.message || 'An error occurred');
          return null; 
        }
      };
      


   

    

  return (
    <UserProvider.Provider value={{ signup, login }} >
        {children}
    </UserProvider.Provider>
  )
}


