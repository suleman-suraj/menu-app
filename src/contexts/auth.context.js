import { createContext, useState } from "react"

const AuthContext = createContext();
const AuthProvider = AuthContext.Provider;

function AuthContextProvider({ children }) {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);

    const authLogin = async (email, password) => {
        setLoading(true);
        await fetch("/users/login", {
            method: "GET",
            headers: {
                "Context-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                setSuccess(true);
                setUser(data);
            })
            .catch(err => {
                setError(err);
            });
        setLoading(false);
    };

    //signup fuction
    const authRegister = async (username, email, password) => {
        setLoading(true);
        await fetch("/users/register", {
            method: "POST",
            headers: {
                "Context-Type": "application/json",
            }
        })
            .then(res => res.json())
            .then(data => {
                setSuccess(true);
                setUser(data);
            })
            .catch(err => {
                setError(err);
            });
        setLoading(false);
    };

    //Logout function
    const authLogout = () => {
        setSuccess(false);
        setUser(null);
    };
    return (
        <AuthProvider
            value={{
                success,
                error,
                loading,
                user,
                authLogin,
                authRegister,
                authLogout,
            }}>
            {children}
        </AuthProvider>
    );
}

export { AuthContext, AuthContextProvider };