// เก็บข้อมูลเกี่ยวกับ authentication

import { createContext, useContext, useState } from "react";
import { addAccessToken, removeAccessToken } from "../utils/localStorage";
import * as authService from "../api/authApi";

// createContext ==> เป็นตัวสร้าง Context Object ขึ้นมาเพื่อเก็บข้อมูลที่ต้องการใช้ร่วมกัน, ใช้เป็น Provider, และใช้ Subscribe Context ที่Components ปลายทาง
const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const register = async (input) => {
    const res = await authService.register(input);
    setUser(true);
    addAccessToken(res.data.token);
  };

  const login = async (input) => {
    const res = await authService.login(input);
    setUser(true);
    addAccessToken(res.data.token);
  };

  const logout = () => {
    setUser(null);
    removeAccessToken();
  };

  return (
    // Context.Provider ==> การสร้าง Context Object จะมาพร้อมกับ Provider ซึ่งเจ้า Provider จะช่วยให้ Components ปลายทางทั้งหลายสามารถ Subscribe การเปลี่ยนแปลงข้อมูลภายใน Context ได้

    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  // useContext() ==> ใช้เพื่อ Subscribe ข้อมูลภายใน Context ที่ Component ปลายทาง ใช้ได้กับ Functional Component เท่านั้น การ Subscribe Context ด้วยวิธีนี้จะทำให้เราสามารถ Subscribe ได้มากกว่าหนึ่ง Context
  return useContext(AuthContext);
};

export default AuthContextProvider;
