import { createContext, useCallback, useContext, useState } from "react";

const LoadingContext = createContext();
//createContext() ==> เป็นตัวสร้าง Context Object ขึ้นมาเพื่อเก็บข้อมูลที่ต้องการใช้ร่วมกัน, ใช้เป็นProvider, และใช้ Subscribe Context ที่ Components ปลายทาง

function LoadingContextProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const startLoading = useCallback(() => setLoading(true), []);
  const stopLoading = useCallback(() => setLoading(false), []);

  return (
    <LoadingContext.Provider
      value={{
        loading,
        startLoading,
        stopLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
  // Context.Provider ==> การสร้าง Context Object จะมาพร้อมกับ Provider ซึ่งเจ้า Provider จะช่วยให้ Components ปลายทางทั้งหลายสามารถ Subscribe การเปลี่ยนแปลงข้อมูลภายใน Context ได้
}

export const useLoading = () => {
  return useContext(LoadingContext);
};
// useContext() ==> ใช้เพื่อ Subscribe ข้อมูลภายใน Context ที่C omponent ปลายทาง ใช้ได้กับ Functional Component เท่านั้น การ Subscribe Context ด้วยวิธีนี้จะทำให้เราสามารถ Subscribe ได้มากกว่าหนึ่ง Context

export default LoadingContextProvider;
