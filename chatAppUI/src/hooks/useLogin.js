import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  function ReloadLocation() {
    location.reload();
  }
  const login = async (username, password) => {
    const success = handleInputError(username, password);
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({username:username, password:password} )
      })
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error)
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      ReloadLocation();
      {setAuthUser}(data);
      // ;


    }
    catch (error) {
      toast.error(error.message)
      console.log(error);
    } finally {
      setLoading(false);

    }

  }
  return { loading, login };
}

export default useLogin;


function handleInputError(username, password) {
  if (!username || !password) {
    toast.error("Please Enter All Fields");
    return false;
  }

  return true;
}


//----------------------------------------------------------