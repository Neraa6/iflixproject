// src/auth.js
export const login = () => localStorage.setItem('isLoggedIn', 'true');
export const logout = () => localStorage.removeItem('isLoggedIn');
export const isLoggedIn = () => localStorage.getItem('isLoggedIn') === 'true';