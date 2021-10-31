import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, setUser, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                history.push(redirect_uri);
            })
            .finally(() => setIsLoading(false));
    }
    return (
        <div className="w-1/5 mx-auto mt-5">
            <Button onClick={handleGoogleLogin} className="bg-green-400 hover:bg-green-500 text-white px-8 py-2 duration-300 hover:scale-110 focus:outline-none poppins rounded-full mt-0 transform transition mb-2">Google Sign In</Button>
        </div>
    );
};

export default Login;