import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser}=useAuthContext();
    const signup = async ({ fullname, username, password, confirmpassword, gender }) => {
        const success = handleInputError({ fullname, username, password, confirmpassword, gender });
        if (!success) return;
        setLoading(true);
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ fullname, username, password, confirmpassword, gender })
            });
        const data = await res.json();
        if(data.error) {
            throw new Error(data.error)
        }

        localStorage.setItem("chat-user",JSON.stringify(data));
        {setAuthUser}(data);

        
            
        } 
        catch (error) 
        {
            toast.error(error.message)
        }
        finally {
            setLoading(false);


        };

    }
        return {loading, signup};
};

export default useSignup;

function handleInputError({ fullname, username, password, confirmpassword, gender }){
    if (!fullname || !username || !password || !confirmpassword || !gender) {
        toast.error("Please Enter All Fields");
        return false;
    }
    if (password !== confirmpassword) {
        toast.error("password doesn't match");
        return false;
    }
    if (password.length < 6) {
        toast.error("password must be at least 6 characters");
        return false;
    }
    return true;
}