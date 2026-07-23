import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in on initial load
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (formData) => {
    const res = await axios.post(`${API_URL}/api/auth/login`, formData);
    if (res.data) {
      localStorage.setItem("user", JSON.stringify(res.data));
      setUser(res.data);
    }
    return res;
  };

  const register = async (formData) => {
    const res = await axios.post(`${API_URL}/api/auth/register`, formData);
    if (res.data) {
      localStorage.setItem("user", JSON.stringify(res.data));
      setUser(res.data);
    }
    return res;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const forgotPassword = async (email) => {
    const res = await axios.post(`${API_URL}/api/auth/forgotpassword`, { email });
    return res;
  };

  const resetPassword = async (resetToken, password) => {
    const res = await axios.put(`${API_URL}/api/auth/resetpassword/${resetToken}`, { password });
    if (res.data && res.data.token) {
      // Not automatically logging them in based on this backend flow,
      // but we could. For now just return res.
    }
    return res;
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, forgotPassword, resetPassword, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
