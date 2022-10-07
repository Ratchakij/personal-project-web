const ACCESS_TOKEN = "ACCESS_TOKEN";

// อ่านค่า token
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

// set ค่า token ที่จะนำไปใช้
export const addAccessToken = (token) =>
  localStorage.setItem(ACCESS_TOKEN, token);

// remove token
export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);
